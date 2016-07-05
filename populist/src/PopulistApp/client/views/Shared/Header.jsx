import React from 'react'
import { Link, browserHistory } from 'react-router'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton';

export default function Header() {
  return ( 
    <div className="body-max">
      <div className="hero-container">
        <img src="/assets/images/log-hero.png" />
        <div className="hero-txt">
          Create, share and discover<br />
          the best stuff the world has to offer.
        </div>
        <div className="hero-btns">
          <a href="#" className="home-fb-btn"></a>
          <a href="#" className="home-g-btn"></a>
        </div>
      </div>
    </div>
  )
}