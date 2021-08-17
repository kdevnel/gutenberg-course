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
const { RichText } = wp.editor;

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
  attributes: {
    ingredients: {
      type: "array",
      source: "children",
      selector: ".recipe-ingredients",
    },
    method: {
      type: "array",
      source: "children",
      selector: ".recipe-method",
    },
  },
  edit: (props) => {
    const {
      attributes: { ingredients, method },
      className,
      setAttributes,
    } = props;
    const onChangeIngredients = (ingredients) => {
      setAttributes({ ingredients });
    };
    const onChangeMethod = (method) => {
      setAttributes({ method });
    };
    return (
      <div className={className}>
        <h2>{__("UNICORNS!", "jsforwpblocks")}</h2>
        <h3>{__("Ingredients", "jsforwpblocks")}</h3>
        <RichText
          tagName="ul"
          multiline="li"
          placeholder={__("Add ingredient", "jsforwpblocks")}
          onChange={onChangeIngredients}
          value={ingredients}
        />
        <h3>{__("Method", "jsforwpblocks")}</h3>
        <RichText
          tagName="ol"
          multiline="li"
          placeholder={__("Add instruction", "jsforwpblocks")}
          onChange={onChangeMethod}
          value={method}
        />
      </div>
    );
  },
  save: (props) => {
    const {
      attributes: { ingredients, method },
    } = props;
    return (
      <div>
        <h2>{__("UNICORNS!", "jsforwpblocks")}</h2>
        <h3>{__("Ingredients", "jsforwpblocks")}</h3>
        <ul class="recipe-ingredients">{ingredients}</ul>
        <h3>{__("Method", "jsforwpblocks")}</h3>
        <ol class="recipe-method">{method}</ol>
      </div>
    );
  },
});
