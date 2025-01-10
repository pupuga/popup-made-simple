class WindowStyle {

    constructor(position, width, padding, borderRadius, backgroundColor) {
        this.style = {};
        this._setPosition(width, position);
        this._setWidth(width);
        this._setPadding(padding);
        this._setBorderRadius(borderRadius);
        this._setBackgroundColor(backgroundColor);
    }

    getStyle() {
        return this.style;
    }

    _setPosition(width = 0, position) {

        let transformVertical;
        let transformHorizontal;

        const [vertical, horizontal] = position.split("-");

        switch (vertical) {
            case "top":
            case "bottom":
                this.style[vertical] = "20px";
                transformVertical = "0";
                break;
            default:
                this.style.top = "50%";
                transformVertical = "-50%";
        }

        switch (horizontal) {
            case "left":
            case "right":
                this.style[horizontal] = "0";
                transformHorizontal = "0";
                break;
            default:
                this.style.left = "50%";
                transformHorizontal = "-50%";
        }

        this.style.transform = `translate(${transformHorizontal}, ${transformVertical})`;
    }

    _setWidth(width) {
        this.style.maxWidth = `${width}px`;
    }
    _setPadding(padding) {
        this.style.padding = `${padding}px`;
    }

    _setBorderRadius(borderRadius) {
        this.style.borderRadius = `${borderRadius}px`;
    }

    _setBackgroundColor(backgroundColor) {
        this.style.backgroundColor = backgroundColor;
    }
}

export default WindowStyle;