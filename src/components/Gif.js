import React, { Component } from 'react'
import spinner from './spinner.gif'

export default class Gif extends Component {
  render() {
    return (
      <div className='my-6'>
        <img src={spinner} alt="loading"></img>
      </div>
    )
  }
}
