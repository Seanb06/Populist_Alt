import React from 'react'
import MainNav from './MainNav_component';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {logout} from '../../../actions/auth';
import {filter} from '../../../actions/filter';

// http://stackoverflow.com/questions/34450396/how-use-react-redux-connect-with-mapstatetoprops-mapdispatchtoprops-and-redux-ro

const mapStateToProps = state => ({
  loggingIn: state.auth.loggingIn,
  user: state.auth.user,
  category: state.filter.category
})


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    filter,
    logout
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(MainNav);