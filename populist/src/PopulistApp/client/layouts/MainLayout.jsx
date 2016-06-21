import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import MainNav from '../views/Shared/MainNav'
import Header from '../views/Shared/Header'
import Footer from '../views/Shared/Footer'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';



const muiTheme = getMuiTheme({
  fontFamily: 'arial',
  palette: {
    primary1Color: '#4A90E2',
    primary2Color: '#4A90E2',
    primary3Color: '#4A90E2',
    accent1Color: '#9B9B9B',
    accent2Color: '#4A90E2',
    accent3Color: '#4A90E2',
    textColor: 'black',
    alternateTextColor: 'white',
    canvasColor: 'white'
  },
  appBar: {
    height: 50,
  },
});

const style = {
  margin: 12,
};


export const MainLayout = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
  <div>
    <MainNav />
    <Header />
    <div>

      <FlatButton label="Default" />
      <FlatButton label="Primary" primary={true} />
      <FlatButton label="Secondary" secondary={true} />
      <FlatButton label="Disabled" disabled={true} />

      <br />
      <br />

      <RaisedButton label="Default" style={style} />
      <RaisedButton label="Primary" primary={true} style={style} />
      <RaisedButton label="Secondary" secondary={true} style={style} />
      <RaisedButton label="Disabled" disabled={true} style={style} />

      <br />
      <br />

      <a href="#">test</a>

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
