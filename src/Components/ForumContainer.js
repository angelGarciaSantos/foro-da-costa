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
  const [posts, setPosts] = useState([])
  const history = useHistory();

  
   function getInitialPosts() {
//     // getting stored items
//     // const temp = localStorage.getItem("todos")
//     // const savedTodos = JSON.parse(temp)
//     // return savedTodos || []

//     // console.log("Obteniendo info del API");
//     // fetch('https://api-rest-example-21.herokuapp.com/api/post')
//     // .then(response => response.json())
//     // .then(data => {

//     //     console.log("PROBANDO");
//     //     //setPosts(data.posts);
//     //     setPosts(data.posts);

//     //     return data.posts;
//     });
    //mockup posts
    // let newDate = new Date()
    // return [{id: 1, 
    //     title: "Empieza la temporada de setas.", 
    //     content: "His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos, ea pri dico munere propriae. Vel ferri facilis ut, qui paulo ridens praesent ad. Possim alterum qui cu. Accusamus consulatu ius te, cu decore soleat appareat usu.",
    //     user: "Ángel", 
    //     date: newDate},
    //     {id: 2, 
    //     title: "Tremendo tractor teño, entrade a ver fotitos", 
    //     content: "His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos, ea pri dico munere propriae. Vel ferri facilis ut, qui paulo ridens praesent ad. Possim alterum qui cu. Accusamus consulatu ius te, cu decore soleat appareat usu.",
    //     user: "Mario", 
    //     date: newDate},
    //     {id: 3, 
    //     title: "You, unha pizza non é cena nin é nada", 
    //     content: "His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos, ea pri dico munere propriae. Vel ferri facilis ut, qui paulo ridens praesent ad. Possim alterum qui cu. Accusamus consulatu ius te, cu decore soleat appareat usu.",
    //     user: "Pitiño", 
    //     date: newDate},
    //     {id: 4, 
    //     title: "Informe desde Ukraine", 
    //     content: "His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos, ea pri dico munere propriae. Vel ferri facilis ut, qui paulo ridens praesent ad. Possim alterum qui cu. Accusamus consulatu ius te, cu decore soleat appareat usu.",
    //     user: "Juan", 
    //     date: newDate},
    //     {id: 5, 
    //     title: "Tades no asador migus?", 
    //     content: "His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos, ea pri dico munere propriae. Vel ferri facilis ut, qui paulo ridens praesent ad. Possim alterum qui cu. Accusamus consulatu ius te, cu decore soleat appareat usu.",
    //     user: "Santi", 
    //     date: newDate},
    //     ]
  }

    const openPostDetail = id => {
        history.push(`/post/${id}`);
    }

    const getPostById = id => {
        let value = -1; //TODO: if -1 prepare a not found post page
        posts.map(post => {
            if (post._id == id) {
                value = post;
            }
        });

        return value;
    }

    const createPost = () => {
        history.push(`/new`);
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


        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        };
        fetch('https://api-rest-example-21.herokuapp.com/api/post', requestOptions)
            .then(response => response.json())
            //.then(data => setPostId(data.id));
            .then(data => {
                getPosts();
                history.push(`/`);
            });

    }

    const deletePost = (id) => {
        console.log(`Deleting post: ${id}`);
        fetch(`https://api-rest-example-21.herokuapp.com/api/post/${id}`, {
            method: 'DELETE',
            })
            .then(res => res.text()) // or res.json()
            .then(res => {
                console.log(res);
                getPosts();
                history.push(`/`); 
            })
    }

    const getPosts = () => {
        console.log("Obteniendo info del API");
        fetch('https://api-rest-example-21.herokuapp.com/api/post')
        .then(response => response.json())
        .then(data => {
            //setPosts(data.posts);
            console.log(`Posts received: ${data.posts}`);
            setPosts(data.posts);
    
            return data.posts;
        });
    }

    useEffect(() => {
        getPosts();
    },[]);

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
                deletePost={deletePost}          
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