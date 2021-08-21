/**
 * Import block dependencies
 */
import icons from "./icon";
import classnames from "classnames";
import "./style.scss";
import "./editor.scss";
import attributes from "./attributes";
import Inspector from "./components/inspector";

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
  icon: icons.block,
  keywords: [
    __("devnel", "jsforwpblocks"),
    __("testing", "jsforwpblocks"),
    __("static", "jsforwpblocks"),
  ],
  supports: {
    align: true,
  },
  attributes,
  edit: (props) => {
    const {
      attributes: {
        description,
        ingredients,
        method,
        textAlignment,
        align,
        toggleMagic,
      },
      //attributes,
      className,
      setAttributes,
    } = props;
    const classes = classnames(className, { magic: toggleMagic });
    return [
      // <InspectorControls>
      //   <PanelBody title={__("Magic Settings", "jsforwpblocks")}>
      //     <PanelRow>
      //       <label htmlFor="make-magical-form-toggle">
      //         {__("Activate Magic", "jsforwpblocks")}
      //       </label>
      //       <FormToggle
      //         id="make-magical-form-toggle"
      //         label={__("Activate Magic", "jsforwpblocks")}
      //         checked={toggleMagic}
      //         onChange={toggleMagic}
      //       />
      //     </PanelRow>
      //   </PanelBody>
      // </InspectorControls>,
      <Inspector {...{ setAttributes, ...props }} />,
      <div className={classes}>
        <h2>{__("UNICORNS!", "jsforwpblocks")}</h2>
        <h3>{__("Description", "jsforwpblocks")}</h3>
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
      </div>,
    ];
  },
  save: (props) => {
    const {
      attributes: {
        description,
        ingredients,
        method,
        textAlignment,
        align,
        toggleMagic,
      },
    } = props;
    const className = classnames("recipe-container", `align${align}`, {
      magic: toggleMagic,
    });
    return (
      <div className={className}>
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
