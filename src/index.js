/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

const { InnerBlocks, RichText } = wp.blockEditor;

/**
 * Internal dependencies
 */
import settings from './settings';

import transforms from './transforms';

import edit from './edit';

registerBlockType('pb/accordion-item', {
  ...settings,

  transforms,

  edit,

  save: ({ attributes }) => {
    const {
      className,
      title,
      initiallyOpen,
      clickToClose,
      autoClose,
      titleTag,
      scroll,
      scrollOffset,
      buttonIconColor,
      buttonBgColor,
      buttonBorderColor,
      uuid
    } = attributes;

    var itemClasses = ['c-accordion__item', 'js-accordion-item', 'no-js'];

    var titleClasses = ['c-accordion__title', 'js-accordion-controller'];

    var contentStyles = {};

    if (titleTag === 'button') {
      titleClasses.push('c-accordion__title--button');
    }

    if (initiallyOpen) {
      itemClasses.push('is-open');
    } else {
      contentStyles.display = 'none';
    }

    return (
      <div
        className={[...itemClasses, className].join(' ')}
        data-initially-open={initiallyOpen}
        data-click-to-close={clickToClose}
        data-auto-close={autoClose}
        data-scroll={scroll}
        data-scroll-offset={scrollOffset}
      >
        <div className="c-accordion__container">
          <RichText.Content
            id={'at-' + uuid}
            className={titleClasses.join(' ')}
            tagName={titleTag}
            tabIndex={0}
            role="button"
            aria-controls={'ac-' + uuid}
            value={title}
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
        <div
          id={'ac-' + uuid}
          className="c-accordion__content"
          style={contentStyles}
        >
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
});
