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
        subtitle: "Сектор 33: Зона отчуждения (В разработке)",
        image: "assets/backgrounds/sector33.webp?v=20261030",
        code: "SECTOR 33 // CLASSIFIED",
        sceneTitle: "Sector 33: Wasteland Survival Rig",
        sceneDesc: "Постапокалиптический сектор 33 готовится к открытию экспозиции. Скоро в эфире.",
        hotspots: [
            {
                top: "50%", left: "50%",
                title: "Сектор 33 в разработке",
                desc: "Экспозиция постапокалиптических реликвий и сталкерского крафта готовится к открытию. Скоро в эфире.",
                price: "Скоро",
                badge: "SECTOR 33",
                status: "coming_soon",
                images: ["assets/backgrounds/sector33.webp?v=20261030"]
            }
        ]
    },
    horror: {
        badge: "CATALOGUE № 03 // HORROR RELICS",
        title: "Мрачные миры и мастерская",
        subtitle: "Коллекционные статуэтки, хоррор-арт и мрачные реликвии ручной работы в музейном исполнении.",
        image: "assets/backgrounds/horror_custom.webp?v=20261030",
        code: "RITUAL // HORROR.MK-I",
        sceneTitle: "Horror Relics & Dioramas",
        sceneDesc: "Коснитесь зловещих меток для изучения лота. (Клик мимо метки вызовет сбой света)",
        hotspots: [
            {
                top: "68%", left: "15%",
                title: "Ксеноморф / Xenomorph & Facehugger",
                desc: "Коллекционная биомеханическая статуэтка ксеноморфа и лицехвата в мрачной эстетике Чужого. Музейное качество детализации.",
                price: "7 500 ₽",
                badge: "XENOMORPH RELIC",
                images: [
                    "assets/items/xenomorph/view1.webp?v=20261030",
                    "assets/items/xenomorph/view2.webp?v=20261030"
                ]
            },
            {
                top: "76%", left: "38%",
                title: "Дзен-Ксеноморф / Alien Zen Meditation",
                desc: "Ироничная и детализированная арт-фигурка: ксеноморф в позе медитации дзен. Сочетание космического ужаса и абсолютного спокойствия.",
                price: "2 000 ₽",
                badge: "ZEN XENOMORPH",
                images: [
                    "assets/items/alien_zen/view1.webp?v=20261030",
                    "assets/items/alien_zen/view2.webp?v=20261030"
                ]
            },
            {
                top: "51%", left: "52%",
                title: "Сенобит Жрица / Hellraiser Priestess Cenobite",
                desc: "Мрачная скульптурная композиция жрицы сенобитов в эстетике темного фэнтези и оккультных ритуалов из Вселенной Восставшего из ада.",
                price: "10 000 ₽",
                badge: "CENOBITE PRIESTESS",
                images: [
                    "assets/items/cenobite/view1.webp?v=20261030",
                    "assets/items/cenobite/view2.webp?v=20261030"
                ]
            },
            {
                top: "67%", left: "69%",
                title: "Пинхед / Pinhead Bust (Hellraiser)",
                desc: "Премиальный коллекционный бюст лидера сенобитов Пинхеда. Знаковые модификации лица, гвозди и темный кожаный текстурный костюм.",
                price: "8 500 ₽",
                badge: "PINHEAD BUST",
                images: [
                    "assets/items/pinhead/view1.webp?v=20261030",
                    "assets/items/pinhead/view2.webp?v=20261030"
                ]
            }
        ]
    },
    arcane: {
        badge: "GRIMOIRE // ARCHIVE VOL. VII",
        title: "Магические артефакты HP & Craft",
        subtitle: "Коллекционный мерч в стилистике магических вселенных, алхимические фолианты и атмосферный реквизит.",
        image: "assets/backgrounds/hp_kraft.webp?v=20261030",
        code: "SPELL_FORGE: WIZARDRY",
        sceneTitle: "Magical Artifacts & Relics",
        sceneDesc: "Коснитесь изумрудных меток для изучения лота. (Клик мимо метки пробудит магические искры)",
        hotspots: [
            {
                top: "42%", left: "70%",
                title: "Феникс Фоукс / Fawkes the Phoenix",
                desc: "Коллекционная фигурка феникса Фоукса ручной работы с детализированным оперением и магической аурой.",
                price: "5 500 ₽",
                badge: "FAWKES THE PHOENIX",
                images: [
                    "assets/items/fawkes/view1.webp?v=20261030",
                    "assets/items/fawkes/view2.webp?v=20261030"
                ]
            },
            {
                top: "20%", left: "36%",
                title: "Сушёная голова / Shrunken Head",
                desc: "Мистический и колоритный реквизит ручной работы для любителей необычной алхимии, магии и Ночного Рыцаря.",
                price: "1 800 ₽",
                badge: "SHRUNKEN HEAD",
                images: [
                    "assets/items/shrunken_head/view1.webp?v=20261030",
                    "assets/items/shrunken_head/view2.webp?v=20261030"
                ]
            },
            {
                top: "70%", left: "73%",
                title: "Дневник Тома Реддла с клыком василиска",
                desc: "Коллекционный артефакт в старинном переплете с символикой и пронзенный клыком василиска — крестраж Темного Лорда.",
                price: "3 500 ₽",
                badge: "TOM RIDDLE'S DIARY",
                images: [
                    "assets/items/tom_riddle/view1.webp?v=20261030",
                    "assets/items/tom_riddle/view2.webp?v=20261030"
                ]
            },
            {
                top: "56%", left: "17%",
                title: "Исчезательный шкаф / Vanishing Cabinet",
                desc: "Миниатюрная копия легендарного магического шкафа из Хогвартса и Горбин и Бэркес с точной детализацией.",
                price: "2 500 ₽",
                badge: "VANISHING CABINET",
                images: [
                    "assets/items/vanishing/view1.webp?v=20261030",
                    "assets/items/vanishing/view2.webp?v=20261030"
                ]
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
