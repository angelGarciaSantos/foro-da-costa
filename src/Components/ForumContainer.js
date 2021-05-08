import React, { useState, useEffect } from "react"
import PostsList from "./PostsList"
import { Route, Switch } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './NavbarBoot';
import Logo from '../Assets/Logo.jpg'
import PostDetail from "./PostDetail";
import CreatePost from "./CreatePost";
import { useHistory, useParams } from "react-router-dom";
// import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from "uuid"
import tachyons from 'tachyons';

const ForumContainer = () => {
  const [posts, setPosts] = useState(getInitialPosts())
  const history = useHistory();

  
  function getInitialPosts() {
    // getting stored items
    // const temp = localStorage.getItem("todos")
    // const savedTodos = JSON.parse(temp)
    // return savedTodos || []



    // mockup posts
    let newDate = new Date()
    return [{id: 1, 
        title: "Empieza la temporada de setas.", 
        content: "His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos, ea pri dico munere propriae. Vel ferri facilis ut, qui paulo ridens praesent ad. Possim alterum qui cu. Accusamus consulatu ius te, cu decore soleat appareat usu.",
        user: "Ángel", 
        date: newDate},
        {id: 2, 
        title: "Tremendo tractor teño, entrade a ver fotitos", 
        content: "His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos, ea pri dico munere propriae. Vel ferri facilis ut, qui paulo ridens praesent ad. Possim alterum qui cu. Accusamus consulatu ius te, cu decore soleat appareat usu.",
        user: "Mario", 
        date: newDate},
        {id: 3, 
        title: "You, unha pizza non é cena nin é nada", 
        content: "His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos, ea pri dico munere propriae. Vel ferri facilis ut, qui paulo ridens praesent ad. Possim alterum qui cu. Accusamus consulatu ius te, cu decore soleat appareat usu.",
        user: "Pitiño", 
        date: newDate},
        {id: 4, 
        title: "Informe desde Ukraine", 
        content: "His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos, ea pri dico munere propriae. Vel ferri facilis ut, qui paulo ridens praesent ad. Possim alterum qui cu. Accusamus consulatu ius te, cu decore soleat appareat usu.",
        user: "Juan", 
        date: newDate},
        {id: 5, 
        title: "Tades no asador migus?", 
        content: "His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos, ea pri dico munere propriae. Vel ferri facilis ut, qui paulo ridens praesent ad. Possim alterum qui cu. Accusamus consulatu ius te, cu decore soleat appareat usu.",
        user: "Santi", 
        date: newDate},
        ]
  }

  const openPostDetail = id => {
        history.push(`/post/${id}`);
  }

    const getPostById = id => {
        let value = -1; //TODO: if -1 prepare a not found post page
        posts.map(post => {
            if (post.id == id) {
                value = post;
            }
        });

        return value;
    }

    const createPost = () => {
        history.push(`/new`);

        // console.log('Creating new post...')
        // let newDate = new Date()
        // const newPost = {
        //   id: 6,
        //   title: "New Post",
        //   content: "New Content",
        //   user: "New User",
        //   date: newDate,
        // }
        // setPosts([...posts, newPost])
    }

    const createNewPost = (data) => {
        let newDate = new Date()
        const newPost = {
          id: uuidv4(),
          title: data.title,
          content: data.content,
          user: "Anónimo",
          date: newDate,
        }
        setPosts([...posts, newPost]);
        history.push(`/post/${newPost.id}`);
    }

  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/">     
            <PostsList
                posts={posts}
                openPostDetailProps={openPostDetail}
            />
            
            <div className="tc">
                <a className="courier f6 link dim ba ph3 pv2 mb2 dib mid-gray" onClick={createPost}>Crear nuevo tema</a>
            </div>
        </Route>
        <Route path={"/post/:id"} >     
            <PostDetail
                getPostById={getPostById} 
                //post={getPostById(MyComponent())}              
            />
        </Route>
        <Route path={"/new"} >     
            <CreatePost
                createNewPost={createNewPost}
            
            />
        </Route>
        {/* <Route path="/about">
            <About />
        </Route>
        <Route path="*">
            <NotMatch />
        </Route> */}
    </Switch>  
    </>
  )
}
export default ForumContainer