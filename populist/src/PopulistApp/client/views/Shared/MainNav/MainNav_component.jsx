import React from 'react'
import { Link, browserHistory } from 'react-router'
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import TextField from 'material-ui/TextField';

var toolbarStyle = {
  background: 'transparent'
};

var navBtnStyle = {
  "margin": '0px 0px 0px 10px',
  "borderRadius": '0px',
  "textTransform": 'none',

};

const MainNav = ({category, filter}) => (
  <div className="nav-container">
  <Toolbar style={toolbarStyle}>
    <ToolbarGroup firstChild={true}>
      <a href="/" className="head-logo">Populist</a>
      <DropDownMenu className="nav-sel" value={category} onChange={filter}>
        <MenuItem value={1} primaryText="Browse" />
        <MenuItem value={2} primaryText="Category" />
        <MenuItem value={3} primaryText="Category" />
        <MenuItem value={4} primaryText="Category" />
        <MenuItem value={5} primaryText="Category" />
        <MenuItem value={6} primaryText="Category" />
        <MenuItem value={7} primaryText="Category" />
      </DropDownMenu>
      <div className="nav-srch"> 
        <TextField placeholder="Search the best" />
        <button>Search</button>
      </div>
    </ToolbarGroup>

    <ToolbarGroup>
      <ToolbarSeparator />

      <RaisedButton
        className="nav-btn nav-create-btn"
        primary={true}
        containerElement={<Link to='/profile' />}
        linkButton={true}
        label="Create a profile"
        style={navBtnStyle}
         />
      <RaisedButton
        className="nav-btn nav-sign-btn"
        secondary={true}
        containerElement={<Link to='/login' />}
        linkButton={true}
        label="Sign in"
        style={navBtnStyle}
         />
    </ToolbarGroup>
  </Toolbar>
  </div>
);


export default MainNav
