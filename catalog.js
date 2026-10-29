const scenes = {
    gothic: {
        badge: "CATALOGUE № 01 // GOTHIC CRYPT",
        title: "Артефакты темной эстетики",
        subtitle: "Коллекционные статуэтки, готические аксессуары и фактурный хэндмейд в музейном исполнении.",
        image: "assets/backgrounds/gothic_custom.webp?v=20261028",
        code: "SCENE 01 // CRYPT ALTAR",
        sceneTitle: "Gothic Altar & Occult Relics",
        sceneDesc: "Коснитесь золотых меток для изучения лота. (Клик мимо метки пробудит туман)",
        hotspots: [
            {
                top: "42%", left: "32%",
                title: "Ритуальный череп с рунами",
                desc: "Коллекционный артефакт с внутренней подсветкой глазниц, кроваво-красными руническими символами и детальной ручной росписью.",
                price: "6 500 ₽",
                badge: "RITUAL SKULL",
                images: ["assets/backgrounds/gothic_custom.webp?v=20261016", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "45%", left: "68%",
                title: "Готический бюст «Madame Noir»",
                desc: "Коллекционный арт-объект в викторианском корсете с ручной росписью татуировок на шее и груди, бархатная текстура и музейное качество.",
                price: "8 900 ₽",
                badge: "GOTHIC BUST",
                images: ["assets/backgrounds/gothic_custom.webp?v=20261016", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "78%", left: "54%",
                title: "Химеры ночи (Пара котов)",
                desc: "Мистические фигурки готических котов ручной работы с крыльями и оккультными деталями. Лимитированная серия.",
                price: "3 200 ₽",
                badge: "MYSTIC FAMILIARS",
                images: ["assets/backgrounds/gothic_custom.webp?v=20261016", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop"]
            }
        ]
    },
    postap: {
        badge: "CATALOGUE № 02 // WASTELAND",
        title: "Постапокалипсис",
        subtitle: "Сектор 04: Зона отчуждения (В разработке)",
        image: "assets/backgrounds/skoro.jpg",
        code: "SECTOR 04 // CLASSIFIED",
        sceneTitle: "Wasteland Survival Rig (Coming Soon)",
        sceneDesc: "Сектор готовится к открытию. Скоро в эфире.",
        hotspots: [
            {
                top: "50%", left: "50%",
                title: "Сектор в разработке",
                desc: "Экспозиция постапокалиптических реликвий и сталкерского крафта готовится к открытию. Скоро в эфире.",
                price: "Скоро",
                badge: "CLASSIFIED",
                status: "coming_soon",
                images: ["assets/backgrounds/skoro.jpg"]
            }
        ]
    },
    horror: {
        badge: "CATALOGUE № 03 // HORROR RELICS",
        title: "Мрачные миры и мастерская",
        subtitle: "Коллекционные статуэтки, хоррор-арт и мрачные реликвии ручной работы в музейном исполнении.",
        image: "assets/backgrounds/horror_custom.webp?v=20261028",
        code: "RITUAL // HORROR.MK-I",
        sceneTitle: "Horror Relics & Dioramas",
        sceneDesc: "Коснитесь зловещих меток для изучения лота. (Клик мимо метки вызовет сбой света)",
        hotspots: [
            {
                top: "40%", left: "7%",
                title: "Диорама Silent Hill (Хизер)",
                desc: "Коллекционная диорама ручной работы: Хизер Мейсон с дробовиком на фоне разрушенной стены и безликая медсестра с топором.",
                price: "15 500 ₽",
                badge: "SILENT HILL DIORAMA",
                images: [
                    "assets/items/heather/view1.webp?v=20261017",
                    "assets/items/heather/view2.webp?v=20261017",
                    "assets/items/heather/view3.webp?v=20261017"
                ]
            },
            {
                top: "68%", left: "49%",
                title: "Сенобит Анджелика: Культ боли",
                desc: "Мрачная скульптурная композиция в эстетике темного фэнтези и оккультных ритуалов. Тончайшая детализация фактур.",
                price: "10 000 ₽",
                badge: "CENOBITE RELIC",
                images: [
                    "assets/items/cenobite/view1.webp?v=20261019",
                    "assets/items/cenobite/view2.webp?v=20261019",
                    "assets/items/cenobite/view3.webp?v=20261019"
                ]
            },
            {
                top: "65%", left: "66%",
                title: "Леди Альсина Димитреску",
                desc: "Премиальная художественная диорама в готической стилистике Resident Evil Village: аристократичное величие, бархатные текстуры и кровавый акцент.",
                price: "ПРОДАНО",
                badge: "ARCHIVED // PRIVATE COLLECTION",
                status: "sold",
                images: [
                    "assets/items/dimitrescu/view1.webp?v=20261017",
                    "assets/items/dimitrescu/view2.webp?v=20261017",
                    "assets/items/dimitrescu/view3.webp?v=20261017"
                ]
            }
        ]
    },
    arcane: {
        badge: "GRIMOIRE // ARCHIVE VOL. VII",
        title: "Магические артефакты HP & Craft",
        subtitle: "Коллекционный мерч в стилистике магических вселенных, алхимические фолианты и атмосферный реквизит.",
        image: "assets/backgrounds/hp_slytherin.webp?v=20261028",
        code: "SPELL_FORGE: WIZARDRY",
        sceneTitle: "Magical Artifacts & Relics",
        sceneDesc: "Коснитесь изумрудных меток для изучения лота. (Клик мимо метки пробудит магические искры)",
        hotspots: [
            {
                top: "49%", left: "20%",
                title: "Фоукс (Fawkes)",
                desc: "Коллекционная фигурка феникса Фоукса ручной работы с детализированным оперением и магической аурой.",
                price: "5 500 ₽",
                badge: "FAWKES THE PHOENIX",
                images: ["assets/backgrounds/hp_slytherin.webp?v=20261025", "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "66%", left: "62%",
                title: "Дневник Тома Марволо Риддла (T. M. Riddle's Diary)",
                desc: "Коллекционный артефакт в старинном переплете с символикой и атмосферой темных искусств.",
                price: "3 500 ₽",
                badge: "RIDDLE'S DIARY",
                images: ["assets/backgrounds/hp_slytherin.webp?v=20261025", "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "28%", left: "68%",
                title: "Сушёная голова",
                desc: "Мистический и колоритный реквизит ручной работы для любителей необычной алхимии и магии.",
                price: "1 800 ₽",
                badge: "SHRUNKEN HEAD",
                images: ["assets/backgrounds/hp_slytherin.webp?v=20261025", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop"]
            }
        ]
    }
};

const calendarEvents = [
    {
        shortDate: "СБ-ВС",
        fullDate: "Суббота — Воскресенье",
        time: "10:00-21:00",
        location: "ТРЦ Гринвич (8 Марта 46) Ярмарка, 0 уровень",
        title: "Ярмарка в ТРЦ Гринвич"
    },
    {
        shortDate: "31 ОКТ",
        fullDate: "31 октября 2026",
        time: "19:00",
        location: "Бар Гнозис (Первомайская 40)",
        title: "Halloween with Unpleasant Scream"
    },
    {
        shortDate: "05 НОЯ",
        fullDate: "5 ноября 2026",
        time: "18:00 МСК",
        location: "Галерея артефактов",
        title: "Открытие выставки алхимических артефактов и фолиантов"
    }
];
