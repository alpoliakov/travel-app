//country
const countries = [
  {
    name: {
      ru: 'Германия',
      ua: 'Німеччина',
      en: 'Germany',
    },
    photos: [
      'https://images.unsplash.com/photo-1473615695634-d284ec918736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1554072675-66db59dba46f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80',
      'https://images.unsplash.com/photo-1548783094-f92d7c8ae2d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
      'https://images.unsplash.com/photo-1592855431000-2584c3a6f713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1271&q=80',
    ],
    video: 'https://www.youtube.com/watch?v=D7e8sv7lFeY',
    description: {
      ru:
        'Германия - страна разнообразных пейзажей и интересных городов. Ее экономика является крупнейшей в Европе и пятой по величине в мире. Именно в Германии были сделаны многие революционные научные открытия: наука и исследования имеют здесь давние традиции.',
      ua:
        "Німеччина - країна різноманітних пейзажів і цікавих міст. Її економіка є найбільшою в Європі і п'ятою за величиною в світі. Саме в Німеччині були зроблені багато революційні наукові відкриття: наука і дослідження мають тут давні традиції.",
      en:
        'Germany is a land of diverse landscapes and interesting cities. Its economy is the largest in Europe and the fifth largest in the world. It was in Germany that many revolutionary scientific discoveries were made: science and research have a long tradition here.',
    },
    capital: {
      name: {
        ua: 'Берлін',
        ru: 'Берлин',
        en: 'Berlin',
      },
      coordinates: [52.31, 13.23],
    },
    timeZone: 'CET',
    currency: 'EUR',
    sightList: [
      {
        name: {
          ru: 'Бранденбургские ворота',
          ua: 'Бранденбурзькі ворота',
          en: 'Brandenburg Gate',
        },
        description: {
          ru:
            'Символ столицы Германии, с 1989 года символ воссоединения страны. Построил архитектор Карл Готтгард Лангганс. Проект ворот он делал по мотивам проходов Акрополя. Сооружение в стиле классицизма великолепно сочетается с остальными зданиями на Парижской площади. Украшением ворот является квадрига высотой 6 метров с колесницей, которой управляет Виктория – богиня победы. Барельефы внутренних стен изображают подвиги Геракла.',
          ua:
            "Символ столиці Німеччини, з 1989 року символ возз'єднання країни. Збудував архітектор Карл Готтард Ланґганс. Проект воріт він робив за мотивами проходів Акрополя. Спорудження в стилі класицизму чудово поєднується з іншими будівлями на Паризькій площі. Окрасою воріт є квадрига висотою 6 метрів з колісницею, якою управляє Вікторія - богиня перемоги. Барельєфи внутрішніх стін зображують подвиги Геракла.",
          en:
            'The symbol of the capital of Germany, since 1989 the symbol of the reunification of the country. Built by architect Karl Gottgard Langgans. He designed the gate based on the passages of the Acropolis. The building in the style of classicism is perfectly combined with the rest of the buildings on the Parisian square. The decoration of the gate is a 6-meter high quadriga with a chariot driven by Victoria, the goddess of victory. The bas-reliefs of the inner walls depict the exploits of Hercules.',
        },
        photos: [
          'https://images.unsplash.com/photo-1612696700664-6a604df969f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1571662728319-d6265ebfcac9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80',
        ],
      },
      {
        name: {
          ru: 'Рейхстаг',
          ua: 'Рейхстаг',
          en: 'Reichstag',
        },
        description: {
          ru:
            'Здание рейхста́га или Рейхстаг — «здание имперского собрания») — историческое здание в Берлине, где в 1894—1933 годах заседал одноимённый государственный орган Германии — рейхстаг Германской империи и рейхстаг Веймарской республики. В 1945 году в Советском Союзе здание германского парламента было объявлено главным символом гитлеровской Германии. И.В. Сталин приказал водрузить на нём Знамя Победы. С 1999 года в реконструированном здании рейхстага размещается бундестаг.',
          ua:
            'Будівля рейхстагу або Рейхстаг - «будівля імперського зборів») - історична будівля в Берліні, де в 1894-1933 роках засідав однойменний державний орган Німеччини - рейхстаг Німецької імперії і рейхстаг Веймарської республіки. У 1945 році в Радянському Союзі німецький парламент було оголошено головним символом гітлерівської Німеччини. І.В. Сталін наказав поставити на ньому Прапор Перемоги. З 1999 року в реконструйованій будівлі рейхстагу розміщується бундестаг.',
          en:
            'The Reichstag building or the Reichstag - "the building of the imperial assembly") is a historical building in Berlin, where the eponymous state body of Germany, the Reichstag of the German Empire and the Reichstag of the Weimar Republic, met in 1894-1933. In 1945, in the Soviet Union, the building of the German Parliament was declared the main symbol of Nazi Germany. I.V. Stalin ordered the Victory Banner to be hoisted on it. Since 1999, the reconstructed Reichstag building has been home to the Bundestag.',
        },
        photos: [
          'https://images.unsplash.com/photo-1591862682910-eec7e143f0e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1571778650479-ebcd46a2fecf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1611924585717-e957986e1851?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        ],
      },
      {
        name: {
          ru: 'Мариенплац',
          ua: 'Марієнплац',
          en: 'Marienplatz',
        },
        description: {
          ru:
            'Мари́енплац — центральная площадь Мюнхена, центр пешеходной зоны и одна из главных достопримечательностей центра города. На площади расположены мюнхенские ратуши — Новая и Старая, отсюда начинается Кауфингерштрассе, где множество магазинов. В районе Мариенплац также находятся исторический рынок Виктуалиенмаркт, самый большой мюнхенский собор Фрауэнкирхе и многие другие достопримечательности.',
          ua:
            "Марієнплац - центральна площа Мюнхена, центр пішохідної зони і одна з головних визначних пам'яток центру міста. На площі розташовані мюнхенські ратуші - Нова і Стара, звідси починається Кауфингерштрассе, де безліч магазинів. В районі Марієнплац також знаходяться історичний ринок Віктуалієнмаркт, найбільший мюнхенський собор Фрауенкірхе та багато інших визначних пам'яток.",
          en:
            "Marienplatz is the central square of Munich, the center of the pedestrian zone and one of the main attractions of the city center. On the square are the Munich town halls - New and Old, from here begins the Kaufingerstrasse, where there are many shops. The historic Viktualienmarkt market, Munich's largest cathedral, the Frauenkirche and many other attractions are also located in the Marienplatz area.",
        },
        photos: [
          'https://images.unsplash.com/photo-1577462281852-279bf4986f7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1586015078685-6462ea6d8ebc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1586009468954-7c797a08fe7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        ],
      },
      {
        name: {
          ru: 'Октоберфест',
          ua: 'Октоберфест',
          en: 'Oktoberfest',
        },
        description: {
          ru:
            'Окто́берфест — фольклорный фестиваль , ежегодно проводимый в Мюнхене, самое большое народное гуляние в мире. Праздник начинается во второй половине сентября на лугу Терезы в центре Мюнхена, неподалёку от Главного вокзала, и продолжается в среднем 16—18 дней. Праздник отличается большим количеством пивных палаток и разнообразных аттракционов. Октоберфест привлекает каждый год около 6 млн посетителей, приезжающих в Мюнхен со всех частей Баварии и Германии, а также из других стран. Октоберфест организуется и проводится администрацией Мюнхена. К участию в этом фестивале допускаются только мюнхенские до 120 км в округе пивоваренные компании, которые варят для него специальное октоберфестовское пиво с содержанием алкоголя 5,8—6,3 %, которое в другое время года обычно называют мартовским или венским.',
          ua:
            'Октоберфест - фольклорний фестиваль, щорічно проводиться в Мюнхені, найбільше народне гуляння в світі. Свято починається у другій половині вересня на лугу Терези в центрі Мюнхена, неподалік від Головного вокзалу, і триває в середньому 16-18 днів. Свято відрізняється великою кількістю пивних наметів і різноманітних атракціонів. Октоберфест приваблює щороку близько 6 млн відвідувачів, які приїжджають до Мюнхена з усіх частин Баварії та Німеччини, а також з інших країн. Октоберфест організовується і проводиться адміністрацією Мюнхена. До участі в цьому фестивалі допускаються тільки мюнхенські до 120 км в окрузі пивоварні компанії, які варять для нього спеціальне октоберфестівське пиво з вмістом алкоголю 5,8-6,3%, яке в іншу пору року зазвичай називають березневим або віденським.',
          en:
            'Oktoberfest is a folklore festival held annually in Munich, the largest folk festival in the world. The holiday begins in the second half of September in the Theresa meadow in the center of Munich, not far from the Main Station, and lasts an average of 16-18 days. The holiday is distinguished by a large number of beer tents and a variety of attractions. Oktoberfest attracts around 6 million visitors every year to Munich from all parts of Bavaria and Germany, as well as from other countries. The Oktoberfest is organized and conducted by the Munich administration. Only Munich brewing companies up to 120 km in the vicinity are allowed to participate in this festival, which brew for it a special Oktoberfest beer with an alcohol content of 5.8-6.3%, which at other times of the year is usually called March or Vienna.',
        },
        photos: [
          'https://images.unsplash.com/photo-1600338663176-b4c5b853d037?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80',
          'https://images.unsplash.com/photo-1512729360855-0d1e1b0983a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1539674629435-d67ef5e785f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        ],
      },
      {
        name: {
          ru: 'Берлинская стена',
          ua: 'Берлінська стіна',
          en: 'Berlin Wall',
        },
        description: {
          ru:
            'Берли́нская стена́ — инженерно-оборудованная и укреплённая государственная граница Германской Демократической Республики, построенная на территории ГДР вокруг Западного Берлина и существовавшая с 13 августа 1961 года по 9 ноября 1989 года. Берлинская стена разделяла западную и восточную части города, отделяя Западный Берлин от территории ГДР. Общая протяжённость стены составляла 155 км (43 км в черте Берлина и 112 км по внутренней границе Западного Берлина).',
          ua:
            'Берлінська стіна - інженерно-обладнана і укріплена державний кордон Німецької Демократичної Республіки, побудована на території НДР навколо Західного Берліна і існувала з 13 серпня 1961 року по 9 листопада 1989 року. Берлінська стіна розділяла західну і східну частини міста, відокремлюючи Західний Берлін від території НДР. Загальна протяжність стіни становила 155 км (43 км в межах Берліна і 112 км по внутрішньому кордоні Західного Берліна).',
          en:
            'The Berlin Wall is an engineering-equipped and fortified state border of the German Democratic Republic, built on the territory of the GDR around West Berlin and existed from August 13, 1961 to November 9, 1989. The Berlin Wall divided the western and eastern parts of the city, separating West Berlin from the territory of the GDR. The total length of the wall was 155 km (43 km within Berlin and 112 km along the inner border of West Berlin).',
        },
        photos: [
          'https://images.unsplash.com/photo-1510953851460-301fe300c5ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80',
          'https://images.unsplash.com/photo-1536782103660-cd9ce4735ac6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1561806711-5725ab67c962?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        ],
      },
      {
        name: {
          ru: 'Замок Нойшванштайн',
          ua: 'Замок Нойшванштайн',
          en: 'Neuschwanstein Castle',
        },
        description: {
          ru:
            'Замок Нойшванштайн — романтический замок баварского короля Людвига II около городка Фюссен и замка Хоэншвангау в юго-западной Баварии, недалеко от австрийской границы. Одно из самых популярных среди туристов мест на юге Германии.',
          ua:
            'Замок Нойшванштайн - романтичний замок баварського короля Людвіга II біля містечка Фюссен і замку Хоеншвангау в південно-західній Баварії, недалеко від австрійського кордону. Одне з найпопулярніших серед туристів місць на півдні Німеччини.',
          en:
            'Neuschwanstein Castle is a romantic castle of the Bavarian King Ludwig II near the town of Füssen and Hohenschwangau Castle in southwestern Bavaria, near the Austrian border. One of the most popular tourist destinations in southern Germany.',
        },
        photos: [
          'https://images.unsplash.com/photo-1492502014314-f5522cae92a6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1496&q=80',
          'https://images.unsplash.com/photo-1520444464-a81371eac7a7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80',
          'https://images.unsplash.com/photo-1537734477387-1ed0cfbf609c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80',
        ],
      },
      {
        name: {
          ru: 'Кёльнский собор',
          ua: 'Кельнський собор',
          en: 'Cologne Cathedral',
        },
        description: {
          ru:
            'Кёльнский собор — римско-католический готический собор в городе Кёльне. Занимает третье место в списке самых высоких церквей мира и внесён в список объектов Всемирного культурного наследия. Строительство главного храма Кёльнской архиепископии велось в два приёма — в 1248—1437 гг. и в 1842—1880 годах. По окончании строительства 157-метровый собор на четыре года стал самым высоким зданием мира.',
          ua:
            "Кельнський собор - римсько-католицький готичний собор в місті Кельні. Займає третє місце в списку найвищих церков світу і внесений до списку об'єктів Всесвітньої культурної спадщини. Будівництво головного храму Кельнської архієпископії велося в два прийоми - в 1248-1437 рр. і в 1842-1880 роках. Після закінчення будівництва 157-метровий собор на чотири роки став найвищою будівлею світу.",
          en:
            'Cologne Cathedral is a Roman Catholic Gothic cathedral in the city of Cologne. Ranked third in the list of the tallest churches in the world and is included in the list of World Cultural Heritage sites. The construction of the main church of the Cologne Archdiocese was carried out in two stages - in 1248-1437. and in 1842-1880. Upon completion of construction, the 157-meter cathedral became the tallest building in the world for four years.',
        },
        photos: [
          'https://images.unsplash.com/photo-1585991819104-2ced59def4ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
          'https://images.unsplash.com/photo-1489910339994-ce69e94e4856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1262&q=80',
          'https://images.unsplash.com/photo-1504801019156-beabdea673be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1249&q=80',
        ],
      },
    ],
  },
];

// languages

const languages = ['ru', 'ua'];
