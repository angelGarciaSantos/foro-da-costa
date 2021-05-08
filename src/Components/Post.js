import React, { useState, useEffect } from "react"
//import styles from "./TodoItem.module.css"
import Moment from 'moment';
import tachyons from 'tachyons';

const Post = props => {
  // const [editing, setEditing] = useState(false)

  // const handleEditing = () => {
  //   setEditing(true)
  // }

  // const handleUpdatedDone = event => {
  //   if (event.key === "Enter") {
  //     setEditing(false)
  //   }
  // }

  // const completedStyle = {
  //   fontStyle: "italic",
  //   color: "#595959",
  //   opacity: 0.4,
  //   textDecoration: "line-through",
  // }

  const { user, id, title, content, date } = props.post

  // let viewMode = {}
  // let editMode = {}

  // if (editing) {
  //   viewMode.display = "none"
  // } else {
  //   editMode.display = "none"
  // }

  // useEffect(() => {
  //   return () => {
  //     console.log("Cleaning up...")
  //   }
  // }, [])

  return (
    <li className="tc pa3 center b--dashed bw1 b--black-30 dim mv2" onClick={() => props.openPostDetailProps(id)}>
      <p className="courier f4">{title}</p>
      <p className="courier f5">por {user}, 06/05/2021 </p>
      {/* <Moment format="YYYY/MM/DD">{date}</Moment> */}
    </li>

    // <li className={styles.item}>
    //   <div onDoubleClick={handleEditing} style={viewMode}>
    //     <input
    //       type="checkbox"
    //       className={styles.checkbox}
    //       checked={completed}
    //       onChange={() => props.handleChangeProps(id)}
    //     />
    //     <button onClick={() => props.deleteTodoProps(id)}>
    //     <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
    //     </button>
    //     <span style={completed ? completedStyle : null}>{title}</span>
    //   </div>
    //   <input
    //     type="text"
    //     style={editMode}
    //     className={styles.textInput}
    //     value={title}
    //     onChange={e => {
    //       props.setUpdate(e.target.value, id)
    //     }}
    //     onKeyDown={handleUpdatedDone}
    //   />
    // </li>
  )
}

export default Post