'use strict'

/**
 * Component dependencies.
 */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * React Grille component.
 */
class Grille extends React.Component {
  // Default properties.
  static defaultProps = {
    blockSize: 50,
    borderColor: 'red',
    borderSize: 1
  }

  /**
   * Render the Grille component.
   */
  render() {
    const { blockSize, borderSize, borderColor, ...otherProps } = this.props

    const style = {}
    const blockSizeWithBorder = blockSize + borderSize
    const borderPct = borderSize / blockSizeWithBorder * 100

    // Create grille styling.
    style.backgroundSize = `${blockSizeWithBorder}px ${blockSizeWithBorder}px`
    style.backgroundPosition = `0 -${borderSize}px`
    style.backgroundImage = backgroundImage(
      linearGradient(
        '0deg',
        `transparent ${100 - borderPct}%`,
        `${borderColor} ${borderPct}%`
      ),
      linearGradient(
        '90deg',
        `transparent ${100 - borderPct}%`,
        `${borderColor} ${borderPct}%`
      )
    )

    if (otherProps.style) {
      Object.assign(style, otherProps.style, style)
    }

    return <div {...otherProps} style={style} />
  }
}

/**
 * React Grille component prop types.
 */
Grille.propTypes = {
  blockSize: PropTypes.number,
  borderSize: PropTypes.number,
  borderColor: PropTypes.string
}

/**
 * Utility functions.
 */

/**
 * Create CSS backround image from image values.
 * @param {String|Array} One or more image values.
 * @return {String} A well formatted CSS background image value.
 */
function backgroundImage(...images) {
  return images.join(', ')
}

/**
 * Create CSS linear gradient from gradient values.
 * @param {String|Array} One or more gradient values.
 * @return {String} A well formatted CSS background gradient value.
 */
function linearGradient(...gradients) {
  return `linear-gradient(${gradients.join(', ')})`
}

/**
 * Module export.
 */

export default Grille
