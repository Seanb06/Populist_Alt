import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const muiTheme = getMuiTheme({
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

export default muiTheme