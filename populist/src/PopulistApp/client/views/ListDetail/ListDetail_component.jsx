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
  <div>
    <div>
      {listDetail? <ListContent listDetail={listDetail}/> : "Loading..."}
    </div>
    <Link to={'/'}>Back</Link>
    <br />
  </div>
);

export default ListDetail;