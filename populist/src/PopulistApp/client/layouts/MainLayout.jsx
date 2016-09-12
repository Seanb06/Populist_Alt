import React from 'react'
import {connect} from 'react-redux';
import MainNav from '../views/Shared/MainNav/MainNav_container'
import Footer from '../views/Shared/Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { muiTheme } from './Theme'


const mapStateToProps = (state) => ({
    ...state
});

const MainLayout = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
  <div>
    <MainNav />
    <div className="container-bg">
      {children}
    </div>
    <Footer />
  </div>
 </MuiThemeProvider>
)

MainLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}


export default connect(mapStateToProps)(MainLayout);

