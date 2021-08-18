/**
 * Import block dependencies
 */
import icons from "./icon";
import classnames from "classnames";
import "./style.scss";
import "./editor.scss";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  BlockAlignmentToolbar,
  InspectorControls,
} = wp.editor;
const { Dashicon, Toolbar, Button, Tooltip, PanelBody, PanelRow, FormToggle } =
  wp.components;

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
    blockAlignment: {
      type: "string",
      default: "wide",
    },
    magicButton: {
      type: "boolean",
      default: false,
    },
  },
  getEditWrapperProps({ blockAlignment }) {
    if (
      "left" === blockAlignment ||
      "right" === blockAlignment ||
      "wide" === blockAlignment ||
      "full" === blockAlignment
    ) {
      return { "data-align": blockAlignment };
    }
  },
  edit: (props) => {
    const {
      attributes: {
        description,
        ingredients,
        method,
        textAlignment,
        blockAlignment,
        magicButton,
      },
      className,
      setAttributes,
    } = props;
    const classes = classnames(className, { magic: magicButton });
    const toggleMagic = () => setAttributes({ magicButton: !magicButton });
    return [
      <InspectorControls>
        <PanelBody title={__("Magic Settings", "jsforwpblocks")}>
          <PanelRow>
            <label htmlFor="make-magical-form-toggle">
              {__("Activate Magic", "jsforwpblocks")}
            </label>
            <FormToggle
              id="make-magical-form-toggle"
              label={__("Activate Magic", "jsforwpblocks")}
              checked={magicButton}
              onChange={toggleMagic}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>,
      <BlockControls>
        <BlockAlignmentToolbar
          value={blockAlignment}
          onChange={(blockAlignment) => setAttributes({ blockAlignment })}
        />
        <AlignmentToolbar
          value={textAlignment}
          onChange={(textAlignment) => setAttributes({ textAlignment })}
        />
        <Toolbar>
          <Tooltip text={__("Make Magic", "jsforwpblocks")}>
            <Button
              className={classnames(
                "components-icon-button",
                "components-toolbar__control",
                { "is-active": magicButton }
              )}
              onClick={toggleMagic}
            >
              {icons.wand}
            </Button>
          </Tooltip>
        </Toolbar>
      </BlockControls>,
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
        blockAlignment,
        magicButton,
      },
    } = props;
    const className = classnames("recipe-container", `align${blockAlignment}`, {
      magic: magicButton,
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
