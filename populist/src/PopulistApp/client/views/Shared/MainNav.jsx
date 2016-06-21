import React from 'react'
import { Link, browserHistory } from 'react-router'
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


var toolbarStyle = {
  background: 'rgba(215,215,215,0.34)'
};

export default class MainNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return ( 
      <Toolbar style={toolbarStyle}>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Browse" />
            <MenuItem value={2} primaryText="Category" />
            <MenuItem value={3} primaryText="Category" />
            <MenuItem value={4} primaryText="Category" />
            <MenuItem value={5} primaryText="Category" />
            <MenuItem value={6} primaryText="Category" />
            <MenuItem value={7} primaryText="Category" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          <RaisedButton label="Create a profile" primary={true} />
          <RaisedButton label="Sign in" secondary={true} />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}
