import settings from "../settings";
import React, {useEffect, useState} from "react";
import PopupStyle from "./PopupStyle";
import cookie from "./Cookie";

const Popup = ({el}) => {

    const objectPopupStyle = (new PopupStyle).setParams(
        el?.meta?._popup_made_simple_position[0],
        el?.meta?._popup_made_simple_form_style[0],
        el?.meta?._popup_made_simple_window_width[0],
        el?.meta?._popup_made_simple_window_padding[0],
        el?.meta?._popup_made_simple_window_border_thickness[0],
        el?.meta?._popup_made_simple_window_border_color[0],
        el?.meta?._popup_made_simple_window_border_radius[0],
        el?.meta?._popup_made_simple_window_background_color[0]
    );

    const [close, setClose] = useState(true);
    const onClose = () => {
        setClose(true);
    }
    const closeWindow = () => {
        setClose(true);
        cookie.set(`${settings.postType}-${el.id}-${el.date}`, true, 365);
    }

    useEffect(() => {
        const importCss = async() => {
            if (el?.meta?._popup_made_simple_form_style[0] === "1") {
                await import('./form.scss');
            }
        }
        importCss();
    }, []);

    useEffect(() => {
        const time = setTimeout(() => {
            setClose(false);
        }, el.meta._popup_made_simple_appear_time[0] * 1000);

        return () => clearTimeout(time);
    }, []);

    useEffect(() => {
        if (close === false) {
            const button = document.querySelector(`.${settings.postType}-${el.id} .accept-action`);
            if (button !== null) {
                button.addEventListener("click", closeWindow);

                return () => button.removeEventListener("click", closeWindow);
            }
        }
    }, [close]);

    return (
        <>
            {
                close ||
                <div className={`${settings.postType} ${settings.postType}-${el.id} ${settings.postType}--${el?.meta?._popup_made_simple_animation[0]}`}
                     style={objectPopupStyle.getWindowStyle()}
                >
                    <div className={`${settings.postType}__close`}>
                        <button
                            onClick={() => el?.meta?._popup_made_simple_close[0] ? closeWindow() : onClose()}
                            style={objectPopupStyle.getCloseStyle()}
                        ></button>
                    </div>
                    <div className={`${settings.postType}__content`}>
                        <div dangerouslySetInnerHTML={{__html: el.content}}/>
                    </div>
                </div>
            }
        </>
    );

}

export default Popup;