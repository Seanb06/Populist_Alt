import React from 'react'

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
  				<textarea />
  			</div>
  			<div className="right-part">xxx</div>
  		</div>

  		<div className="create-stack create-description">
  			<h4>Description</h4>
  			<textarea />
  		</div>

  		<div className="create-stack create-description">
  			<h4 className="mini-head">Location</h4>
  			xxx
  		</div>

  		<div className="create-stack create-description">
  			<h4 className="mini-head">List Items</h4>
  			xxx
  		</div>

  	  </div>
  	</div>


    
  </div>
);

export default ListCreate;