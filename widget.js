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

function createStylesTag(href) {
    const link = document.createElement('link');
    link.setAttribute("rel", "stylesheet")
    link.setAttribute("href", href)

    return link
}

function createWidgetTag() {
    const widget = document.createElement('div');
    widget.setAttribute("id", "widget-pharmacy");

    return widget
}

function preparePage(script, styles, widget) {
    document.head.appendChild(script).appendChild(styles);
    document.body.appendChild(widget);
}

function initializeWidget () {
    const script = createScriptTag("/dist/assets/index.js")
    const styles = createStylesTag("/dist/assets/index.css")
    const widget = createWidgetTag()
    preparePage(script, styles, widget)
}

initializeWidget()

