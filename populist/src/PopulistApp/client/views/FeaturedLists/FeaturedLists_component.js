import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
var Masonry = require('react-masonry-component');

const FeaturedLists = ({lists}) => (
  <div className="mase-cont">

  	<div className="filter-nav body-max filter-desktop">
  		<a href="#">Found</a>
  		<a href="#">Books</a>
  		<a href="#">Electronics</a>
  		<a href="#">Wine</a>
  		<a href="#">Music</a>
  		<a href="#">Apps</a>
  		<a href="#">Design</a>
  	</div>

    <div className="filter-nav body-max filter-mobile">
      mobile dropdown goes here
    </div>



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
);

export default FeaturedLists;