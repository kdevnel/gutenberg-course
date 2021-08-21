/**
 * Import block dependencies
 */

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

/**
 * Wrapper class for block inspector
 */
export default class Inspector extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: { toggleMagic },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls>
        <PanelBody title={__("Magic Settings", "jsforwpblocks")}>
          <PanelRow>
            <ToggleControl
              label={__("Activate Magic", "jsforwpblocks")}
              checked={toggleMagic}
              onChange={(toggleMagic) => setAttributes({ toggleMagic })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    );
  }
}
