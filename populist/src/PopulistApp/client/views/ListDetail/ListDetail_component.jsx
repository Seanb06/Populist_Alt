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
      <a href="#" className="likes-corner">
        <img src="/assets/images/favorite-heart-button.svg" className="" role="img" alt="" />
        <div className="">135</div>
      </a>
      <a href="#" className="save-corner">
        <img src="/assets/images/add-icon.svg" className="" role="img" alt="" />
        <div className="">SAVE</div>
      </a>
      <img src="/assets/images/fork-knife.svg" className="img-likes food-likes" role="img" alt="" />
      <div className="num-likes">143 Likes</div>
      <div className="list-head">
        <div className="num-head">The Five Best...</div>
        <h2>Bagels in Park Slope</h2>
        <div className="list-descr">I've tried a ton of bagels in the city but these are the ones that I will wake up early to get. Lorum ipsum ipsum lorem to the blank.
          <author>By Kate Miller</author>
        </div>
        <div className="list-head-social">
          <a href="#" className="social-icon facebook-icon">
            <img src="/assets/images/facebook-logo.svg" className="" role="img" alt="facebook" />
          </a>
          <a href="#" className="social-icon twitter-icon">
            <img src="/assets/images/twitter-logo.svg" className="" role="img" alt="twitter" />
          </a>
          <a href="#" className="social-icon email-icon">
            <img src="/assets/images/email-icon2.svg" className="" role="img" alt="email" />
          </a>
          <a href="#" className="social-icon favorite-icon">
            <img src="/assets/images/favorite-heart-button.svg" className="" role="img" alt="favorite" />
          </a>
          <a href="#" className="social-icon add-icon">
            <img src="/assets/images/add-icon.svg" className="" role="img" alt="add" />
          </a>

        </div>
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
      
      <a href="#" className="sb-list-item">
        <img src="/assets/images/sb-list-img.png" />
        <h5>The 10 Best Books for Summer 2016</h5>
        <div className="likes-mod">like mod</div>
      </a>

      <a  href="#" className="sb-list-item">
        <img src="/assets/images/sb-list-img.png" />
        <h5>The 10 Best Books for Summer 2016</h5>
        <div className="likes-mod">like mod</div>
      </a>

    </div>



    
  </div>
);

export default ListDetail;