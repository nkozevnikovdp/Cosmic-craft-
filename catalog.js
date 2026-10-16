// catalog.js — мост к content.json или fallback-данные
let scenes = {};
let calendarEvents = [];

async function loadCatalogData() {
    try {
        const response = await fetch('content.json?v=' + Date.now());
        if (!response.ok) throw new Error('Failed to load content.json');
        const data = await response.json();
        scenes = data.scenes;
        calendarEvents = data.calendarEvents;
        
        // Перерисовываем текущую тему, если интерфейс уже инициализирован
        if (typeof currentTheme !== 'undefined' && typeof setTheme === 'function') {
            setTheme(currentTheme);
        }
        
        // Рендерим календарь
        const calendarList = document.getElementById('calendar-list');
        if (calendarList && typeof calendarEvents !== 'undefined') {
            calendarList.innerHTML = calendarEvents.map(ev => `
                <button type="button" onclick="openEventModal('${ev.title.replace(/'/g, "\\'")}', '${ev.fullDate.replace(/'/g, "\\'")}', '${ev.time.replace(/'/g, "\\'")}', '${ev.location.replace(/'/g, "\\'")}')" class="w-full group p-2.5 rounded-xl cursor-pointer transition-all border border-white/5 hover:border-[#B88E4B]/40 hover:bg-white/[0.03] flex items-start justify-between text-left">
                    <span class="font-mono font-bold current-accent-text tracking-wider shrink-0 mr-3">${ev.shortDate}</span>
                    <span class="text-[#B0AAA2] text-right font-light group-hover:text-white transition-colors">${ev.title}</span>
                </button>
            `).join('');
        }
    } catch (e) {
        console.error("Error loading catalog data:", e);
    }
}

// Загружаем при старте
loadCatalogData();
