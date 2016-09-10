import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
var Masonry = require('react-masonry-component');

const CategoryBlocks = () => (
  <div className="mase-cont">

    <Masonry
    className={'card-grid'} // default ''
    disableImagesLoaded={false} // default false
    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false 
    >


      <div>
        <a href="/list/one" className="card-lnk">
          <Card className="home-card cat-block">
            <CardMedia>
              <img src="/assets/images/block-book.svg" />
            </CardMedia>
            <CardTitle className="card-title" title='Pizza' />
            <CardActions>
              
            </CardActions>
          </Card>
        </a>
      </div>

      <div>
        <a href="/list/one" className="card-lnk">
          <Card className="home-card cat-block">
            <CardMedia>
              <img src="/assets/images/block-book.svg" />
            </CardMedia>
            <CardTitle className="card-title" title='Pizza' />
            <CardActions>
              
            </CardActions>
          </Card>
        </a>
      </div>

      <div>
        <a href="/list/one" className="card-lnk">
          <Card className="home-card cat-block">
            <CardMedia>
              <img src="/assets/images/block-book.svg" />
            </CardMedia>
            <CardTitle className="card-title" title='Pizza' />
            <CardActions>
              
            </CardActions>
          </Card>
        </a>
      </div>

      <div>
        <a href="/list/one" className="card-lnk last-card-lnk">
          <Card className="home-card cat-block">
            <CardMedia>
              <img src="/assets/images/block-book.svg" />
            </CardMedia>
            <CardTitle className="card-title" title='Pizza' />
            <CardActions>
              
            </CardActions>
          </Card>
        </a>
      </div>







  </Masonry>
  </div>
);

export default CategoryBlocks;