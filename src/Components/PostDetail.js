import React, { useState, useEffect } from "react"
//import styles from "./TodoItem.module.css"
import Moment from 'moment';
import tachyons from 'tachyons';
import { useHistory, useParams } from "react-router-dom";

const PostDetail = props => {
    function GetRouteParams() {
        let { id } = useParams();

        return (id);
    }

    const isUserLogged = () => {
      var item = localStorage.getItem('token');
      return item ? true : false;
   }

    const { user, _id, title, content, date } = props.getPostById(GetRouteParams());

    let fDate = Moment(date).format('DD/MM/YYYY');

  return ( //TODO: detect if the post from the url does not exist, and show an error message.
      <div className="tc pa3 center b--dashed bw1 b--black-30 dim ma4">
        <p className="courier f4 tc">{title}</p>
        <p className="courier f5">{content}</p>
        <p className="courier f6 tc">por {user}, {fDate} </p>
        { isUserLogged() ? <a className="courier f6 link dim ba ph3 pv2 mb2 dib mid-gray" onClick={props.deletePost.bind(this, _id)}>Eliminar</a> : null }
      </div>
  )
}

export default PostDetail