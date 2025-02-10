class PopupStyle {

    constructor() {
        this._style = {};
        this._indent = 20;
        this._closeDiameter = 30;
        this._style = {};
        this._style.window = {};
        this._style.close = {};
    }

    setParams(position, width, padding, borderThickness, borderColor, borderRadius, backgroundColor) {
        this._setPosition(width, position);
        this._setWidth(width);
        this._setHeight();
        this._setPadding(padding);
        this._borderThickness(borderThickness),
        this._borderColor(borderColor),
        this._setBorderRadius(borderRadius);
        this._setBackgroundColor(backgroundColor);
        this._setClose(borderThickness);

        return this;
    }

    getStyle() {
        return this._style;
    }

    getWindowStyle() {
        return this._style.window;
    }

    getCloseStyle() {
        return this._style.close;
    }

    _setPosition(width = 0, position) {

        let transformVertical;
        let transformHorizontal;

        const [vertical, horizontal] = position.split("-");

        switch (vertical) {
            case "top":
            case "bottom":
                this._style.window[vertical] = `${this._indent}px`;
                transformVertical = "0";
                break;
            default:
                this._style.window.top = "50%";
                transformVertical = "-50%";
        }

        switch (horizontal) {
            case "left":
            case "right":
                this._style.window[horizontal] = `${this._indent}px`;
                transformHorizontal = "0";
                break;
            default:
                this._style.window.left = "50%";
                transformHorizontal = "-50%";
        }

        this._style.window.transform = `translate(${transformHorizontal}, ${transformVertical})`;
    }

    _setWidth(width) {
        this._style.window.width = (width === "100%") ? "100%" : `${width}px`;
    }

    _setHeight() {
        this._style.window.maxHeight = `calc(100% - ${2 * this._indent}px)`;
    }

    _setPadding(padding) {
        this._style.window.padding = `${padding}px`;
    }

    _borderThickness(borderThickness) {
        this._style.window.borderWidth = `${borderThickness}px`;
    }

    _borderColor(borderColor) {
        this._style.window.borderColor = `${borderColor}`;
    }

    _setBorderRadius(borderRadius) {
        this._style.window.borderRadius = `${borderRadius}px`;
    }

    _setBackgroundColor(backgroundColor) {
        this._style.window.backgroundColor = backgroundColor;
    }

    _setClose(borderThickness) {
        const indent = `-${this._closeDiameter * 0.5 + (0.5 * borderThickness)}px`;
        this._style.close.top = indent;
        this._style.close.right = indent;
    }
}

export default PopupStyle;