import React, { Component } from 'react'
import Body from './Body'
import Nav from './Nav'

export default class BaiTapThuKinh extends Component {
  render() {
    const background = {
        backgroundImage: 'url(./glassesImage/background.jpg)',
        minHeight:'2000px',
    }
    return (
       <div style={background}>
        <div style={{backgroundColor:'rgba(0,0,0,.8)',minHeight:'2000px'}}>
            <Nav />
            <Body />
        </div>
       </div>
      
    )
  }
}
