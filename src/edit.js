/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const { Fragment } = wp.element;

const { compose, withInstanceId } = wp.compose;

const {
  BlockControls,
  InspectorControls,
  RichText,
  InnerBlocks
} = wp.blockEditor;

const {
  PanelBody,
  Toolbar,
  ToggleControl,
  RangeControl,
  ColorPicker
} = wp.components;

/**
 * Internal dependencies
 */
import getHTMLTagIcon from './get-html-tag-icon';

const AccordionItemEdit = ({
  className,
  attributes,
  setAttributes,
  instanceId
}) => {
  const {
    title,
    initiallyOpen,
    clickToClose,
    autoClose,
    titleTag,
    scroll,
    scrollOffset,
    uuid,
    buttonIconColor,
    buttonBgColor,
    buttonBorderColor
  } = attributes;

  setAttributes({
    uuid: instanceId
  });
  function getRGBA({ rgb }) {
    const { r, g, b, a } = rgb;
    return `rgba(${r},${g},${b},${a})`;
  }
  var titleClasses = ['c-accordion__title', 'c-accordion__title--editor'];

  if (titleTag === 'button') {
    titleClasses.push('c-accordion__title--button');
  }

  var itemClasses = ['c-accordion__item', 'js-accordion-item'];

  return (
    <Fragment>
      <BlockControls>
        <Toolbar
          controls={['h1', 'h2', 'h3', 'h4', 'button'].map(tag => ({
            icon: getHTMLTagIcon(tag),
            title: tag.toUpperCase(),
            isActive: titleTag === tag,
            onClick: () => setAttributes({ titleTag: tag })
          }))}
        />
      </BlockControls>
      <InspectorControls>
        <PanelBody title={__('Opciones del Acordeon', 'pb')}>
          <ToggleControl
            label={__('Abierto', 'pb')}
            help={
              initiallyOpen
                ? __('El acordeon estara abierto cuando la pagina carge.', 'pb')
                : __('El acordeon estara cerrado cuando la pagina carge.', 'pb')
            }
            checked={initiallyOpen}
            onChange={value => setAttributes({ initiallyOpen: value })}
          />
          <ToggleControl
            label={__('Click para cerrar', 'pb')}
            help={
              clickToClose
                ? __('Puede cerrarse al clickear el titulo.', 'pb')
                : __(
                    'Cuando este abierto, no puede cerrarse al clickear el titulo',
                    'pb'
                  )
            }
            checked={clickToClose}
            onChange={value => setAttributes({ clickToClose: value })}
          />
          <ToggleControl
            label={__('Auto Close', 'pb')}
            help={
              autoClose
                ? __('Este acordeaon se cerrara al abrir otro item.', 'pb')
                : __(
                    'Este acordeon permanecera abierto al abrir otro item',
                    'pb'
                  )
            }
            checked={autoClose}
            onChange={value => setAttributes({ autoClose: value })}
          />
          <ToggleControl
            label={__('Scroll to Accordion Item', 'pb')}
            help={
              scroll
                ? __(
                    'The page will scroll to the accordion item title when it is opened.',
                    'pb'
                  )
                : __(
                    'The page will not scroll when opening accordion items.',
                    'pb'
                  )
            }
            checked={scroll}
            onChange={value => setAttributes({ scroll: value })}
          />
          <RangeControl
            label={__('Scoll Pixel Offset', 'pb')}
            value={scrollOffset}
            onChange={value =>
              setAttributes({ scrollOffset: value ? value : 0 })
            }
            min={0}
            max={1000}
            help={__('A pixel offset for the final scroll position.', 'pb')}
          />
          <div>
            <p>{__('Color del icono', 'pb')}</p>
            <ColorPicker
              color={buttonIconColor}
              onChangeComplete={value =>
                setAttributes({ buttonIconColor: getRGBA(value) })
              }
            />
          </div>
          <div>
            <p>{__('Color de fondo del icono', 'pb')}</p>
            <ColorPicker
              color={buttonBgColor}
              onChangeComplete={value =>
                setAttributes({ buttonBgColor: getRGBA(value) })
              }
            />
          </div>
          <div>
            <p>{__('Color de borde del icono', 'pb')}</p>
            <ColorPicker
              color={buttonBorderColor}
              onChangeComplete={value =>
                setAttributes({ buttonBorderColor: getRGBA(value) })
              }
            />
          </div>
        </PanelBody>
      </InspectorControls>
      <div className={[...itemClasses, className].join(' ')}>
        <div className="c-accordion__container">
          <RichText
            className={titleClasses.join(' ')}
            tagName={titleTag}
            placeholder={__('Titulo...', 'pb')}
            value={title}
            onChange={value => setAttributes({ title: value })}
          />
          <span
            className="c-accordion__icon"
            data-icon-color={buttonIconColor}
            data-bg-color={buttonBgColor}
            data-border-color={buttonBorderColor}
          >
            <svg
              viewBox="0 0 32 32"
              className="icon icon-chevron-bottom c-accordion__svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              style={{
                borderColor: buttonBorderColor,
                background: buttonBgColor
              }}
            >
              <path
                d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"
                fill={buttonIconColor}
              />
            </svg>
          </span>
        </div>
        <div className="c-accordion__content">
          <InnerBlocks />
        </div>
      </div>
    </Fragment>
  );
};

export default compose([withInstanceId])(AccordionItemEdit);
