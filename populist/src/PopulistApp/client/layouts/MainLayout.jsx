import React from 'react'
import MainNav from '../views/Shared/MainNav'
import Footer from '../views/Shared/Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { muiTheme } from './Theme'

export const MainLayout = ({ children }) => (
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

export default MainLayout
