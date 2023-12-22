const textNodes = [
    {
        id: 34,
        img: '34.jpg', 
        text: "Проводя выходные в лесу, ты случайно наткнулся на древнюю арку, которая оказалась магическим порталом в мистический замок.",
        options: [
            {
                text: 'Начать',
                nextText: 1
            }
        ]
    }, 
    {
        id: 1,
        img: '1.jpg', 
        text: "Ты оказываешься перед зловещими воротами замка. Войдешь внутрь сразу или осмотришь территорию?",
        options: [
            {
                text: 'Сразу',
                nextText: 2
            },
            {
                text: 'Осмотрюсь',
                nextText: 3
            }
        ]
    }, 
    {
        id: 2,
        img: '2.jpg',
        text:  'Ты проходишь через древний вестибюль и видишь две двери: одна из них прикрыта, но из-под нее идут страшные звуки, вторая открыта. Какую дверь откроешь?',
        options: [
            {
                text: 'Первую',
                nextText: 4
            },
            {
                text: 'Вторую',
                nextText: 5
            }
        ]
    },
    {
        id: 3,
        img: '3.jpg',
        text:  'Ты решил осмотреть территорию замка. Было заметно, что здесь давно не ступала нога человека. Создавалось жуткое ощущение, будто здесь присутствует нечистая сила...\nВнезапно ты увидел лестницу, ведущую в подземелье. Пойдешь туда или зайдешь в замок?',
        options: [
            {
                text: 'Подземелье',
                nextText: 6
            },
            {
                text: 'Замок',
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        img: '4.jpg',
        text:  'Ты заходишь в комнату с обширной библиотекой. На полке стоит два старинных свитка. Который возьмешь: левый или правый?',
        options: [
            {
                text: 'Левый',
                nextText: 7
            },
            {
                text: 'Правый',
                nextText: 8
            }
        ]
    },
    {
        id: 5,
        img: '5.jpg',
        text:  'Ты находишься в секретной комнате, заполненной древним оружием. Берешь с собой меч или кинжал?',
        options: [
            {
                text: 'Меч',
                nextText: 9
            },
            {
                text: 'Кинжал',
                nextText: 10
            }
        ]
    },
    {
        id: 6,
        img: '6.jpg',
        text:  'Ты оказываешься в подземелье, которое когда-то было мрачной тюрьмой для самых опасных преступников. Прямо по центру стоял железный крюк, на котором плоть заключенных разрывалась на куски. В углу ты заметил какое-то шевеление...',
        options: [
            {
                text: 'Подойти поближе',
                nextText: 11
            },
            {
                text: 'Выйти из подземелья',
                nextText: 12
            }
        ]
    },
    {
        id: 7,
        img: '7.jpg',
        text:  'Левый свиток хранит в себе информацию о скрытой ловушке, которая охраняет секретную комнату замка. Стоит ли пойти на эту авантюру или просто рассматривать замок дальше?',
        options: [
            {
                text: 'Пойти на авантюру',
                nextText: 13
            },
            {
                text: 'Рассматривать замок',
                nextText: 5
            }
        ]
    },
    {
        id: 8,
        img: '8.jpg',
        text:  '"Ты в ловушке. У тебя 10 минут.". Ты оказываешься в клетке, которую охраняет монстр. Ты замечаешь на полу лист бумаги со сложными головоломками. Можно потратить время и попыться решить головоломки или применить ловкость и попробовать прорваться к выходу.', 
        options: [
            {
                text: 'Решать головоломки',
                nextText: 14
            },
            {
                text: 'Не решать головоломки',
                nextText: 15
            }
        ]
    },
    {
        id: 9,
        img: '9.jpg',
        text:  'Вооружившись мечом, ты решил выйти на улицу, чтобы осмотреться. Вдруг ты видишь подземелье.', 
        options: [
            {
                text: 'Войти',
                nextText: 6
            },
            {
                text: 'Идти дальше',
                nextText: 12
            }
        ]
    },
    {
        id: 10,
        img: '10.jpg',
        text:  'Вооружившись кинжалом, ты отправился дальше. Ты входишь в комнату с огромным зеркалом. Заглянешь в него или отвернешься?',
        options: [
            {
                text: 'Заглянуть',
                nextText: 16
            },
            {
                text: 'Отвернуться',
                nextText: 17
            }
        ] 
    },
    {
        id: 11,
        img: '11.jpg',
        text:  'Подойдя поближе, ты увидел человека, прикованного цепями к стене. Он был изнеможденный, в крови, но, на удивление, живой. Помочь ему или выйти?', 
        options: [
            {
                text: 'Помочь',
                nextText: 18
            },
            {
                text: 'Выйти',
                nextText: 12
            }
        ]
    },
    {
        id: 12,
        img: '12.jpg',
        text:  'На улице ты увидел огромных существ, парящих высоко в небе. Одно из них приземлось рядом с тобой. Вроде, оно не представляет опасности, но выглядят жутко... Может, сесть верхом и прокатиться или лучше убежать?', 
        options: [
            {
                text: 'Сесть верхом',
                nextText: 19
            },
            {
                text: 'Убежать',
                nextText: 20
            },
        ]
    },
    {
        id: 13,
        img: '13.jpg',
        text:  'В свитке было достаточно много информации и, потратив несколько минут, ты понял куда идти. Ты справлялся с испытаниями на своем пути и в одной из комнат увидел... Магический грааль!', 
        options: [
            {
                text: 'Взять в руки',
                nextText: 21
            },
            {
                text: 'Не трогать',
                nextText: 22
            },
        ]
    },
    {
        id: 14,
        img: '14.jpg',
        text:  'Успешно решая головоломки, ты понял, что это ключ к освобождению из клетки. Тебе открылся потайной ход и ты сразу же выбежал. Стоит ли после такого продолжать путешествие по таинственному замку?', 
        options: [
            {
                text: 'Продолжить',
                nextText: 23
            },
            {
                text: 'Пойти на выход',
                nextText: 24
            },
        ]
    },
    {
        id: 15, 
        img: '15.jpg',
        text: 'Времени на решение головоломок мало. Нужно выбираться как можно скорее. Ты выбираешь удобный момент и бежишь со всех ног в сторону выхода, проскальзывая по полу мимо монстра. Монстр погнался за тобой. Что делать?',
        options: [
            {
                text: 'Спрятаться за ближайшей стеной',
                nextText: 25
            },
            {
                text: 'Бежать до выхода',
                nextText: 26
            }
        ]
    }, 
    {
        id: 16, 
        img: '16.jpg',
        text: 'Ты увидел свое отражение в зеркале, но вдруг происходит что-то странное и мистическое... с каждой секундой оно начинает искажаться и превращаться в мрачную и пугающую фигуру. Отражение в зеркале становится жутким и пытается выбраться из зеркала.',
        options: [
            {
                text: 'Продолжить смотреть',
                nextText: 27
            },
            {
                text: 'Отвернуться',
                nextText: 28
            }
        ]
    }, 
    {
        id: 17, 
        img: '17.jpg',
        text: "Ты избежал влияние зеркала, и темная фигура пропала. Далее по коридору ты видишь странный портрет... Глаза словно живые... Что ты предпримешь дальше?",
        options: [
            {
                text: 'Пройти мимо',
                nextText: 29
            },
            {
                text: 'Исследовать портрет',
                nextText: 30
            }
        ]
    },
    {
        id: 18, 
        img: '18.jpg',
        text: "Это оказался пленный, на которого наложили проклятие много лет назад. Ты освободил его от оков. У вас общая цель: покинуть это место. Объединишься ли ты с ним или продолжишь в одиночку?",
        options: [
            {
                text: 'Объединиться',
                nextText: 31
            },
            {
                text: 'Продолжить в одиночку',
                nextText: 32
            }
        ]
    },
    {
        id: 19, 
        img: '19.jpg',
        text: "Ты осмелился сесть верхом на это существо, и вы устремились ввысь. С высоты ты разглядел мрачную местность. Летающее существо приземлилось в безопасное место и дало возможность уходить из этого место как можно скорее. Такое жуткое путешествие точно останется у тебя в памяти навсегда.",
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ]
    },
    {
        id: 20, 
        img: '20.jpg',
        text: "Ты испугался такого существа и рванул со всех ног. Животное восприняло такую реакцию неодобрительно и кинулось за тобой. Своими огромными когтями оно растерзало твою плоть. У твоего путешествия трагичный финал. Где-то ты точно совершил ошибку...",
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ]
    },
    {
        id: 21,
        img: '21.jpg',
        text:  'Грааль дал тебе магические способности, благодаря которым ты без особых усилий смог разгадать последующие загадки и выбраться из замка живым, навсегда запомнив это приключение.',
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ] 
    },
    {
        id: 22,
        img: '22.jpg',
        text:  'Решив не трогать магический грааль, ты пошел дальше, но на своем пути тебе встречались трудности, справиться с которыми без дополнительной силы не представлялось возможным. Ты пошел назад, но обратного пути уже не было...', 
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ] 
    },
    {
        id: 23,
        img: '23.jpg',
        text:  'Поднявшись на верхний этаж, ты видишь призрачную фигуру, плывущую по коридору. Будешь следовать за ней или попробуешь избежать встречи?', 
        options: [
            {
                text: 'Следовать',
                nextText: 33
            },
            {
                text: 'Избежать',
                nextText: 35
            }
        ] 
    },
    {
        id: 24,
        img: '24.jpg',
        text:  'Ты решил, что таких приключений тебе больше не надо и направился домой. Главное, что живой.', 
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ] 
    },
    {
        id: 25,
        img: '25.jpg',
        text:  'Монстр не заметил твоего маневра и пробежал мимо тебя. Тебе повезло. Ты продолжил исследование замка, и все закончилось благополучно.',
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ]  
    },
    {
        id: 26,
        img: '26.jpg',
        text:  'Ты видишь выход, но... Двери закрыты, а обратного пути нет. Ты попадаешь в жестокие руки монстра, который затаскивает тебя в подземелье. Теперь ты обречен на несколько лет мук.', 
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ] 
    },
    {
        id: 27,
        img: '27.jpg',
        text:  'Эта жуткая фигура хватает тебя и затаскивает в зеркало. Ты оказываешься пленником мистического мира, который существует внутри зеркала. Путешествие в этот мир может оказаться наполненным ужасами и опасностями.', 
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ] 
    },
    {
        id: 28,
        img: '28.jpg',
        text:  'Жуткая фигура из зеркала чуть не схватила тебя, но ты вовремя отвел взгляд. Ты продолжил свое исследование таинственного замка и разгада множество тайн этого места.', 
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ] 
    },
    {
        id: 29,
        img: '29.jpg',
        text:  'Ты проходишь мимо, однако охота за тобой уже началась. Хозяйка этого замка следила за тобой до самого конца, и когда ты приблизился к выходу... убила тебя.', 
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ] 
    },
    {
        id: 30,
        img: '30.jpg',
        text:  'Исследовав портрет, ты обнаружил подсказки и скрытые механизмы, которые помогли спокойной выйти из замка.', 
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ]
    },
    {
        id: 31,
        img: '31.jpg',
        text:  'Вместе вы смогли взломать все преграды, раскрыть тайны и выбраться из ловушки замка, став настоящими героями.', 
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ]
    },
    {
        id: 32,
        img: '32.jpg',
        text:  'Ты борешься со злом и страхом, однако не можешь преодолеть все испытания. Замок поглощает тебя своими темными силами, заключая тебя навечно внутри своих стен.', 
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ] 
    },
    {
        id: 33,
        img: '33.jpg',
        text:  'Странная фигура загипнотизировала тебя, ты стал жертвой зловещих сил, которые обитают внутри замка, и теперь проклят, чтобы остаться там навечно, став еще одним из его зловещих обитателей.', 
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ] 
    },
    {
        id: 35,
        img: '35.jpg',
        text:  'Избежав встречи, ты обошел стороной неприятные последствия. Ты закончил исследование замка без каких-либо происшествий и вернулся домой.', 
        options: [
            {
                text: 'Начать сначала',
                nextText: 34
            }
        ] 
    }
]