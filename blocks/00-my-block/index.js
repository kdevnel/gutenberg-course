/**
 * Import block dependencies
 */
import icon from "./icon";
import "./style.scss";
import "./editor.scss";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType("jsforwpblocks/my-block", {
  title: __("My personal block", "jsforwpblocks"),
  description: __("A block for me to test code", "jsforwpblocks"),
  category: "common",
  icon: {
    background: "rgba(254, 243, 224, 0.52)",
    src: icon,
  },
  keywords: [
    __("devnel", "jsforwpblocks"),
    __("testing", "jsforwpblocks"),
    __("static", "jsforwpblocks"),
  ],
  edit: (props) => {
    const { className } = props;
    return <div>{__("UNICORNS!", "jsforwpblocks")}</div>;
  },
  save: (props) => {
    return <div>{__("UNICORNS!", "jsforwpblocks")}</div>;
  },
});
