const scenes = {
    gothic: {
        badge: "CATALOGUE № 01 // GOTHIC CRYPT",
        title: "Артефакты темной эстетики",
        subtitle: "Коллекционные статуэтки, готические аксессуары и фактурный хэндмейд в музейном исполнении.",
        image: "gothic_altar.jpg",
        code: "SCENE 01 // CRYPT ALTAR",
        sceneTitle: "Gothic Altar & Occult Relics",
        sceneDesc: "Коснитесь золотых меток для изучения лота. (Клик мимо метки пробудит туман)",
        hotspots: [
            {
                top: "28%", left: "41%",
                title: "Черный кружевной чокер",
                desc: "Ювелирная фурнитура, черненый металл, искусственный хрусталь и филигранная ручная сборка в викторианском стиле.",
                price: "2 500 ₽",
                badge: "VICTORIAN CHOKER",
                images: ["gothic_altar.jpg", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "48%", left: "70%",
                title: "Череп со светящимися рунами",
                desc: "Коллекционный арт-объект с инкрустацией, патиной под античное серебро и мягким мистическим свечением глазниц.",
                price: "6 200 ₽",
                badge: "OCCULT RELIC",
                images: ["gothic_altar.jpg", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "62%", left: "25%",
                title: "Фолиант с Пентаграммой",
                desc: "Кожаный переплет ручной работы, барельефный сигил, состаренная бумага для тайных записей.",
                price: "4 100 ₽",
                badge: "GRIMOIRE ARCHIVE",
                images: ["gothic_altar.jpg", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop"]
            }
        ]
    },
    postap: {
        badge: "CATALOGUE № 02 // WASTELAND",
        title: "Лут из пустошей и кастом",
        subtitle: "Статуэтки в боевом везеринге, грубая стропа, железо и брутальные артефакты эпохи апокалипсиса.",
        image: "postap_ruins.jpg",
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
                images: ["postap_ruins.jpg", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "55%", left: "62%",
                title: "Ржавая кружка выживальщика",
                desc: "Эмалированная армейская кружка с имитацией радиоактивного износа, потеков ржавчины и копоти.",
                price: "1 400 ₽",
                badge: "OUTPOST LUG",
                images: ["postap_ruins.jpg", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "70%", left: "45%",
                title: "Обугленная книга «SURVIVE»",
                desc: "Арт-фолиант в обгорелом переплете с выжженными страницами и следами ядерного пепла.",
                price: "2 600 ₽",
                badge: "ARCHIVE RELIC",
                images: ["postap_ruins.jpg", "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop"]
            }
        ]
    },
    horror: {
        badge: "CATALOGUE № 03 // HORROR RELICS",
        title: "Мрачные миры и мастерская",
        subtitle: "Коллекционные статуэтки, хоррор-арт и мрачные реликвии ручной работы в музейном исполнении.",
        image: "horror_jason.jpg",
        code: "RITUAL // HORROR.MK-I",
        sceneTitle: "Jason Voorhees Custom Altar",
        sceneDesc: "Коснитесь зловещих меток для изучения лота. (Клик мимо метки вызовет сбой света)",
        hotspots: [
            {
                top: "18%", left: "50%",
                title: "Маска и образ Джейсона Вурхиза",
                desc: "Коллекционная статуэтка ручной работы. Прецизионный 3D-скульпт, детализированная хоккейная маска и фактурная одежда.",
                price: "8 500 ₽",
                badge: "MASTERWORK EXCLUSIVE",
                images: ["horror_jason.jpg", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "45%", left: "36%",
                title: "Ржавое окровавленное мачете",
                desc: "Кастомное оружие с эффектом запекшейся крови, ржавчины и следов жестоких расправ в лагере у озера.",
                price: "2 900 ₽",
                badge: "BLOODY WEAPON",
                images: ["horror_jason.jpg", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "55%", left: "75%",
                title: "Черный кофр с эмблемой черепа",
                desc: "Коллекционный кейс с латунной фурнитурой и фирменным эмблематичным черепом ручной работы.",
                price: "3 800 ₽",
                badge: "LIMITED BOX",
                images: ["horror_jason.jpg", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop"]
            }
        ]
    },
    arcane: {
        badge: "GRIMOIRE // ARCHIVE VOL. VII",
        title: "Магические артефакты HP & Craft",
        subtitle: "Коллекционный мерч в стилистике факультета Слизерин, алхимические фолианты и атмосферный реквизит.",
        image: "hp_slytherin.jpg",
        code: "SPELL_FORGE: SLYTHERIN",
        sceneTitle: "Slytherin Alchemical Chamber",
        sceneDesc: "Коснитесь изумрудных меток для изучения лота. (Клик мимо метки пробудит магические искры)",
        hotspots: [
            {
                top: "55%", left: "20%",
                title: "Кружка Слизерин (Кастом)",
                desc: "Массивная керамическая кружка с барельефной эмблемой змеи факультета, ручной росписью и эффектом старой глазури.",
                price: "3 400 ₽",
                badge: "SLYTHERIN HOUSE",
                images: ["hp_slytherin.jpg", "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "30%", left: "50%",
                title: "Изумрудное перо и чернильница",
                desc: "Коллекционный набор для писем в готическом стиле. Натуральное перо в патине и стеклянная чернильница.",
                price: "2 100 ₽",
                badge: "SCRIBE SET",
                images: ["hp_slytherin.jpg", "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop"]
            },
            {
                top: "65%", left: "72%",
                title: "Фолиант Древних Заклинаний",
                desc: "Кожаный переплет с барельефом, состаренная бумага ручного литья, алхимические формулы и рецепты зелий.",
                price: "4 800 ₽",
                badge: "GRIMOIRE ARCHIVE",
                images: ["hp_slytherin.jpg", "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop"]
            }
        ]
    }
};

const calendarEvents = [
    {
        shortDate: "31.10",
        title: "Halloween with Unpleasant Scream",
        fullDate: "31 Октября 2026",
        time: "19:00",
        location: "Бар Гнозис (Первомайская, 40)"
    },
    {
        shortDate: "Сб-Вс",
        title: "ТРЦ «Гринвич» (Ярмарка)",
        fullDate: "Каждую Субботу и Воскресенье",
        time: "10:00 - 21:00",
        location: "ТРЦ Гринвич (8 Марта, 46), 0 Уровень, Ярмарка"
    },
    {
        shortDate: "01.11",
        title: "Ночной релиз лимитированной серии алхимических фолиантов",
        fullDate: "1 ноября 2026",
        time: "00:00 (МСК)",
        location: "Online // Официальный релиз"
    }
];
