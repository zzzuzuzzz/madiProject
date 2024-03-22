let teacherList = new Map ([
    ['2162', 'Аббасов              Э.М.'],
    ['2', 'Абдулханова М.Ю.'],
    ['1658', 'Абрамов А.Н.'],
    ['600', 'Авраамов А.И.'],
    ['5', 'Агеев А.В.'],
    ['602', 'Агеев В.Д.'],
    ['999', 'Адамов А.П.'],
    ['346', 'Акопов Ф.В.'],
    ['2204', 'Аксельрод            Д.В.'],
    ['347', 'Александров В.Д.'],
    ['348', 'Александров С.Б.'],
    ['607', 'Алексахин С.В.'],
    ['2277', 'Алероев М.Т.'],
    ['1693', 'Алёшкина             Д.В.'],
    ['8', 'Анастасов М.С.'],
    ['2255', 'Андреева М.В.'],
    ['2213', 'Андрюхов             Н.М.'],
    ['1656', 'Анисимов А.В.'],
    ['10', 'Аноприева Г.С.'],
    ['2085', 'Аноприенко А.К.'],
    ['2302', 'Аристова Д.В.'],
    ['1716', 'Арифуллин            И.В.'],
    ['13', 'Артанова Л.И.'],
    ['354', 'Артемова Л.Ю.'],
    ['355', 'Артемьева Т.В.'],
    ['2375', 'Артыков Э.С.'],
    ['14', 'Арутюнова Г.И.'],
    ['2082', 'Асоян                А.Р.'],
    ['1091', 'Атаев К.И.'],
    ['1982', 'Атаманенко           Н.В.'],
    ['360', 'Атрохов Н.А.'],
    ['1959', 'Афанасьев            В.В.'],
    ['1958', 'Бабурова             О.В.'],
    ['2126', 'Бадьина              А.В.'],
    ['1776', 'Байтулаев            А.М.'],
    ['17', 'Бакатин Ю.П.'],
    ['1984', 'Балабина             Т.А.'],
    ['2136', 'Барабанова           Е.С.'],
    ['2106', 'Баранович А.Е.'],
    ['910', 'Баринов К.А.'],
    ['2327', 'Бартенева Г.Н.'],
    ['1545', 'Баурова Н.И.'],
    ['1867', 'Башмаков             И.А.'],
    ['20', 'Безновская В.В.'],
    ['1543', 'Безродный Б.Ф.'],
    ['367', 'Безрук В.Б.'],
    ['619', 'Белашова И.С.'],
    ['620', 'Белкова Ю.А.'],
    ['1918', 'Белобжецкий В.Н.'],
    ['2371', 'Беляков М.А.'],
    ['1873', 'Беспалько            В.Г.'],
    ['1581', 'Беспальчая Е.Н.'],
    ['26', 'Бессонова Л.П.'],
    ['371', 'Бирюкова Е.Р.'],
    ['1775', 'Богумил В.Н.'],
    ['2058', 'Боев                 А.О.'],
    ['630', 'Бокарев Д.Р.'],
    ['1114', 'Борисов Ю.В.'],
    ['375', 'Борисов В.М.'],
    ['376', 'Борисов С.В.'],
    ['31', 'Борисюк Н.В.'],
    ['33', 'Бочкарев В.И.'],
    ['378', 'Бочков С.П.'],
    ['631', 'Брагинский А.И.'],
    ['1976', 'Брагинский           С.А.'],
    ['1115', 'Брежнев А.А.'],
    ['1116', 'Брыль В.Н.'],
    ['1924', 'Бубенцов             В.Ю.'],
    ['2310', 'Будник О.А.'],
    ['2089', 'Булаев               В.А.'],
    ['1799', 'Булаев               И.В.'],
    ['34', 'Буренин В.В.'],
    ['2286', 'Буслаев Д.А.'],
    ['2071', 'Бутылкина            Е.Н.'],
    ['2365', 'Быков Д.А.'],
    ['382', 'Быкова Г.П.'],
    ['37', 'Валиев Ш.Н.'],
    ['2109', 'Валяев               О.А.'],
    ['38', 'Васильев А.И.'],
    ['44', 'Васильева Ю.И.'],
    ['1876', 'Васильенков          Р.В.'],
    ['386', 'Величкин В.Н.'],
    ['1804', 'Венде Ф.Д.'],
    ['78', 'Вербец Ю.В.'],
    ['641', 'Верещагин С.Б.'],
    ['2200', 'Вещева               Ю.Г.'],
    ['642', 'Вздыхалкин В.Н.'],
    ['643', 'Виноградов В.А.'],
    ['914', 'Воейко О.А.'],
    ['2000', 'Вознесенский         И.С.'],
    ['1585', 'Волобуев А.В.'],
    ['1522', 'Волобуева Л.Н.'],
    ['2361', 'Володина В.А.'],
    ['393', 'Володина О.А.'],
    ['2178', 'Волосова             А.В.'],
    ['394', 'Воробьев И.В.'],
    ['51', 'Воробьев Е.В.'],
    ['1843', 'Воробьев             А.И.'],
    ['2116', 'Воронцова            М.О.'],
    ['1882', 'Воронцова            Е.А.'],
    ['1586', 'Воронцова            С.В.'],
    ['915', 'Вражнова М.Н.'],
    ['2373', 'Вышкварко А.А.'],
    ['2140', 'Вьюнов               В.Н.'],
    ['1917', 'Гаврилюк             М.В.'],
    ['648', 'Гаевский В.В.'],
    ['1943', 'Галышев              А.Б.'],
    ['1791', 'Гапшин               Н.В.'],
    ['2332', 'Гарибян А.Г.'],
    ['2027', 'Гематудинов          Р.А.'],
    ['1814', 'Гендугова            М.Б.'],
    ['2335', 'Герасимов Д.С.'],
    ['402', 'Гильдерман С.А.'],
    ['1144', 'Глаголева С.В.'],
    ['2363', 'Гладунова Ю.А.'],
    ['57', 'Гогиберидзе О.Е.'],
    ['1655', 'Гоголин С.С.'],
    ['1486', 'Гоголина Е.С.'],
    ['658', 'Головин С.Ф.'],
    ['660', 'Голубкова В.Б.'],
    ['1147', 'Голубчик Т.В.'],
    ['1980', 'Голубчик             А.М.'],
    ['60', 'Гольдин А.П.'],
    ['2084', 'Горелов              А.Ю.'],
    ['1155', 'Горшков А.В.'],
    ['61', 'Горячев М.Г.'],
    ['1584', 'Григорьев М.В.'],
    ['968', 'Григорьева Т.Ю.'],
    ['662', 'Григорян Л.К.'],
    ['2095', 'Грицук               И.И.'],
    ['1994', 'Гришакин             В.Т.'],
    ['2308', 'Гришин А.В.'],
    ['2081', 'Грищенко             А.Г.'],
    ['2147', 'Груздев              А.С.'],
    ['2317', 'Гулин В.Н.'],
    ['2088', 'Гулый                В.В.'],
    ['64', 'Гурьев В.А.'],
    ['666', 'Гурьянов В.М.'],
    ['668', 'Гусева Е.А.'],
    ['669', 'Гусейналиев В.А.'],
    ['671', 'Даугелло В.А.'],
    ['417', 'Деза Н.В.'],
    ['1849', 'Демидов              Л.В.'],
    ['418', 'Демидова Н.С.'],
    ['1920', 'Демин                П.Е.'],
    ['1972', 'Демченкова           С.А.'],
    ['419', 'Демьянушко И.В.'],
    ['1796', 'Дмитриев             С.М.'],
    ['2313', 'Долгов И.А.'],
    ['946', 'Домнина С.В.'],
    ['2338', 'Донец Н.А.'],
    ['1835', 'Доткулова            А.С.'],
    ['1964', 'Доценко А.И.'],
    ['77', 'Дрейцен М.А.'],
    ['1936', 'Дронсейко            В.В.'],
    ['79', 'Ду А..'],
    ['682', 'Дунин А.Ю.'],
    ['1941', 'Душкин               П.В.'],
    ['2072', 'Дьяков               Г.Г.'],
    ['2326', 'Еварестов В.М.'],
    ['957', 'Евгеньев Г.И.'],
    ['684', 'Евстратова И.А.'],
    ['425', 'Егоров В.А.'],
    ['2303', 'Егоров О.В.'],
    ['1187', 'Егорова Т.Н.'],
    ['1643', 'Елисеева Е.А.'],
    ['83', 'Емельянов С.Н.'],
    ['1624', 'Енин Д.В.'],
    ['689', 'Еремина Т.И.'],
    ['426', 'Ермаков Б.Е.'],
    ['1794', 'Ерополова Е.С.'],
    ['2048', 'Ерусланкин           С.А.'],
    ['2364', 'Ерусланкина П.В.'],
    ['2288', 'Ершов В.С.'],
    ['1580', 'Еськова И.А.'],
    ['2240', 'Ефремова К.Д.'],
    ['1860', 'Жажа                 Е.Ю.'],
    ['1519', 'Жаров Д.М.'],
    ['430', 'Жидкова М.А.'],
    ['2102', 'Жилейкина            А.В.'],
    ['1596', 'Жуков А.И.'],
    ['2092', 'Жуков                Д.А.'],
    ['86', 'Жустарева Е.В.'],
    ['1946', 'Заикин               Р.Н.'],
    ['88', 'Зайцев Д.В.'],
    ['698', 'Зайцев С.В.'],
    ['89', 'Залуга В.П.'],
    ['2263', 'Замыцких А.В.'],
    ['1810', 'Зарипова             И.И.'],
    ['1563', 'Захарян М.А.'],
    ['91', 'Зеге С.О.'],
    ['701', 'Зеленов А.Е.'],
    ['2268', 'Зенкова Т.А.'],
    ['435', 'Зенченко В.А.'],
    ['436', 'Зиманов Л.Л.'],
    ['437', 'Зленко А.А.'],
    ['2248', 'Злобин Н.О.'],
    ['94', 'Зорин В.А.'],
    ['95', 'Зубков В.П.'],
    ['1042', 'Зубова С.В.'],
    ['2260', 'Зудина Ю.Н.'],
    ['439', 'Иванов-Дятлов В.И.'],
    ['98', 'Иванова Н.А.'],
    ['2307', 'Ивановская И.С.'],
    ['1671', 'Ивахненко А.А.'],
    ['440', 'Ивахненко А.М.'],
    ['99', 'Измайлова Д.К.'],
    ['441', 'Изотова С.А.'],
    ['101', 'Илюхин А.В.'],
    ['1942', 'Ионкин               А.С.'],
    ['1951', 'Исаева               И.Ю.'],
    ['708', 'Исмоилов М.И.'],
    ['103', 'Исхакова О.А.'],
    ['444', 'Казицкая Н.В.'],
    ['105', 'Калёнова Е.В.'],
    ['2400', 'Каменецкая В.А.'],
    ['2029', 'Карагодин В.И.'],
    ['1229', 'Карев С.В.'],
    ['1806', 'Карпов               И.А.'],
    ['714', 'Карпов П.В.'],
    ['2297', 'Карпова А.И.'],
    ['1047', 'Карцов С.К.'],
    ['1836', 'Катаржин             А.В.'],
    ['716', 'Квасновская Н.П.'],
    ['1588', 'Кикава Н.П.'],
    ['451', 'Киреева С.В.'],
    ['107', 'Кирова И.В.'],
    ['2329', 'Климова С.Н.'],
    ['110', 'Коваленко Н.В.'],
    ['1754', 'Коган                Д.Б.'],
    ['1630', 'Козлов А.В.'],
    ['111', 'Колацкий А.В.'],
    ['1955', 'Колчин               А.В.'],
    ['113', 'Колыбанов О.М.'],
    ['2057', 'Комарова             Т.К.'],
    ['1059', 'Комков В.И.'],
    ['2132', 'Комкова              Д.А.'],
    ['1243', 'Комлев А.Б.'],
    ['724', 'Кондратьев В.Д.'],
    ['1618', 'Конин И.В.'],
    ['1783', 'Коноплин             А.Ю.'],
    ['726', 'Коншин В.М.'],
    ['460', 'Коньков В.А.'],
    ['2368', 'Королева Л.В.'],
    ['1039', 'Королькова Т.В.'],
    ['2124', 'Коротеев             Д.Д.'],
    ['1742', 'Короткова Ю.А.'],
    ['1963', 'Косенко              Е.А.'],
    ['464', 'Костюк И.В.'],
    ['1789', 'Косцов               А.В.'],
    ['921', 'Котович С.В.'],
    ['120', 'Кочетова Г.Г.'],
    ['730', 'Кравцева В.А.'],
    ['1682', 'Кравченко            В.В.'],
    ['2055', 'Красавин             П.А.'],
    ['1600', 'Краснобаев Ю.Л.'],
    ['2344', 'Крахмалев А.В.'],
    ['124', 'Крахотин А.И.'],
    ['2372', 'Кремез А.С.'],
    ['733', 'Кристальный С.Р.'],
    ['1744', 'Крутова Т.А.'],
    ['2388', 'Крутова М.И.'],
    ['466', 'Крыгина И.Е.'],
    ['735', 'Крылов Г.А.'],
    ['1880', 'Крымский             А.В.'],
    ['2206', 'Кудашкин             С.К.'],
    ['2163', 'Кудрявцев            А.Н.'],
    ['1058', 'Кудрявцев А.А.'],
    ['470', 'Кудряшов Б.А.'],
    ['2026', 'Кудряшов             М.А.'],
    ['133', 'Кузнецов Ю.В.'],
    ['472', 'Кузнецов С.А.'],
    ['1666', 'Кузнецова            Е.Н.'],
    ['1833', 'Кузьмичева           Е.О.'],
    ['1704', 'Кулешова             Н.Ю.'],
    ['1496', 'Кунцман М.В.'],
    ['2325', 'Курипка А.В.'],
    ['139', 'Курлянд В.В.'],
    ['741', 'Курьянова О.Е.'],
    ['1993', 'Кутейников           И.А.'],
    ['1599', 'Куфтинова Н.Г.'],
    ['1854', 'Лазарев Д.Б.'],
    ['2369', 'Лапенко М.В.'],
    ['147', 'Ларина Т.А.'],
    ['1895', 'Лаушкин              А.В.'],
    ['1890', 'Лахманюк             В.Б.'],
    ['148', 'Лахтина Н.Ю.'],
    ['2333', 'Лебедев А.Н.'],
    ['1985', 'Левочкина            Т.В.'],
    ['744', 'Леева М.А.'],
    ['924', 'Лезина О.В.'],
    ['2112', 'Лёза Р.В.'],
    ['1020', 'Литвина М.И.'],
    ['156', 'Лобиков А.В.'],
    ['975', 'Лобов О.П.'],
    ['157', 'Логачёв В.Н.'],
    ['1973', 'Логинов              Е.М.'],
    ['2316', 'Локить А.Г.'],
    ['158', 'Лосавио С.К.'],
    ['2356', 'Лубашевский И.А.'],
    ['159', 'Лугов С.В.'],
    ['1995', 'Луценко              Е.А.'],
    ['1023', 'Лыгина Л.А.'],
    ['2357', 'Лянгузов Д.В.'],
    ['165', 'Маглова М.Б.'],
    ['1850', 'Мазлумян             Г.С.'],
    ['166', 'Макаренко Е.И.'],
    ['1525', 'Макаренко Л.Ф.'],
    ['167', 'Макаренков М.В.'],
    ['1751', 'Макарова             Е.А.'],
    ['2305', 'Макеев И.М.'],
    ['2113', 'Маковеева            А.С.'],
    ['488', 'Максимов В.А.'],
    ['757', 'Максимычев О.И.'],
    ['1752', 'Мактас Б.Я.'],
    ['758', 'Макурина И.О.'],
    ['2253', 'Макурина В.М.'],
    ['2044', 'Малахов              А.Ю.'],
    ['759', 'Малахов Д.Ю.'],
    ['1554', 'Малиновский М.П.'],
    ['2185', 'Малышев              М.И.'],
    ['1503', 'Малышева Л.А.'],
    ['1542', 'Мальцева Л.С.'],
    ['1701', 'Мальцева             И.В.'],
    ['1289', 'Мандровский К.П.'],
    ['172', 'Манушакян К.Г.'],
    ['2156', 'Марк                 А.В.'],
    ['173', 'Маркичев В.А.'],
    ['174', 'Марков С.В.'],
    ['175', 'Марсов В.И.'],
    ['1765', 'Марсова              Е.В.'],
    ['1021', 'Мартяхин Д.С.'],
    ['955', 'Матанцева О.Ю.'],
    ['1583', 'Матвеева А.М.'],
    ['764', 'Матюхин Л.М.'],
    ['1650', 'Матюхина Е.Н.'],
    ['2037', 'Махмудов             Р.А.'],
    ['491', 'Машкин А.Л.'],
    ['1606', 'Мезенцев К.Н.'],
    ['177', 'Мельников С.Е.'],
    ['493', 'Мельникова Т.Е.'],
    ['2314', 'Менькина У.О.'],
    ['2283', 'Миличенкова Ю.В.'],
    ['2376', 'Миронов Р.В.'],
    ['1541', 'Миронова Т.А.'],
    ['1524', 'Миронова В.В.'],
    ['2133', 'Михеев               П.С.'],
    ['771', 'Модникова О.Г.'],
    ['1018', 'Мордвин С.С.'],
    ['2203', 'Морева               Е.С.'],
    ['1045', 'Мороз С.М.'],
    ['187', 'Морозов Р.В.'],
    ['2270', 'Морозов Д.Ю.'],
    ['979', 'Москалев А.Г.'],
    ['498', 'Муравкина Г.Ш.'],
    ['1741', 'Муравьёв М.А.'],
    ['2134', 'Мухаметова           А.А.'],
    ['954', 'Мышкис П.А.'],
    ['2067', 'Надеждин             В.С.'],
    ['1953', 'Назаров А.А.'],
    ['191', 'Назарова С.В.'],
    ['2292', 'Нгуен Т..'],
    ['504', 'Неверов А.Н.'],
    ['2097', 'Неделькин В.И.'],
    ['197', 'Неретин А.А.'],
    ['1832', 'Неретин              А.А.'],
    ['2017', 'Нефёлов              И.С.'],
    ['507', 'Нигметзянов Р.И.'],
    ['1561', 'Николаева Г.Н.'],
    ['1841', 'Никонов              В.В.'],
    ['2295', 'Никоренко Ю.Л.'],
    ['1048', 'Новак Ю.В.'],
    ['1749', 'Новгородцев В.М.'],
    ['201', 'Новоселова Е.В.'],
    ['1530', 'Оверчук М.Л.'],
    ['2181', 'Овечкин В.А.'],
    ['2301', 'Овчинкин Д.Р.'],
    ['204', 'Огурцова Л.П.'],
    ['205', 'Одинокова И.В.'],
    ['2322', 'Орешкина А.И.'],
    ['2098', 'Оспанбеков           Б.К.'],
    ['791', 'Остроух А.В.'],
    ['1343', 'Павлов С.А.'],
    ['210', 'Павлов А.П.'],
    ['1578', 'Павлова А.С.'],
    ['2251', 'Паламарчук В.Р.'],
    ['513', 'Панов Ю.В.'],
    ['514', 'Пасынский А.А.'],
    ['217', 'Паудяль С.П.'],
    ['2108', 'Пахомова             А.А.'],
    ['1696', 'Пахунов              А.В.'],
    ['2293', 'Пашкова А.А.'],
    ['220', 'Пегачков А.А.'],
    ['798', 'Петрова Л.Г.'],
    ['930', 'Петрова Е.Н.'],
    ['222', 'Петрович П.П.'],
    ['224', 'Пешкова О.А.'],
    ['1621', 'Плетнева Л.А.'],
    ['2069', 'Плетнёв М.Г.'],
    ['2122', 'Погонина             А.М.'],
    ['800', 'Подберезкин А.А.'],
    ['2334', 'Подопросветова А.Б.'],
    ['2101', 'Подрыга              В.О.'],
    ['1608', 'Подхалюзина В.А.'],
    ['2243', 'Поживилов Н.В.'],
    ['2318', 'Поздняков М.Н.'],
    ['2032', 'Покровская           В.В.'],
    ['1355', 'Попов Н.В.'],
    ['230', 'Попов В.И.'],
    ['807', 'Порватов И.Н.'],
    ['1871', 'Портнов              Ю.А.'],
    ['1005', 'Пресняков Л.А.'],
    ['2043', 'Привалов А.А.'],
    ['2345', 'Пронин Ц.Б.'],
    ['530', 'Пронников А.Н.'],
    ['531', 'Просов С.Н.'],
    ['1726', 'Пруидзе              Е.А.'],
    ['931', 'Прусова В.И.'],
    ['236', 'Пуркин В.И.'],
    ['814', 'Пуркин А.В.'],
    ['816', 'Райгородская В.С.'],
    ['2269', 'Ракитянский В.А.'],
    ['2257', 'Рашевский Я.И.'],
    ['933', 'Рогова О.Б.'],
    ['534', 'Розенблат Г.М.'],
    ['1044', 'Рощак С.В.'],
    ['535', 'Рощин А.И.'],
    ['243', 'Рудакова В.В.'],
    ['245', 'Рулев С.В.'],
    ['1872', 'Рыжкова              Н.Н.'],
    ['1056', 'Саакян И.Э.'],
    ['1517', 'Сабуренков С.Е.'],
    ['2117', 'Савастенко           Э.А.'],
    ['2054', 'Савастенко           А.А.'],
    ['2258', 'Савёлов В.П.'],
    ['1626', 'Савченко-Бельский К.А.'],
    ['2229', 'Сальный              А.Г.'],
    ['2192', 'Самигуллин           Л.Ф.'],
    ['1623', 'Самодин А.А.'],
    ['828', 'Самохвалов А.Б.'],
    ['254', 'Самохвалова Ж.П.'],
    ['1067', 'Самуйлов Г.Н.'],
    ['831', 'Сатышев С.Н.'],
    ['832', 'Сафронов П.В.'],
    ['541', 'Свентковский В.А.'],
    ['1897', 'Селезнёв В.С.'],
    ['542', 'Семаков С.Л.'],
    ['543', 'Сергеев И.Д.'],
    ['256', 'Сердобов В.Б.'],
    ['1645', 'Сидоров К.М.'],
    ['260', 'Силкин В.В.'],
    ['839', 'Синявский В.В.'],
    ['1990', 'Смоленкин            В.С.'],
    ['2282', 'Смолко Е.С.'],
    ['1773', 'Смык                 А.Ф.'],
    ['547', 'Снеткова О.Л.'],
    ['269', 'Сова А.Н.'],
    ['1000', 'Соколов Л.А.'],
    ['270', 'Соколов В.Г.'],
    ['2238', 'Соколова Н.С.'],
    ['271', 'Соколова К.Ю.'],
    ['1008', 'Солиев Ю..'],
    ['548', 'Солнцев А.А.'],
    ['273', 'Соловьев И.В.'],
    ['549', 'Соловьева Т.Ф.'],
    ['275', 'Сологян А.А.'],
    ['1537', 'Сонина               Л.А.'],
    ['1896', 'Сотсков              А.В.'],
    ['847', 'Спинов А.Р.'],
    ['1870', 'Спиридонова          Л.В.'],
    ['551', 'Стаин В.М.'],
    ['1734', 'Старостина           Ж.А.'],
    ['851', 'Строганов Д.В.'],
    ['285', 'Суворов Д.Н.'],
    ['286', 'Суворов Ю.Б.'],
    ['2306', 'Судариков И.О.'],
    ['938', 'Сула Н.А.'],
    ['288', 'Султыгова А.А.'],
    ['1975', 'Сундуков             С.К.'],
    ['1415', 'Суркова Н.Е.'],
    ['2366', 'Сурова Е.А.'],
    ['2355', 'Сусоев Н.П.'],
    ['2304', 'Суханов А.С.'],
    ['2121', 'Суходоля             А.В.'],
    ['291', 'Сухорукова Н.Ф.'],
    ['1851', 'Суэтина Т.А.'],
    ['1878', 'Тавшавадзе           Б.Т.'],
    ['292', 'Тагиева Н.К.'],
    ['2190', 'Талыкова             К.Б.'],
    ['939', 'Татаринов В.В.'],
    ['559', 'Таташев А.Г.'],
    ['560', 'Ташбаев Ы.Э.'],
    ['293', 'Телушкина Е.К.'],
    ['1423', 'Тер-Мкртичьян Г.Г.'],
    ['1667', 'Терновая Л.О.'],
    ['2298', 'Тимина Т.А.'],
    ['856', 'Тимофеев М.Ю.'],
    ['857', 'Тимофеева Г.Ю.'],
    ['1970', 'Титов                О.В.'],
    ['2087', 'Титова               С.С.'],
    ['1992', 'Тишкин В.Ф.'],
    ['860', 'Ткачева Т.М.'],
    ['2137', 'Ткачёва В.А.'],
    ['2242', 'Топорков М.А.'],
    ['2141', 'Тохтаева             А.Б.'],
    ['2025', 'Трапезникова         М.А.'],
    ['564', 'Трифонова О.И.'],
    ['2250', 'Тришкина А.Л.'],
    ['299', 'Трофименко Ю.В.'],
    ['2083', 'Трубицын В.А.'],
    ['1945', 'Трушкова             С.В.'],
    ['301', 'Улитич О.Ю.'],
    ['302', 'Улицкая И.М.'],
    ['941', 'Улицкая Н.М.'],
    ['2291', 'Урханова Л.А.'],
    ['942', 'Ушаков В.В.'],
    ['2123', 'Ушков                А.В.'],
    ['950', 'Фаддеева Е.Ю.'],
    ['1911', 'Фадеев               П.С.'],
    ['566', 'Фатюхин Д.С.'],
    ['1960', 'Федотов              М.В.'],
    ['870', 'Федулов В.К.'],
    ['1922', 'Федюкина Т.В.'],
    ['2337', 'Фейзуллаев А.Р.'],
    ['1795', 'Феофанов             С.А.'],
    ['1977', 'Феофанова            Л.С.'],
    ['311', 'Фещенко А.И.'],
    ['1837', 'Филатов              С.А.'],
    ['1957', 'Филатов              В.В.'],
    ['1498', 'Филиппова Н.А.'],
    ['874', 'Фомин А.В.'],
    ['570', 'Фомичева Н.С.'],
    ['2231', 'Фомочкина            У.Ю.'],
    ['312', 'Фонарев П.А.'],
    ['2103', 'Форш                 Е.А.'],
    ['1558', 'Фотиади А.А.'],
    ['2285', 'Фролов А.О.'],
    ['2086', 'Фурсов               С.Б.'],
    ['572', 'Хазиев А.А.'],
    ['1798', 'Хвичия               Д.Т.'],
    ['878', 'Хованская Н.П.'],
    ['573', 'Хованский В.Н.'],
    ['2312', 'Ховяков А.А.'],
    ['318', 'Холин А.С.'],
    ['2259', 'Холопов К.В.'],
    ['1677', 'Хребтова             Т.П.'],
    ['879', 'Худалов В.Т.'],
    ['1595', 'Чеканов А.Ю.'],
    ['884', 'Чернов Э.А.'],
    ['2247', 'Чернышев А.А.'],
    ['2171', 'Чижова               В.С.'],
    ['1016', 'Чириканова Е.А.'],
    ['889', 'Чудина О.В.'],
    ['1727', 'Шабарчина            И.В.'],
    ['1956', 'Шаврин               А.В.'],
    ['1891', 'Шалагина             Е.А.'],
    ['1639', 'Шаламов А.Н.'],
    ['2358', 'Шапранова Э.К.'],
    ['1633', 'Шастина А.Е.'],
    ['2056', 'Шатилов              И.С.'],
    ['892', 'Шатров М.Г.'],
    ['1468', 'Шашина               Е.В.'],
    ['2341', 'Швейкин В.В.'],
    ['327', 'Шевяков А.П.'],
    ['328', 'Шелмаков С.В.'],
    ['2236', 'Шестов               А.В.'],
    ['330', 'Шестопалов К.К.'],
    ['1472', 'Шестопалова Л.П.'],
    ['2256', 'Шилдкамп Е.А.'],
    ['586', 'Шилимов М.В.'],
    ['2073', 'Шильников Е.В.'],
    ['1805', 'Ширина               Т.А.'],
    ['333', 'Шлиппе И.И.'],
    ['2276', 'Шматков Ю.М.'],
    ['1807', 'Штефан               Ю.В.'],
    ['336', 'Штракс М.Г.'],
    ['894', 'Шувалова И.С.'],
    ['2036', 'Шумилова             А.А.'],
    ['589', 'Щербаков В.Ф.'],
    ['1954', 'Щербаков             А.Ю.'],
    ['338', 'Щит Б.А.'],
    ['1494', 'Элькин Ю.И.'],
    ['339', 'Юкиш В.Ф.'],
    ['901', 'Юрчик П.Ф.'],
    ['340', 'Юстратова И.Л.'],
    ['2219', 'Ющук                 Р.В.'],
    ['1481', 'Яковенко А.Л.'],
    ['1809', 'Якубович             И.А.'],
    ['1866', 'Якубович             А.Н.'],
    ['594', 'Янчевский В.А.'],
    ['2199', 'Яркин                С.В.'],
    ['1892', 'Ярмолинский          В.А.'],
    ['2249', 'Яшин В.Б.'],
    ['1938', 'Яшина                Ю.И.'],
    ['597', 'Яшина М.В.'],
    ])