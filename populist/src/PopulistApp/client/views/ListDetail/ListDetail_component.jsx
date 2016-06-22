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
    <div className="list-detail-cont">content
      <div>
        {listDetail? <ListContent listDetail={listDetail}/> : "Loading..."}
      </div>
      <Link to={'/'}>Back</Link>
      <br />
    </div>
    <div className="list-detail-sidebar">sidebar</div>



    
  </div>
);

export default ListDetail;