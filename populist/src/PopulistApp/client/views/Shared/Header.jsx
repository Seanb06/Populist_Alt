import React from 'react'
import { Link, browserHistory } from 'react-router'
import AppBar from 'material-ui/AppBar'

export default function Header() {
  return ( 
    
    <div>
    <AppBar title="My AppBar" />
    This is the header:
      {' '}
      <Link to="/">Home</Link>
      {' '}
      <Link to="/create">Create List</Link>
      {' '}
      <Link to="/list/one">List Detail</Link>
    </div>
  )
}