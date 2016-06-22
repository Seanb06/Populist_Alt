import React from 'react'
import MainNav from '../views/Shared/MainNav'
import Header from '../views/Shared/Header'
import Footer from '../views/Shared/Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from './Theme'

export const MainLayout = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
  <div>
    <MainNav />
    <Header /> 
    <div className="">
      {children}
    </div>

    {/*
        <Grid>
          <Row>
            <Col xs={6} md={3}>Hello, world!</Col>
          </Row>
        </Grid>

    */}
    <Footer />
  </div>
 </MuiThemeProvider>
)

MainLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default MainLayout
