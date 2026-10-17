const scenes = {
    gothic: {
        badge: "CATALOGUE № 01 // GOTHIC CRYPT",
        title: "Артефакты темной эстетики",
        subtitle: "Коллекционные статуэтки, готические аксессуары и фактурный хэндмейд в музейном исполнении.",
        image: "assets/backgrounds/gothic_custom.jpg?v=20261016",
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
                images: ["assets/backgrounds/gothic_custom.jpg?v=20261016", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "45%", left: "68%",
                title: "Готический бюст «Madame Noir»",
                desc: "Коллекционный арт-объект в викторианском корсете с ручной росписью татуировок на шее и груди, бархатная текстура и музейное качество.",
                price: "8 900 ₽",
                badge: "GOTHIC BUST",
                images: ["assets/backgrounds/gothic_custom.jpg?v=20261016", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "78%", left: "54%",
                title: "Химеры ночи (Пара котов)",
                desc: "Мистические фигурки готических котов ручной работы с крыльями и оккультными деталями. Лимитированная серия.",
                price: "3 200 ₽",
                badge: "MYSTIC FAMILIARS",
                images: ["assets/backgrounds/gothic_custom.jpg?v=20261016", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop"]
            }
        ]
    },
    postap: {
        badge: "CATALOGUE № 02 // WASTELAND",
        title: "Лут из пустошей и кастом",
        subtitle: "Статуэтки в боевом везеринге, грубая стропа, железо и брутальные артефакты эпохи апокалипсиса.",
        image: "assets/backgrounds/postap_ruins.jpg",
        code: "SECTOR 04 // OUTPOST_MK-IV",
        sceneTitle: "Wasteland Survival Rig",
        sceneDesc: "Изучите элементы защитного снаряжения и лут. (Клик мимо метки активирует ПНВ)",
        hotspots: [
            {
                top: "38%", left: "30%",
                title: "Армейский противогаз ГП-5",
                desc: "Кастомный постапокалиптический арт-объект в боевом везеринге, с ржавчиной, патиной и потертостями.",
                price: "3 200 ₽",
                badge: "WASTELAND GEAR",
                images: ["assets/backgrounds/postap_ruins.jpg", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "55%", left: "62%",
                title: "Ржавая кружка выживальщика",
                desc: "Эмалированная армейская кружка с имитацией радиоактивного износа, потеков ржавчины и копоти.",
                price: "1 400 ₽",
                badge: "OUTPOST LUG",
                images: ["assets/backgrounds/postap_ruins.jpg", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "70%", left: "45%",
                title: "Обугленная книга «SURVIVE»",
                desc: "Арт-фолиант в обгорелом переплете с выжженными страницами и следами ядерного пепла.",
                price: "2 600 ₽",
                badge: "ARCHIVE RELIC",
                images: ["assets/backgrounds/postap_ruins.jpg", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop"]
            }
        ]
    },
    horror: {
        badge: "CATALOGUE № 03 // HORROR RELICS",
        title: "Мрачные миры и мастерская",
        subtitle: "Коллекционные статуэтки, хоррор-арт и мрачные реликвии ручной работы в музейном исполнении.",
        image: "assets/backgrounds/horror_custom.jpg?v=20261016",
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
                    "assets/items/heather/view1.jpg?v=20261017",
                    "assets/items/heather/view2.jpg?v=20261017",
                    "assets/items/heather/view3.jpg?v=20261017"
                ]
            },
            {
                top: "68%", left: "49%",
                title: "Сенобит Анджелика: Культ боли",
                desc: "Мрачная скульптурная композиция в эстетике темного фэнтези и оккультных ритуалов. Тончайшая детализация фактур.",
                price: "10 000 ₽",
                badge: "CENOBITE RELIC",
                images: ["assets/backgrounds/horror_custom.jpg?v=20261016", "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "65%", left: "66%",
                title: "Леди Альсина Димитреску",
                desc: "Премиальная художественная диорама в готической стилистике Resident Evil Village: аристократичное величие, бархатные текстуры и кровавый акцент.",
                price: "19 500 ₽",
                badge: "RE VILLAGE MASTERWORK",
                images: [
                    "assets/items/dimitrescu/view1.jpg?v=20261017",
                    "assets/items/dimitrescu/view2.jpg?v=20261017",
                    "assets/items/dimitrescu/view3.jpg?v=20261017"
                ]
            }
        ]
    },
    arcane: {
        badge: "GRIMOIRE // ARCHIVE VOL. VII",
        title: "Магические артефакты HP & Craft",
        subtitle: "Коллекционный мерч в стилистике факультета Слизерин, алхимические фолианты и атмосферный реквизит.",
        image: "assets/backgrounds/hp_slytherin.jpg",
        code: "SPELL_FORGE: SLYTHERIN",
        sceneTitle: "Slytherin Alchemical Chamber",
        sceneDesc: "Коснитесь изумрудных меток для изучения лота. (Клик мимо метки пробудит магические искры)",
        hotspots: [
            {
                top: "55%", left: "20%",
                title: "Эликсир памяти",
                desc: "Стеклянный флакон со светящейся субстанцией и пробкой ручной работы.",
                price: "2 800 ₽",
                badge: "POTION VIAL",
                images: ["assets/backgrounds/hp_slytherin.jpg", "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "40%", left: "80%",
                title: "Магический фолиант заклинаний",
                desc: "Книга в старинном переплете с ручной росписью и символикой факультета.",
                price: "4 500 ₽",
                badge: "SPELLBOOK",
                images: ["assets/backgrounds/hp_slytherin.jpg", "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop"]
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
