import React from 'react';
import { Link } from 'react-router';

const ListContent = ({listDetail}) => (
  <div>
    List Detail
    <h3>{listDetail.title}</h3>
    <p>
      {listDetail.content}
    </p>
  </div>
);

let ListDetail = ({listDetail, listId}) => (
  <div className="list-detail-container body-max clearfix">
    <div className="list-detail-cont">
      <div className="likes-corner"></div>
      <div className="save-corner"></div>

      <div className="num-likes">143 Likes</div>
      <div className="list-head">
        <div className="num-head">The Five Best...</div>
        <h2>Bagels in Park Slope</h2>
        <div className="list-descr">I've tried a ton of bagels in the city but these are the ones that I will wake up early to get. Lorum ipsum ipsum lorem to the blank.
          <author>By Kate Miller</author>
        </div>
        <div className="list-head-social"></div>
      </div>
           
      <div className="list-item">
        <div className="thumb">
          <img src="http://lorempixel.com/600/337/nature/" />
        </div>
        <h3><span>1</span> Absolute Bagel</h3>
        <p>The line gets really long, but it’s worth the wait! Get the everything bagel with lox spread and onion! The line gets really long, but it’s worth the wait! Get the everything bagel with lox.</p>
      </div>

      <div className="list-item">
        <div className="thumb">
          <img src="http://lorempixel.com/600/337/nature/" />
        </div>
        <h3><span>1</span> Absolute Bagel</h3>
        <p>The line gets really long, but it’s worth the wait! Get the everything bagel with lox spread and onion! The line gets really long, but it’s worth the wait! Get the everything bagel with lox.</p>
      </div>
      
      



    
    {/*
        {listDetail? <ListContent listDetail={listDetail}/> : "Loading..."}
    */}
 



    </div>
    <div className="list-detail-sidebar">
      <h4 className="side-head-best">Best of the Best Lists</h4>
      lists go here
    </div>



    
  </div>
);

export default ListDetail;