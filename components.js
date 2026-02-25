function createExpertiseCards(expertiseData) {
    const container = document.getElementById('expertise-container');
    if (!container) return;

    const cardsHTML = expertiseData.map(item => {
        if (item.featured) {
            return `
                <div class="glass-card bg-white dark:bg-surface-dark rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-center justify-between group lg:col-span-${item.span || 4}">
                    <div class="flex-1">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span class="material-symbols-outlined text-3xl">${item.icon}</span>
                            </div>
                            <h3 class="font-display text-2xl font-bold text-slate-900 dark:text-white">${item.title}</h3>
                        </div>
                        <p class="text-slate-600 dark:text-slate-400 max-w-2xl">
                            ${item.description}
                        </p>
                    </div>
                    ${item.tags && item.tags.length > 0 ? `
                    <div class="flex gap-2 flex-wrap justify-end max-w-sm">
                        ${item.tags.map(tag => `<span class="px-3 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-700 dark:text-slate-300">${tag}</span>`).join('')}
                    </div>
                    ` : ''}
                </div>
            `;
        }

        return `
            <div class="glass-card bg-white dark:bg-surface-dark rounded-2xl p-6 flex flex-col justify-between group h-full min-h-[240px] ${item.span > 1 ? `lg:col-span-${item.span}` : ''}">
                <div class="flex justify-between items-start mb-8">
                    <div class="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <span class="material-symbols-outlined text-3xl">${item.icon}</span>
                    </div>
                    <span class="text-xs text-slate-500 font-mono">${item.id}</span>
                </div>
                <div>
                    <h3 class="font-display text-xl font-bold mb-2 text-slate-900 dark:text-white">${item.title}</h3>
                    <p class="text-slate-600 dark:text-slate-400 text-sm ${item.tags && item.tags.length > 0 ? 'mb-4' : ''}">${item.description}</p>
                    ${item.tags && item.tags.length > 0 ? `
                    <div class="flex flex-wrap gap-2">
                        ${item.tags.map(tag => `<span class="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded text-xs text-slate-700 dark:text-slate-300">${tag}</span>`).join('')}
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = cardsHTML;
}

function createProjectCards(projectsData) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const cardsHTML = projectsData.map((project, index) => `
        <div class="group relative overflow-hidden rounded-2xl h-[480px] border border-slate-200 dark:border-white/10 bg-white dark:bg-surface-dark shadow-sm">
            <div class="absolute inset-0 z-0">
                <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 dark:opacity-60 group-hover:opacity-60 dark:group-hover:opacity-40" data-alt="${project.title} visualization" style="background-image: url('${project.image}');"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent dark:from-black dark:via-black/80"></div>
            </div>
            <div class="relative z-10 p-8 h-full flex flex-col justify-end">
                <div class="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-primary font-mono text-sm tracking-wider uppercase">${project.category}</span>
                        <div class="h-px w-8 bg-white/20"></div>
                    </div>
                    <h3 class="font-display text-3xl font-bold text-white mb-2">${project.title}</h3>
                    <p class="text-slate-200 dark:text-slate-300 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all">
                        ${project.description}
                    </p>
                    <div class="hidden lg:group-hover:grid grid-cols-3 gap-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        ${project.stats.map(stat => `
                        <div>
                            <p class="text-[10px] text-slate-300 dark:text-slate-500 uppercase font-bold mb-1">${stat.label}</p>
                            <p class="text-xs text-white dark:text-slate-300">${stat.value}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <button onclick="openProjectModal(${index})" class="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors cursor-pointer focus:outline-none">
                            View Case Study <span class="material-symbols-outlined text-sm">arrow_outward</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = cardsHTML;
}

// Modal Functions
function openProjectModal(index) {
    const project = portfolioData.projects[index];
    if (!project) return;

    // Disable background scrolling
    document.body.style.overflow = 'hidden';

    // Construct Stats HTML
    const statsHTML = project.stats.map(stat => `
        <div class="flex flex-col py-3 border-b border-slate-100 dark:border-white/5 last:border-0">
            <span class="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">${stat.label}</span>
            <span class="text-sm font-medium text-slate-900 dark:text-slate-200">${stat.value}</span>
        </div>
    `).join('');

    const modalHTML = `
        <div id="project-modal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-0 transition-opacity duration-300">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md transition-opacity cursor-pointer" onclick="closeProjectModal()"></div>
            
            <!-- Modal Content -->
            <div class="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden transform scale-95 transition-transform duration-300">
                <!-- Close Button -->
                <button onclick="closeProjectModal()" class="absolute top-4 right-4 z-10 size-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/60 text-white backdrop-blur-sm transition-colors focus:outline-none cursor-pointer">
                    <span class="material-symbols-outlined">close</span>
                </button>

                <!-- Scrollable Body -->
                <div class="overflow-y-auto flex-1 custom-scrollbar">
                    <!-- Image Header -->
                    <div class="w-full h-64 sm:h-80 md:h-96 bg-cover bg-center relative" style="background-image: url('${project.image}');">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    
                    <!-- Content Details -->
                    <div class="p-6 sm:p-10">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="px-3 py-1 bg-primary/10 text-primary dark:text-primary-light text-xs font-bold font-mono tracking-wider rounded-full uppercase">${project.category}</span>
                        </div>
                        
                        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">${project.title}</h2>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <!-- Main Description -->
                            <div class="md:col-span-2 space-y-6">
                                <h3 class="text-xl font-bold text-slate-900 dark:text-slate-200 border-b border-primary/20 pb-2 inline-block">Overview</h3>
                                <p class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                                    ${project.longDescription || project.description}
                                </p>
                                
                                <div class="pt-6">
                                    <a href="${project.link !== '#' ? project.link : '#'}" ${project.link === '#' ? 'onclick="event.preventDefault();"' : 'target="_blank"'} class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-medium transition-colors shadow-md shadow-primary/20">
                                        View Live Project <span class="material-symbols-outlined text-sm">open_in_new</span>
                                    </a>
                                </div>
                            </div>
                            
                            <!-- Sidebar Stats -->
                            <div class="bg-slate-50 dark:bg-white/5 rounded-xl p-6 border border-slate-100 dark:border-white/5 h-fit">
                                <h3 class="font-display text-lg font-bold text-slate-900 dark:text-white mb-4">Project Details</h3>
                                <div class="flex flex-col">
                                    ${statsHTML}
                                </div>
                            </div>
                        </div>
                        ${project.proj_img && project.proj_img.length > 0 ? `
                        <div class="mt-12 pt-3 border-t border-slate-200 dark:border-white/10">
                            <h3 class="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <span class="material-symbols-outlined text-primary">collections</span>
                                Project Gallery
                            </h3>
                            
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                ${project.proj_img.map(img => `
                                    <div class="overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 group relative cursor-zoom-in" 
                                        onclick="openLightbox('${img.path}', '${img.name}')">
                                        <img 
                                            src="${img.path}" 
                                            alt="${img.name}" 
                                            class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        >
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <p class="text-white text-xs font-medium">${img.name}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div id="lightbox-modal" class="fixed inset-0 z-[200] hidden flex-col items-center justify-center bg-slate-900/90 dark:bg-black/95 backdrop-blur-sm transition-opacity duration-300 opacity-0" onclick="closeLightbox()">
                            <div class="relative bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl max-w-full max-h-[90vh] flex flex-col transform scale-95 transition-transform duration-300" 
                                onclick="event.stopPropagation()"> <button onclick="closeLightbox()" class="absolute -top-3 -right-3 z-20 size-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-colors focus:outline-none cursor-pointer">
                                    <span class="material-symbols-outlined text-xl">close</span>
                                </button>

                                <div class="pb-4 overflow-hidden">
                                    <img id="lightbox-img" src="" alt="" class="max-w-full max-h-[70vh] object-contain rounded-lg">
                                    
                                    <div class="mt-4 text-center">
                                        <p id="lightbox-caption" class="text-slate-900 dark:text-white font-medium text-lg tracking-wide"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('modal-root').innerHTML = modalHTML;

    // Trigger animations
    requestAnimationFrame(() => {
        const modal = document.getElementById('project-modal');
        const content = modal.querySelector('.relative.w-full');
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
    });
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    // Reverse animations
    const content = modal.querySelector('.relative.w-full');
    modal.classList.add('opacity-0');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');

    // Wait for transition before removing from DOM
    setTimeout(() => {
        document.getElementById('modal-root').innerHTML = '';
        document.body.style.overflow = ''; // Restore scrolling
    }, 300);
}
function openLightbox(src, name) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');

    // ใส่ข้อมูลรูป
    img.src = src;
    img.alt = name;
    caption.innerText = name;

    // แสดง Modal ด้วย Animation
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Force reflow เพื่อให้ transition ทำงาน
    setTimeout(() => {
        modal.classList.add('opacity-100');
        img.classList.remove('scale-90');
        img.classList.add('scale-100');
    }, 10);

    // ปิดด้วยการกด Esc
    document.addEventListener('keydown', handleLightboxEsc);
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');

    modal.classList.remove('opacity-100');
    img.classList.add('scale-90');
    img.classList.remove('scale-100');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);

    document.removeEventListener('keydown', handleLightboxEsc);
}

function handleLightboxEsc(e) {
    if (e.key === 'Escape') closeLightbox();
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof portfolioData !== 'undefined') {
        createExpertiseCards(portfolioData.expertise);
        createProjectCards(portfolioData.projects);
    }
});
