import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from './Theme'

export const LoginLayout = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
  <div>
    {children}
  </div>

 </MuiThemeProvider>
)

LoginLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default LoginLayout
