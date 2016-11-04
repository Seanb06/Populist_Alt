import React from 'react'
import { Link, browserHistory } from 'react-router'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton';

export default function Header() {
  return ( 
    <div className="body-max">
      <div className="hero-container">
        <h2><span>Love it?</span> <span>List it!</span></h2>
        <div className="hero-txt">
          Never lose those favorite restaurants, best books or recommended shops again.<br /> 
Make a list, get likes and discover related finds!
        </div>
        <div className="hero-btns">
          <a href="/create" className="hero-create-list">Create a list now</a>
        </div>
      </div>
    </div>
  )
}