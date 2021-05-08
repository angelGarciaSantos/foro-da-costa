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

    const { user, id, title, content, date } = props.getPostById(GetRouteParams());

  return ( //TODO: detect if the post from the url does not exist, and show an error message.
      <div className="tc pa3 center b--dashed bw1 b--black-30 dim ma4">
        <p className="courier f4 tc">{title}</p>
        <p className="courier f5">{content}</p>
        <p className="courier f6 tc">por {user}, 06/05/2021 </p>
      </div>
  )
}

export default PostDetail