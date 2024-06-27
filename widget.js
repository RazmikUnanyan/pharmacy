// Функция для создания тега <script> с заданным src
function createScriptTag(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = function () {
        if (typeof window.renderPharmacyWidget === 'function') {
            window.renderPharmacyWidget();
        }
    };

    return script
}

// Функция для создания тега <link> для подключения стилей с заданным href
function createStylesTag(href) {
    const link = document.createElement('link');
    link.setAttribute("rel", "stylesheet")
    link.setAttribute("href", href)

    return link
}

// Функция для создания тега <div> с id "widget-pharmacy"
function createWidgetTag() {
    const widget = document.createElement('div');
    widget.setAttribute("id", "widget-pharmacy");

    return widget
}

// Функция для добавления элементов <script>, <link> и <div> на страницу
function preparePage(script, styles, widget) {
    document.head.appendChild(script).appendChild(styles);
    document.body.appendChild(widget);
}

// Главная функция инициализации виджета
function initializeWidget () {
    const script = createScriptTag("https://razmikunanyan.github.io/pharmacy/assets/index.js")
    const styles = createStylesTag("https://razmikunanyan.github.io/pharmacy/assets/index.css")
    const widget = createWidgetTag()
    preparePage(script, styles, widget)
}

// Вызов функции инициализации виджета
initializeWidget()

