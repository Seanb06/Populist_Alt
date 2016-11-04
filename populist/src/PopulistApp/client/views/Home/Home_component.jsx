import React from 'react'
import Header from '../Shared/Header';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import FeaturedLists from '../FeaturedLists/FeaturedLists_container'
import CategoryBlocks from '../CategoryBlocks/CategoryBlocks_container'

var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: 0
};

const Home = ({lists}) => (

  <div>



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
  <Header /> 
  <FeaturedLists />

  <CategoryBlocks />


  <h3 className="sec-head body-max">Our Most Popular Populists</h3>
  <div className="mase-cont">
  <Masonry
    className={'card-grid'} // default ''
    options={masonryOptions} // default {}
    disableImagesLoaded={false} // default false
    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
  >
    {lists.map(({_id, title, item_count, lead_image}) => (

      
      <div key={_id}>
        <a href={'/list/' + _id} className="card-lnk">
          <Card className="home-card">
            <CardMedia>
              <img src={lead_image} />
            </CardMedia>
            <CardTitle className="card-title" title={"The " + item_count + " Best " + title} />
            
          </Card>
          </a> 
          <div className="card-love">
          1156</div>
          
      </div>

    ))}
  </Masonry>
  </div>
  </div>
);

export default Home;

