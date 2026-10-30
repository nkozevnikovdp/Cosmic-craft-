with open('/home/nikolay/Cosmic-craft/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_lightbox = '''    <!-- Полноэкранный просмотрщик (Лайтбокс) -->
    <div id="lightbox-modal" class="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl hidden flex-col items-center justify-center p-2 sm:p-6 select-none" onclick="closeLightbox()">
        <button type="button" onclick="closeLightbox(event)" aria-label="Закрыть" class="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full current-glass flex items-center justify-center text-white text-2xl cursor-pointer border border-white/20 hover:scale-105 transition shadow-2xl">
            ✕
        </button>
        <button type="button" onclick="prevLightboxImg(event)" aria-label="Предыдущее фото" class="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full current-glass flex items-center justify-center text-white text-2xl cursor-pointer border border-white/20 hover:scale-105 transition shadow-2xl">
            ‹
        </button>
        <button type="button" onclick="nextLightboxImg(event)" aria-label="Следующее фото" class="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full current-glass flex items-center justify-center text-white text-2xl cursor-pointer border border-white/20 hover:scale-105 transition shadow-2xl">
            ›
        </button>
        <div class="relative w-full h-full flex items-center justify-center p-4 sm:p-12" onclick="event.stopPropagation()">
            <img id="lightbox-img" src="" alt="Artifact Zoom" class="max-w-full max-h-[88vh] object-contain rounded-xl shadow-2xl border border-white/10 transition-transform duration-200">
        </div>
    </div>'''

new_lightbox = '''    <!-- Полноэкранный просмотрщик (Лайтбокс) -->
    <div id="lightbox-modal" class="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl hidden items-center justify-center p-4 sm:p-12 select-none" onclick="closeLightbox()">
        <button type="button" onclick="closeLightbox(event)" aria-label="Закрыть" class="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full current-glass flex items-center justify-center text-white text-2xl cursor-pointer border border-white/20 hover:scale-105 transition shadow-2xl">
            ✕
        </button>
        <button type="button" onclick="prevLightboxImg(event)" aria-label="Предыдущее фото" class="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full current-glass flex items-center justify-center text-white text-2xl cursor-pointer border border-white/20 hover:scale-105 transition shadow-2xl">
            ‹
        </button>
        <button type="button" onclick="nextLightboxImg(event)" aria-label="Следующее фото" class="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full current-glass flex items-center justify-center text-white text-2xl cursor-pointer border border-white/20 hover:scale-105 transition shadow-2xl">
            ›
        </button>
        <div class="relative max-w-[92vw] max-h-[88vh] flex items-center justify-center" onclick="event.stopPropagation()">
            <img id="lightbox-img" src="" alt="Artifact Zoom" class="max-w-[92vw] max-h-[88vh] object-contain rounded-xl shadow-2xl border border-white/10 transition-transform duration-200">
        </div>
    </div>'''

if old_lightbox in content:
    content = content.replace(old_lightbox, new_lightbox)
    with open('/home/nikolay/Cosmic-craft/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully updated index.html lightbox structure.")
else:
    print("Exact old_lightbox block not found.")
