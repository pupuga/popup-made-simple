import "./index.scss";
import settings from "../settings";
import {registerPlugin} from "@wordpress/plugins";
import {PluginDocumentSettingPanel} from '@wordpress/editor';
import {Spinner, SelectControl, RangeControl, ColorPicker, CheckboxControl} from "@wordpress/components";
import {useSelect, useDispatch} from "@wordpress/data";
import {useEffect, useState} from "@wordpress/element";


const positionOptions = [
    {label: "Center Center", value: "center-center"},
    {label: "Top Center", value: "top-center"},
    {label: "Top Right", value: "top-right"},
    {label: "Bottom Center", value: "bottom-center"},
    {label: "Bottom Right", value: "bottom-right"}
];

const animationOptions = [
    {label: "Fade", value: "fade"},
    {label: "From Top", value: "from-top"},
    {label: "From Bottom", value: "from-bottom"}
];

const PostTypeSidebar = () => {
    const {meta, postType} = useSelect(select => {
        const editor = select("core/editor");
        return {
            meta: editor.getEditedPostAttribute("meta") || {},
            postType: editor.getCurrentPostType(),
        };
    }, []);
    const {editPost} = useDispatch("core/editor");
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);

    if (postType !== settings.postType) {
        return null;
    }

    useEffect(() => {
        const defaultMeta = {
            _popup_made_simple_position: meta?._popup_made_simple_position || settings.defaultValues.position,
            _popup_made_simple_animation: meta?._popup_made_simple_animation || settings.defaultValues.animation,
            _popup_made_simple_form_style: meta?._popup_made_simple_form_style || settings.defaultValues.formStyle,
            _popup_made_simple_window_width: meta?._popup_made_simple_window_width || settings.defaultValues.windowWidth,
            _popup_made_simple_window_padding: meta?._popup_made_simple_window_padding || settings.defaultValues.padding,
            _popup_made_simple_window_border_thickness: meta?._popup_made_simple_window_border_thickness || settings.defaultValues.borderThickness,
            _popup_made_simple_window_border_color: meta?._popup_made_simple_window_border_color || settings.defaultValues.borderColor,
            _popup_made_simple_window_border_radius: meta?._popup_made_simple_window_border_radius || settings.defaultValues.borderRadius,
            _popup_made_simple_window_background_color: meta?._popup_made_simple_window_background_color || settings.defaultValues.backgroundColor,
            _popup_made_simple_appear_time: meta?._popup_made_simple_appear_time || settings.defaultValues.appearTime,
            _popup_made_simple_close: meta?._popup_made_simple_close || settings.defaultValues.close,
        };

        editPost({meta: {...meta, ...defaultMeta}});

    }, []);

    useEffect(() => {
        wp.apiFetch({path: "/wp/v2/pages"})
            .then((response) => {
                const pageOptions = response.map((page) => ({
                    label: page.title.rendered,
                    value: page.id,
                }));
                setPages(pageOptions);
            })
            .catch((error) => {
                console.error("Error fetching pages:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? <Spinner/> :
                <PluginDocumentSettingPanel name={`${settings.postType}-config`} title="Popup Config" className={`${settings.postType}`}>
                    <SelectControl
                        label="Select a page"
                        value={meta?._popup_made_simple_page || ""}
                        options={[{label: "All pages", value: "0"}, ...pages]}
                        onChange={value => editPost({meta: {...meta, _popup_made_simple_page: value}})}
                    />
                    <SelectControl
                        label="Select a popup position"
                        value={meta?._popup_made_simple_position}
                        options={positionOptions}
                        onChange={value => editPost({meta: {...meta, _popup_made_simple_position: value}})}
                    />
                    <div className="field-wrapper-row">
                        <CheckboxControl
                            label="Using form style"
                            checked={meta?._popup_made_simple_form_style}
                            onChange={value => editPost({meta: {...meta, _popup_made_simple_form_style: value}})}
                        />
                    </div>
                    <SelectControl
                        label="Select a type of animation"
                        value={meta?._popup_made_simple_animation}
                        options={animationOptions}
                        onChange={value => editPost({meta: {...meta, _popup_made_simple_animation: value}})}
                    />
                    <RangeControl
                        label="Enter a window width (px)"
                        value={meta?._popup_made_simple_window_width}
                        onChange={value => editPost({meta: {...meta, _popup_made_simple_window_width: value}})}
                        min={500}
                        max={4096}
                    />
                    <RangeControl
                        label="Enter a window padding (px)"
                        value={meta?._popup_made_simple_window_padding}
                        onChange={value => editPost({meta: {...meta, _popup_made_simple_window_padding: value}})}
                        min={0}
                        max={50}
                    />
                    <RangeControl
                        label="Enter a window border thickness (px)"
                        value={meta?._popup_made_simple_window_border_thickness}
                        onChange={value => editPost({
                            meta: {
                                ...meta,
                                _popup_made_simple_window_border_thickness: value
                            }
                        })}
                        min={1}
                        max={50}
                    />
                    <div className="field-wrapper-row">
                        <label>Choose a window border color</label>
                        <ColorPicker
                            color={meta?._popup_made_simple_window_border_color}
                            onChange={value => editPost({
                                meta: {
                                    ...meta,
                                    _popup_made_simple_window_border_color: value
                                }
                            })}
                            enableAlpha={false}
                        />
                    </div>
                    <RangeControl
                        label="Enter a window border radius (px)"
                        value={meta?._popup_made_simple_window_border_radius}
                        onChange={value => editPost({meta: {...meta, _popup_made_simple_window_border_radius: value}})}
                        min={0}
                        max={50}
                    />
                    <div className="field-wrapper-row">
                        <label>Choose a window background color</label>
                        <ColorPicker
                            color={meta?._popup_made_simple_window_background_color}
                            onChange={value => editPost({
                                meta: {
                                    ...meta,
                                    _popup_made_simple_window_background_color: value
                                }
                            })}
                            enableAlpha={false}
                        />
                    </div>
                    <RangeControl
                        label="Enter a time until appearance (s)"
                        value={meta?._popup_made_simple_appear_time}
                        onChange={value => editPost({meta: {...meta, _popup_made_simple_appear_time: value}})}
                        min={0}
                        max={10 * 60}
                    />
                    <div className="field-wrapper-row">
                        <CheckboxControl
                            label="The closing like the acceptance"
                            checked={meta?._popup_made_simple_close}
                            onChange={value => editPost({meta: {...meta, _popup_made_simple_close: value}})}
                        />
                    </div>
                </PluginDocumentSettingPanel>
            }
        </>
    );
};

registerPlugin(`${settings.postType}-sidebar`, {render: PostTypeSidebar});
