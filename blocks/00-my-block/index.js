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
const { RichText, AlignmentToolbar, BlockControls } = wp.editor;

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
    description: {
      type: "array",
      source: "children",
      selector: ".recipe-description",
    },
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
    textAlignment: {
      type: "string",
    },
  },
  edit: (props) => {
    const {
      attributes: { description, ingredients, method, textAlignment },
      className,
      setAttributes,
    } = props;
    return (
      <div className={className}>
        <h2>{__("UNICORNS!", "jsforwpblocks")}</h2>
        <h3>{__("Description", "jsforwpblocks")}</h3>
        <BlockControls>
          <AlignmentToolbar
            value={textAlignment}
            onChange={(textAlignment) => setAttributes({ textAlignment })}
          />
        </BlockControls>
        <RichText
          tagName="div"
          multiline="p"
          placeholder={__("Add description", "jsforwpblocks")}
          value={description}
          style={{ textAlign: textAlignment }}
          onChange={(description) => setAttributes({ description })}
        />
        <h3>{__("Ingredients", "jsforwpblocks")}</h3>
        <RichText
          tagName="ul"
          multiline="li"
          placeholder={__("Add ingredient", "jsforwpblocks")}
          onChange={(ingredients) => setAttributes({ ingredients })}
          value={ingredients}
        />
        <h3>{__("Method", "jsforwpblocks")}</h3>
        <RichText
          tagName="ol"
          multiline="li"
          placeholder={__("Add instruction", "jsforwpblocks")}
          onChange={(method) => setAttributes({ method })}
          value={method}
        />
      </div>
    );
  },
  save: (props) => {
    const {
      attributes: { description, ingredients, method, textAlignment },
    } = props;
    return (
      <div>
        <h2>{__("UNICORNS!", "jsforwpblocks")}</h2>
        <h3>{__("Description", "jsforwpblocks")}</h3>
        <div class="recipe-description" style={{ textAlign: textAlignment }}>
          {description}
        </div>
        <h3>{__("Ingredients", "jsforwpblocks")}</h3>
        <ul class="recipe-ingredients">{ingredients}</ul>
        <h3>{__("Method", "jsforwpblocks")}</h3>
        <ol class="recipe-method">{method}</ol>
      </div>
    );
  },
});
