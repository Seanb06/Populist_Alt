import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  radioButton: {
    marginBottom: 6,
  },
  TextField: {
    paddingLeft: 50,
  },
  hint: {	
    left: 50	
  },  
};

const ListCreate = () => (
  <div>
    
  
  	<div className="create-header">
  	<div className="body-max">
  		<h2>Kate Miller</h2>
  		<div>
  			<span>10 Lists</span>
  			<span>10 Lists</span>
  			<span>10 Lists</span>
  		</div>
  	</div>
  	</div>

  	<div className="create-body body-max">
  	  <div className="list-max">
  		<div className="list-status"></div>
  		<h3>Make Your List</h3>

  		<div className="create-stack create-topic">
  			<h4>Topic</h4>
  			<div className="left-part">
  			<textarea placeholder="Examples: Bagels, 2016 Beach Reads, Science Fiction Films From the 1970’s"></textarea>
  			</div>
  			<div className="right-part">
  				<div className="">
  					<RadioButtonGroup name="shipSpeed" defaultSelected="not_light">

  					  <RadioButton
				        value="not_light"
				        label="Best"
				        style={styles.radioButton}
				      />
				      <RadioButton
				        value="light"
				        label="Worst"
				        style={styles.radioButton}
				      />
				      
				      
				    </RadioButtonGroup>
				   
  				</div>
  				<div className=""></div>
  			</div>
  		</div>

  		<div className="create-stack create-description">
  			<h4>Description</h4>
  			<textarea placeholder="Example: I’ve tried a ton of bagels in the city but these are the ones that I will wake up early to get.!"></textarea>
  		</div>

  		<div className="create-stack create-location">
  			<h4 className="mini-head">Location</h4>
  			<div className="form-holder">
  				<TextField placeholder="Optional" className="" hintText="Optional" />
  				<a href="#">EDIT</a>
  			</div>
  		</div>

  		<div className="create-stack create-item">
  			<h4 className="mini-head">List Items</h4>
  			<div className="form-holder">
  				<TextField  className="" placeholder="Enter text or Paste in a web address" hintText="Enter text or Paste in a web address"  />
  				<div className="num">01</div>
  				<a href="#" className="subtract">-</a>
  			</div>
  			<div className="form-holder">
  				<TextField  className="" placeholder="Enter text or Paste in a web address"  hintText="Enter text or Paste in a web address" />
  				<div className="num">1</div>
  				<a href="#" className="subtract">-</a>

  			</div>
  			<div className="form-holder">
  				<TextField  className="" placeholder="Enter text or Paste in a web address" hintText="Enter text or Paste in a web address" />
  				<div className="num">88</div>
  				<a href="#" className="subtract">-</a>

  			</div>
  
  		  <button className="add-item-btn" value="test">ADD AN ITEM</button>



          <RadioButtonGroup name="xshipSpeed" defaultSelected="xnot_light">

  					  <RadioButton
				        value="xnot_light"
				        label="This is a public list"
				        style={styles.radioButton}
				      />
				      <RadioButton
				        value="xlight"
				        label="Make this a private list"
				        style={styles.radioButton}
				      />
				      
				      
				    </RadioButtonGroup>

  		</div>

  		<div className="create-stack create-footer">
  			<RaisedButton label="Save" primary={true}  />
  			<RaisedButton label="Cancel"  />
          
  		</div>

  	  </div>
  	</div>


    
  </div>
);

export default ListCreate;