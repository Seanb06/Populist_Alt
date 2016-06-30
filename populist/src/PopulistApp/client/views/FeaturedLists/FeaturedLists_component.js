import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
var Masonry = require('react-masonry-component');

const FeaturedLists = () => (
  <div className="mase-cont">
    <Masonry
    className={'card-grid'} // default ''
    disableImagesLoaded={false} // default false
    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false 
    >
     <div className="list-pick">
     	<h4>Editors Picks</h4>
     	<ul>
     		<li><a href="#">The 3 Best Coffee shops in San Jose, CA</a></li>
     		<li><a href="#">The 5 Best Pour-overs Spots in Brooklyn, NY</a></li>
     		<li><a href="#">The 8 Best Book  Shops to Work at in San Jose, CA</a></li>
     		<li><a href="#">The 3 Best Coffee shops in San Jose, CA</a></li>
     		<li><a href="#">The 5 Best Pour-overs Spots in Brooklyn, NY</a></li>
     		<li><a href="#">The 8 Best Cafes to Work at in  San Francisco, CA</a></li>
     		<li><a href="#">The 5 Best Pour-overs Spots in Brooklyn, NY</a></li>
     	</ul>

     
     
     
     
     
     
     





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

export default FeaturedLists;