import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {cyan500} from 'material-ui/styles/colors';
import Header from '../views/Shared/Header'
import Footer from '../views/Shared/Footer'


console.log("GRID" + Grid);


const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});


export const MainLayout = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
  <div>
    <Header />
    <div>
      {children}
    </div>

    <Grid>
      <Row>
        <Col xs={6} md={3}>Hello, world!</Col>
      </Row>
    </Grid>

    <Footer />
  </div>
 </MuiThemeProvider>
)

MainLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default MainLayout
