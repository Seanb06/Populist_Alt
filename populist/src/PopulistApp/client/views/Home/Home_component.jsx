import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: 0
};


const Home = ({lists}) => (

  <div className="">



  {/*
  <Grid>
    <Row className="bobo">
      <Col xs={4} md={3}>Hello, world!</Col>
      <Col xs={4} md={3}>
        <Card className="home-card">
            <CardMedia>
              <img src="http://lorempixel.com/600/337/nature/" />
              
            </CardMedia>
            <CardTitle title="5 Best bubba albertos" />
            <CardActions>
              <FlatButton label="Action1" />
            </CardActions>
          </Card>
      </Col>
      <Col xs={4} md={3}>Hello, world!</Col>
      <Col xs={4} md={3}>Hello, world!</Col>

    </Row>
  </Grid>
  */}

  <Masonry
    className={'card-grid'} // default ''
    options={masonryOptions} // default {}
    disableImagesLoaded={false} // default false
    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
  >
    {lists.map(({_id, title}) => (

      <div key={_id}>
        
        <Card className="home-card">
          <CardMedia>
            <img src="http://lorempixel.com/600/337/nature/" />
          </CardMedia>
          <CardTitle className="card-title" title={title} />
          <CardActions>
            <FlatButton label="Action1" />
          </CardActions>
        </Card>

      </div>
    ))}
    
  </Masonry>

  {/*
    Home
    This is the home page of lists
    <ul>
      {lists.map(({_id, title}) => (
        <li key={_id}>
          {title}
        </li>
      ))}
    </ul>

  */}

  </div>
);

export default Home;

