'use strict'

/* globals $, Materialize */

/**
 * Story dependencies.
 */

import React from 'react'
import InputHandler from 'react-input-handler'
import Grille from '../src/ReactGrille'

/**
 * The React Grille Story component.
 */

class ReactGrilleStory extends React.Component {
  state = {
    blockSize: 50,
    borderColor: '#6984c1',
    borderSize: 3
  }

  constructor(props) {
    super(props)
    this.inputHandler = InputHandler.bind(this)
  }

  componentDidMount() {
    $(() => Materialize.updateTextFields())
  }

  render() {
    const { blockSize, borderSize, borderColor } = this.state

    return (
      <div>
        <Grille
          blockSize={+blockSize}
          borderColor={borderColor}
          borderSize={+borderSize}
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <div
            className="card z-depth-2"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              backgroundColor: 'white',
              width: 300,
              marginLeft: -150,
              height: 290,
              marginTop: -145
            }}
          >
            <div className="card-content">
              <div style={{ fontSize: 24 }}>&lt;ReactGrille /&gt;</div>
              <div className="input-field">
                <input
                  type="number"
                  min="1"
                  name="blockSize"
                  onChange={this.inputHandler}
                  value={blockSize}
                />
                <label>Block Size</label>
              </div>

              <div className="input-field">
                <input
                  type="number"
                  min="1"
                  name="borderSize"
                  onChange={this.inputHandler}
                  value={borderSize}
                />
                <label>Border Size</label>
              </div>

              <div>
                <div>
                  <label>Border Color</label>
                </div>
                <input
                  type="color"
                  min="1"
                  name="borderColor"
                  onChange={this.inputHandler}
                  value={borderColor}
                />
              </div>
            </div>
          </div>
        </Grille>
      </div>
    )
  }
}

/**
 * Story component export.
 */

export default ReactGrilleStory
