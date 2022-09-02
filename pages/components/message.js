import React, { Component } from 'react'

class Navigation extends Component {
  render() {
    return (

      <div className={null}>

        <p>Input:</p>

        <input />

        <button onClick={this.handleSubmit}>Submit</button>

        <p>Output:</p>

        <input />

        <button onClick={this.handleSubmit}>Submit</button>

      </div>
    )
  }
}

export default Navigation