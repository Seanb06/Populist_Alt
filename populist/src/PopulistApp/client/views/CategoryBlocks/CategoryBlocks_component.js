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
        <Card className="home-card">
          <CardMedia>
            <img src="http://lorempixel.com/600/337/nature/" />
          </CardMedia>
          <CardTitle className="card-title" title='test' />
          <CardActions>
            one
            <FlatButton
              containerElement={<Link to='/list/one' />}
              linkButton={true}
              label='one'/>
            }
          </CardActions>
        </Card>
      </div>

      <div>
        <Card className="home-card">
          <CardMedia>
            <img src="http://lorempixel.com/600/337/nature/" />
          </CardMedia>
          <CardTitle className="card-title" title='test' />
          <CardActions>
            one
            <FlatButton
              containerElement={<Link to='/list/one' />}
              linkButton={true}
              label='one'/>
            }
          </CardActions>
        </Card>
      </div>

      <div>
        <Card className="home-card">
          <CardMedia>
            <img src="http://lorempixel.com/600/337/nature/" />
          </CardMedia>
          <CardTitle className="card-title" title='test' />
          <CardActions>
            one
            <FlatButton
              containerElement={<Link to='/list/one' />}
              linkButton={true}
              label='one'/>
            }
          </CardActions>
        </Card>
      </div>

      <div>
        <Card className="home-card">
          <CardMedia>
            <img src="http://lorempixel.com/600/337/nature/" />
          </CardMedia>
          <CardTitle className="card-title" title='test' />
          <CardActions>
            one
            <FlatButton
              containerElement={<Link to='/list/one' />}
              linkButton={true}
              label='one'/>
            }
          </CardActions>
        </Card>
      </div>



  </Masonry>
  </div>
);

export default CategoryBlocks;