# Купить Шины, Резину и Диски в Ростове-на-Дону — Интернет-магазин ДонШина

## Редизайн сайта [don-shina.ru](https://don-shina.ru/), PUG/SCSS/JS

[don-shina.ru](https://don-shina.ru/)

[Макет на figma.com](https://www.figma.com/file/QbtLEgr388fxSBljGNPZ6a/DonShina-redesign)

Дизайн - Сергей, tg: **@glumglam**

## Техническая информация:

- используется node v12.16.3 и выше
- dev-режим **npm run dev**
- prod-режим **npm run build**

## Доработки

### Исправления

#### Александр Карпов, 17.12.2021

1. ~~ни в одной форме нет валидатора (поставить [https://github.com/jzaefferer/jquery-validation](https://github.com/jzaefferer/jquery-validation))~~ - **установил этот плагин, инициализацию вынес в validate.js, для образца настроил валидацию в формах авторизации и регистрации (в шапке). Отдельная валидация для каждой формы, на мой взгляд, избыточна: могу предложить универсальный компонент, но выводить он будет стандартные браузерные сообщении об ошибках, пример [https://ru39391.github.io/mesto/](https://ru39391.github.io/mesto/) - надо нажать на "+"**
1. ~~нигде нет масок ввода (поставить [http://mths.be/placeholder](http://mths.be/placeholder))~~ - **установил более новый плагин, полям ввода почты достаточно добавить селектор input-email, полям ввода телефона - input-phone**
1. ~~ничего не происходит при кликах на каталог и услуги в шапки~~ - **меню добавлены**
1. ~~все слайдеры поумолчанию прокручены в правую сторону, кнопки для слайда перепутаны местами~~ - **поправил баг с кнопками, насчёт прокрутки в правую сторону нужно пояснение - сделать прокрутку бесконечной?**
1. ~~в помощи не работает подменю~~ - **подменю добавлено**
1. ~~почему верстка не резиновая, а дергается при изменении размера окна? на должна быть резиновой~~ - **сделал [https://ru39391.github.io/ds.dist/](https://ru39391.github.io/ds.dist/), возможно, потребуется поправить расстояния в блоках форм; думаю, также изменить расстояния между элементами в шапке [https://ru39391.github.io/ds.dist/_header.html](https://ru39391.github.io/ds.dist/_header.html) и высоту иллюстрации статьи [https://ru39391.github.io/ds.dist/sales-item.html](https://ru39391.github.io/ds.dist/sales-item.html)**
1. ~~не нашел вестки каталага в виде таблицы [https://www.screencast.com/t/Z8AVpAlLqsKA](https://www.screencast.com/t/Z8AVpAlLqsKA) (не списка моделей [https://ds.39391.ru/subcategory-tires-list.html](https://ds.39391.ru/subcategory-tires-list.html) а товаров)~~ - **поправлено [https://ru39391.github.io/ds.dist/subcategory-tires-list.html](https://ru39391.github.io/ds.dist/subcategory-tires-list.html), добавлено [https://ru39391.github.io/ds.dist/subcategory.html](https://ru39391.github.io/ds.dist/subcategory.html)**
1. ~~было требование о том, чтобы все размеры шрифтов, отступы, linw-height и т.д были в rem - все в пикселях - переделать~~ - **готово**
1. ~~большая часть стилей должна бють нативными бутстраповскими - почти нигде нет (mx, mt, py, d-flex, text-uppercase и прочее, стили, кроме того, где этого сделать объективно нельзя должны строиться так, это нужно для того, чтобы возможно было собирать блоки из готовых классов самостоятельно, для этого же добавить общие классы (размер_текста_1, размер текста 2, цвет 1 и т.д.))~~ - **готово, примеры здесь [https://ru39391.github.io/ds.dist/articles__row.html](https://ru39391.github.io/ds.dist/articles__row.html) и здесь [https://ru39391.github.io/ds.dist/articles__cols.html](https://ru39391.github.io/ds.dist/articles__cols.html)**
1. ~~в фильтре количество найденного предлагаю сделать всплывающим, как это сделано сейчас - **есть вопрос: [https://dl3.joxi.net/drive/2022/02/18/0050/2358/3311926/26/16b1054c5b.jpg](https://dl3.joxi.net/drive/2022/02/18/0050/2358/3311926/26/16b1054c5b.jpg) - сейчас атрибутом style="" блоку задаётся позиционирование, насколько я понимаю, под эту плашку есть готовый скрипт, определяющий, куда её вывести и какие left и top задать, соотвественно нужно только встроить мою вёрстку, а скрипт оставить, или нет?**~~ - **здесь [https://ru39391.github.io/ds.dist/subcategory.html](https://ru39391.github.io/ds.dist/subcategory.html) атрибутом style="" показал расположение плашки**
1. ~~было требование о том, чтобы все иконки были шрифтом, с классами, определающими стандартные цвета и стандартные размеры - вместо этого везде svg~~ - **готово, см. [стандартные стили](https://ru39391.github.io/ds.dist/ui.html) и [список иконок](https://ru39391.github.io/ds.dist/ui_icons.html)**
1. ~~[https://ds.39391.ru/](https://ds.39391.ru/) часто выбирают - не переключаются табы (их нет?)~~ - **готово**
1. ~~[https://ds.39391.ru/articles.html](https://ds.39391.ru/articles.html) откуда тут сортировка товаров? зачем два раза блок статей? зачем внизу блок с параметрами товаров, тут нет товаров~~ - **ориентировался на макет ` item_all` [https://dl3.joxi.net/drive/2022/02/18/0050/2358/3311926/26/2434a38e6f.jpg](https://dl3.joxi.net/drive/2022/02/18/0050/2358/3311926/26/2434a38e6f.jpg): вероятно, предполагается сортировка статей - не стал менять текст в выпадающем списке, скопировал тот, что был на стр. товаров. Чтобы не создавать много файлов, показал вид плиткой и вид списком на одной стр., разделил на две стр.: [вид списком](https://ru39391.github.io/ds.dist/articles__row.html) и [вид плиткой](https://ru39391.github.io/ds.dist/articles__cols.html). В макет содержит блок с параметрами [https://dl4.joxi.net/drive/2022/02/18/0050/2358/3311926/26/54083af37b.jpg](https://dl4.joxi.net/drive/2022/02/18/0050/2358/3311926/26/54083af37b.jpg).**
1. ~~[https://ds.39391.ru/articles-item.html](https://ds.39391.ru/articles-item.html) вообще не понял что это~~ - **страница статьи, разделил на две: [стандартная](https://ru39391.github.io/ds.dist/article__item.html) и [с видео](https://ru39391.github.io/ds.dist/article__item_video.html)**
1. ~~[https://ds.39391.ru/comparing.html](https://ds.39391.ru/comparing.html) галочка "показать только различия" ничего не делает, она должна работать (убирать одинаковые строки);~~ - **готово**; ~~предлагаю добавить табы с переключением между шинами дисками и т.д.~~ - **сделал**
1. ~~[https://ds.39391.ru/contacts.html](https://ds.39391.ru/contacts.html) при переключении табов слева карта должна меняться~~ - **поправил**
1. ~~[https://ds.39391.ru/filter-battery.html](https://ds.39391.ru/filter-battery.html) пустая страница, фильтр заезжает на футер [https://www.screencast.com/t/xbxgNynm5Aka](https://www.screencast.com/t/xbxgNynm5Aka); "показать еще" в брендах не работает - **у подбора АКБ нет отдельной стр., только фильтр [https://dl3.joxi.net/drive/2022/02/18/0050/2358/3311926/26/4b06f3e91a.jpg](https://dl3.joxi.net/drive/2022/02/18/0050/2358/3311926/26/4b06f3e91a.jpg), синяя плашка с кнопкой "Показать" позиционирована по умолчанию, т.к. предполагал, что фильтрация осуществляется готовым компонентом Битрикс, где есть скрипт, который выставляет style="" с нужными параметрами [https://dl4.joxi.net/drive/2022/02/18/0050/2358/3311926/26/2fa3051a1f.jpg](https://dl4.joxi.net/drive/2022/02/18/0050/2358/3311926/26/2fa3051a1f.jpg). На сайте так сейчас или нет?**~~ - **[https://ru39391.github.io/ds.dist/subcategory-tires-list.html](https://ru39391.github.io/ds.dist/subcategory-tires-list.html) - "Показать ещё" разворачивает список брендов**
1. ~~[https://ds.39391.ru/filter-motowheels.html](https://ds.39391.ru/filter-motowheels.html), [https://ds.39391.ru/filter-oil.html](https://ds.39391.ru/filter-oil.html) то же самое~~
1. ~~[https://ds.39391.ru/personal-booking.html](https://ds.39391.ru/personal-booking.html) зачем везде в персональном разделе дублируется заголовок? что должно происходить при клике на запись на услугу?~~ - **в макете два заголовка: для страницы и для блока, поменял содержимое для доп. заголовков; форму записи на услугу добавил**
1. ~~[https://ds.39391.ru/personal-bookmarks.html](https://ds.39391.ru/personal-bookmarks.html) избранным в слайдере пользоваться невозможно, товары должны быть плиткой~~ - **исправлено [https://ru39391.github.io/ds.dist/personal-bookmarks.html](https://ru39391.github.io/ds.dist/personal-bookmarks.html)**
1. [https://ds.39391.ru/service.html](https://ds.39391.ru/service.html) в слайдере отзывов нет кнопок для прокрутки
1. ~~Переключатели над карточками товаров блока "Часто выбирают" сверстал как `input[type="radio"]` [http://joxi.ru/eAOxxg4T6EVYbr](http://joxi.ru/eAOxxg4T6EVYbr). В комментариях к макетам указано, что они будут работать подобно этому блоку на ютубе [http://joxi.ru/RmzDDdgUjZeELA](http://joxi.ru/RmzDDdgUjZeELA). Использовать другой тэг не составит проблем - вёрстка тэгонезависимая, можно оперативно переделать~~ - **предлагаю стилизовать обычные бутсраповские табы** - **переделано**
1. ~~Обратил внимание, такие иконки [http://joxi.ru/vAWqqQYsBE0wRm](http://joxi.ru/vAWqqQYsBE0wRm) используются и для маркировки товаров и в фильтрах, для них использовать универсальные селекторы класса, независимые от контекста?~~ - **ничего не понял, из всех иконок нужно собрать шрифт: готово, см. [список иконок](https://ru39391.github.io/ds.dist/ui_icons.html)**
1. ~~Сейчас на текущем сайте для реализации этих кнопок [http://joxi.ru/l2ZGGWVTRZv4aA](http://joxi.ru/l2ZGGWVTRZv4aA) использован тэг a(href=""), сделал также - при необходимости возможно оперативно изменить~~ - **пусть будет ссылкой, это связано с внутренними механизмами**
1. При реализации вёрстки этого фильтра [http://joxi.ru/Vm6EEDbCRqpG8r](http://joxi.ru/Vm6EEDbCRqpG8r) опирался на [http://joxi.ru/EA4GGDpTvqEgK2](http://joxi.ru/EA4GGDpTvqEgK2) [https://don-shina.ru/catalog/avto/tires/acura/](https://don-shina.ru/catalog/avto/tires/acura/) - заметил, что в коде присутствует только `<select class="car-select">...</select>`, остальной код, скорее всего, генерируется кастомным скриптом во фронте. Сохранил структуру добавляемых блоков, но применил к ним собственные селекторы классов. Возможно, потребуется, добавить текущие селекторы, по которым происходит инициализация скрипта - **без разницы, скрипт не зависит от классов, автокомплит бы туда вот добавить**
1. ~~В фильтре текущего сайта [https://don-shina.ru/catalog/avto/tires/acura/](https://don-shina.ru/catalog/avto/tires/acura/) присутствует такой элемент [http://joxi.ru/n2YMM6zH7pzXL2](http://joxi.ru/n2YMM6zH7pzXL2) - его html-код формируется компонентом CMS и неизменяем? Стили писать к получаемым селекторам классов, либо же можно делать полностью свою разметку? - **лучше оставить тот, что есть сейчас на сайте, там стоит Ion.RangeSlider модифицированный, могу скинуть**~~ - **установил Ion.RangeSlider**
1. ~~Сейчас иконки для [https://ds.39391.ru/](https://ds.39391.ru/) выводятся из svg-спрайта. Часть из них взята дизайнером из [https://materialdesignicons.com/](https://materialdesignicons.com/), некоторые отрисованы для проекта. Насчёт договорённости подключать иконки как шрифт помню, но не будет ли слишком громоздко использовать весь пакет? SVG, отобранные из макета, занимают меньше места и не требует доп. ресурсов при загрузке~~ - **готово, см. [список иконок](https://ru39391.github.io/ds.dist/ui_icons.html)**;
1. ~~Про размеры в rem: это касается прежде всего подобных контентных блоков [http://joxi.ru/GrqDD0eURKPb9A](http://joxi.ru/GrqDD0eURKPb9A), верно? Т.к. в меню и и заголовках, табов, например размер шрифта не меняется. Пока делаю в px, чтобы проверять максимальное соответствие макету, потом изменю - **хороший пример верстки вот тут [https://kolesatyt.ru/](https://kolesatyt.ru/), все в rem, почти все стили общие, остальное бутстраповские, макет тоже был в пикселях, тут не суть важно чтобы он пиксель в пиксель попадал**~~
1. ~~Кнопки, заголовки, ссылки и проч. элементы UI вынесу на отдельные тех. страницы, чтобы потом было проще ориентироваться~~ - **см. [стандартные стили](https://ru39391.github.io/ds.dist/ui.html)**
1. ~~вот самая главная просьба - сделать это все резиновым, а не прыгающим по контрольным точкам; ну и не очень понятно, почему ширина сайта такая маленькая, она и должна быть такой? я вообще про вот эти прыжки [https://www.screencast.com/t/lfov3LmyNfd](https://www.screencast.com/t/lfov3LmyNfd); это можно сделать резиновым и оставить только основные бутстраповские размеры типо sm lg и т.д. - **Конкурентов просмотрел, у большенства плохие отступы, или очень большие или очень маленькие. Лучше всего на моем экране выглядят 4tochki. Доншина неплохо выглядит, но отступы по краям маловаты. Надо вот какоето промежутчное значение, чтобы по краям немного воздуха было, но не в притык к краю**~~
1. ~~в остальном про стандартные бутстраповские стили это очень важно для того чтобы потом самостоятельно собирать новые страницы, а на этом проекте оно каждую неделю
вот тут на колесах еще не испортили [https://www.screencast.com/t/82BQuDNjjyh](https://www.screencast.com/t/82BQuDNjjyh); тут сильно важнее стандарты, чем макет, это я клиенту объясню, верстка конструктором должна быть по сути, чтобы это было жизнеспособно, проект переделывается и доделывается каждую неделю, постоянно~~
1. ~~если это здоровые блоки, которые везде повторяются, то конечно, я больше про всякие размеры текстов, цвета, кнопочки, бордеры и подобное, чтобы можно было собрать из готовых классов, вот этой страницы например не было в верстке, она собрана вся из стандартизованных классов [https://www.screencast.com/t/MO4W878YJ6C](https://www.screencast.com/t/MO4W878YJ6C), такая возможность должна быть~~ - **см. [стандартные стили](https://ru39391.github.io/ds.dist/ui.html)**

### Вёрстка новых страниц и блоков

#### Элементы страниц

1. ~~Элементы UI при наведении~~
1. ~~Мелкие элементы шапки, поведение элементов при наведении~~
1. Поиск
1. Фон подвала
1. ~~Меню каталога~~
1. ~~Меню услуг~~
1. ~~Модальные окна~~
1. Доп. опции таба "Подбор по авто"
1. ~~Боковой фильтр~~
1. ~~Мини-корзина (cart_edit)~~
1. ~~Товар добавлен в корзину: в избранное, к сравнению, что с заказом (cart_edit)~~
1. ~~Запись на услугу~~
1. ~~Короткое название товара в сетке~~
1. ~~"Сбросить" в фильтре~~
1. ~~Диапазон цен~~
1. ~~[https://ds.39391.ru/results-tires.html](https://ds.39391.ru/results-tires.html) - добавить типоразмер в фильтр~~
1. ~~Добавить вид списка на стр. категорий~~
1. ~~Макс. высота для выпадающих списков~~

#### Страницы

1. ~~Результаты подбора шин (tire_selection_result, mob_tire_selection_result)~~ [https://ru39391.github.io/ds.dist/results-tires.html](https://ru39391.github.io/ds.dist/results-tires.html)
1. ~~Результаты подбора дисков (disk_selection_result)~~ [https://ru39391.github.io/ds.dist/results-wheels.html](https://ru39391.github.io/ds.dist/results-wheels.html)
1. ~~Результаты подбора по авто~~ [https://ru39391.github.io/ds.dist/results-auto.html](https://ru39391.github.io/ds.dist/results-auto.html)
1. ~~Результаты поиска по сайту (search_result)~~ [https://ru39391.github.io/ds.dist/results.html](https://ru39391.github.io/ds.dist/results.html)
1. ~~Категория каталога: шины (catalog_category_tires)~~ [https://ru39391.github.io/ds.dist/category-tires.html](https://ru39391.github.io/ds.dist/category-tires.html)
1. ~~Категория каталога: диски, мотошины, масла, акб (catalog_category_tires)~~ [https://ru39391.github.io/ds.dist/category-wheels.html](https://ru39391.github.io/ds.dist/category-wheels.html)
1. ~~Категория каталога: автотовары (catalog_category_auto parts)~~ [https://ru39391.github.io/ds.dist/category.html](https://ru39391.github.io/ds.dist/category.html)
1. ~~Подкатегория каталога (автотовары), с фильтром [https://ru39391.github.io/ds.dist/subcategory.html](https://ru39391.github.io/ds.dist/subcategory.html) и без [https://ru39391.github.io/ds.dist/subcategory-sidebar.html](https://ru39391.github.io/ds.dist/subcategory-sidebar.html), форма подбора по VIN;~~
1. ~~Подкатегория каталога (серии бренда шин), список~~ [https://ru39391.github.io/ds.dist/subcategory-tires-list.html](https://ru39391.github.io/ds.dist/subcategory-tires-list.html)
1. ~~Подкатегория каталога (серия бренда шин), плитка (с плашкой)~~ [https://ru39391.github.io/ds.dist/subcategory-tires-tile.html](https://ru39391.github.io/ds.dist/subcategory-tires-tile.html)
1. ~~Страница сравнения (mob_tire_selection_result)~~ [https://ru39391.github.io/ds.dist/comparing.html](https://ru39391.github.io/ds.dist/comparing.html)
1. ~~Корзина (cart, mob_cart, mob_cart_scroll)~~ [https://ru39391.github.io/ds.dist/cart.html](https://ru39391.github.io/ds.dist/cart.html)
1. ~~Оформление заказа, 4 шага (ordering_1, ordering_2, ordering_3, ordering_3_1, ordering_4, mob_ordering)~~ [https://ru39391.github.io/ds.dist/checkout.html](https://ru39391.github.io/ds.dist/checkout.html), прочие шаги смотреть в списке [https://ru39391.github.io/ds.dist/](https://ru39391.github.io/ds.dist/)
1. ~~Заказ успешно оформлен (ordering_ok), модальное окно~~ [https://ru39391.github.io/ds.dist/ui_modals.html](https://ru39391.github.io/ds.dist/ui_modals.html)
1. ~~Страница товара (detail, mob_detail, detail_tabs, detail_no)~~ [https://ru39391.github.io/ds.dist/position.html](https://ru39391.github.io/ds.dist/position.html)
1. ~~Скидки и акции (stocks, mob_stocks)~~ [https://ru39391.github.io/ds.dist/sales.html](https://ru39391.github.io/ds.dist/sales.html)
1. ~~Страница акции (stock_1)~~ [https://ru39391.github.io/ds.dist/sales-item.html](https://ru39391.github.io/ds.dist/sales-item.html)
1. ~~Страница услуги (service, service_reg_1, service_reg_2, service_reg_3)~~ [https://ru39391.github.io/ds.dist/service.html](https://ru39391.github.io/ds.dist/service.html)
1. ~~Статьи (item_all), списоком [https://ru39391.github.io/ds.dist/articles__row.html](https://ru39391.github.io/ds.dist/articles__row.html) и плиткой [https://ru39391.github.io/ds.dist/articles__cols.html](https://ru39391.github.io/ds.dist/articles__cols.html)~~
1. ~~Страница статьи, с видео (item, item_video)~~ [https://ru39391.github.io/ds.dist/article__item_video.html](https://ru39391.github.io/ds.dist/article__item_video.html)
1. ~~Контакты (contacts, mob_contacts)~~ [https://ru39391.github.io/ds.dist/contacts.html](https://ru39391.github.io/ds.dist/contacts.html)
1. ЛК: заказы, бонусы, подбор, авто, избранное, данные, пароль, записи
    * ~~personal area~~ [https://ru39391.github.io/ds.dist/personal-auto.html](https://ru39391.github.io/ds.dist/personal-auto.html)
    * ~~personal area_orders~~ [https://ru39391.github.io/ds.dist/personal-booking.html](https://ru39391.github.io/ds.dist/personal-booking.html)
    * ~~personal area_bonus~~ [https://ru39391.github.io/ds.dist/personal-bonus.html](https://ru39391.github.io/ds.dist/personal-bonus.html)
    * ~~personal area_vin~~ [https://ru39391.github.io/ds.dist/personal-vin.html](https://ru39391.github.io/ds.dist/personal-vin.html)
    * ~~personal area_vin_new~~ [https://ru39391.github.io/ds.dist/personal-vin.html](https://ru39391.github.io/ds.dist/personal-vin.html)
    * ~~personal area_auto~~ [https://ru39391.github.io/ds.dist/personal-auto-models.html](https://ru39391.github.io/ds.dist/personal-auto-models.html)
	* ~~Избранное personal area_select~~ [https://ru39391.github.io/ds.dist/personal-bookmarks.html](https://ru39391.github.io/ds.dist/personal-bookmarks.html)
	* ~~Данные пользователя personal area_personal information~~ [https://ru39391.github.io/ds.dist/personal-user.html](https://ru39391.github.io/ds.dist/personal-user.html)
	* ~~Смена пароля personal area_password~~ [https://ru39391.github.io/ds.dist/personal-pwd.html](https://ru39391.github.io/ds.dist/personal-pwd.html)
	* ~~Текущие записи personal area_service [https://ru39391.github.io/ds.dist/personal-booking.html](https://ru39391.github.io/ds.dist/personal-booking.html)~~
