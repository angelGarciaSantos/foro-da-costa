import React, { useState, useEffect, forceUpdate } from "react"
import PostsList from "./PostsList"
import { Route, Switch } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './NavbarBoot';
import Logo from '../Assets/Logo.jpg'
import PostDetail from "./PostDetail";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import LogOut from "./LogOut";
import CreatePost from "./CreatePost";
import { useHistory, useParams } from "react-router-dom";
import { trackPromise } from 'react-promise-tracker';
// import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from "uuid"
import tachyons from 'tachyons';

const ForumContainer = () => {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState({logged: false, name: "Anónimo"})
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
        console.log(user);
        console.log(user.name);
        const newPost = {
          id: uuidv4(),
          title: data.title,
          content: data.content,
          user: user.name,
          date: newDate,
        }
        setPosts([...posts, newPost]);
        console.log('Creating post');
        const token = localStorage.getItem('token');

        if (token) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    'Host': 'api.producthunt.com'
                },
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
        else {
            console.log('No estás autenticado')
        }    

    }

    const deletePost = (id) => {
        console.log(`Deleting post: ${id}`);
        const token = localStorage.getItem('token');

        if (token) {
            fetch(`https://api-rest-example-21.herokuapp.com/api/post/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    'Host': 'api.producthunt.com'
                }
                })
                .then(res => res.text()) // or res.json()
                .then(res => {
                    console.log(res);
                    getPosts();
                    history.push(`/`); 
                })
                .catch(err =>  {
                    console.log(`Error con la autenticación al eliminar post: ${err}`);
                })
            } 
        else {
            console.log('No estás autenticado')
        }    
    }

    const getPosts = () => {
        console.log("Obteniendo info del API");

        trackPromise(
            fetch('https://api-rest-example-21.herokuapp.com/api/post')
        .then(response => response.json())
        .then(data => {
            //setPosts(data.posts);
            console.log(`Posts received: ${data.posts}`);
            setPosts(data.posts);
    
            return data.posts;
        }));
    }
    

    const signUp = (data) => {
        console.log("Sign UP");
        console.log(data);

        const newUser = {
            email: data.email,
            displayName: data.displayName,
            password: data.password,
          }
  
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newUser)
          };
          fetch('https://api-rest-example-21.herokuapp.com/api/signup', requestOptions)
              .then(response => response.json())
              //.then(data => setPostId(data.id));
              .then(data => {
                  console.log(data);
                  console.log(data.token);
                  localStorage.setItem('token', data.token);
                  //getPosts();
                  console.log(newUser.displayName)
                  history.push(`/`);
                  setUser({logged: true, name: newUser.displayName})
                  //window.location.reload();
              });
    }
    
    const signIn = (data) => {
        console.log("Sign In");
        console.log(data);

        const newUser = {
            email: data.email,
            password: data.password,
        }
  
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newUser)
          };
          fetch('https://api-rest-example-21.herokuapp.com/api/signin', requestOptions)
              .then(response => response.json())
              //.then(data => setPostId(data.id));
              .then(data => {
                  console.log(data);
                  //TODO: detectar si viene un "no existe el usuario en este punto, para no hacer nada"
                  console.log(data.token);
                  localStorage.setItem('token', data.token);
                  //getPosts();
                  history.push(`/`);
                  setUser({logged: true, name: data.displayName})
                  //window.location.reload();
              })
    }

    const logOut = () => {
        console.log("Log Out");
        // remove token
        localStorage.removeItem('token');
        
        // remove all
        //localStorage.clear();
        history.push(`/`);
        setUser({logged: false, name: "Anónimo"})
        //window.location.reload();
    }

    const isUserLogged = () => {
        console.log(`Usuario logueado: ${user}`)
        
        return user.logged;  
        
        // var item = localStorage.getItem('token');
        // return item ? true : false;





        // const token = localStorage.getItem('token');

        // if (token) {
        //     const requestOptions = {
        //         method: 'GET',
        //         headers: {
        //           'Accept': 'application/json',
        //           'Content-Type': 'application/json',
        //           'Authorization': 'Bearer ' + token,
        //           'Host': 'api.producthunt.com'
        //         }
        //     };
    
        //     fetch('https://api-rest-example-21.herokuapp.com/api/private', requestOptions)
        //           .then(response => response.json())
        //           //.then(data => setPostId(data.id));
        //           .then(data => {
        //               console.log("Usuario autenticado");
        //               console.log(data);
        //               console.log(token);
        //               return true;
        //           })
        //           .catch(err => {
        //                 console.log('Error comprobando la autenticación')
        //                 return false;
        //           })    
        // }
        // else {
        //     console.log('Usuario no autenticado')
        //     return false;
        
    };

    useEffect(() => {
        getPosts();
    },[]);

  return (
    <>
    <Navbar
        isUserLogged={isUserLogged} 
    />
    <Switch>
        <Route exact path="/">     
            <PostsList
                posts={posts}
                openPostDetailProps={openPostDetail}
            />
            
            { isUserLogged()  ?  <div className="tc"><a className="courier f6 link dim ba ph3 pv2 mb2 dib mid-gray" onClick={createPost}>Crear nuevo tema</a></div> : null }
        </Route>
        <Route path={"/post/:id"} >     
            <PostDetail
                getPostById={getPostById}  
                deletePost={deletePost}  
                isUserLogged={isUserLogged}        
            />
        </Route>
        <Route path={"/new"} >     
            <CreatePost
                createNewPost={createNewPost}
            
            />
        </Route>
        <Route path={"/signin"} >     
            <SignIn
                signIn={signIn}
            
            />
        </Route>
        <Route path={"/signup"} >     
            <SignUp
                signUp={signUp}
            />
        </Route>  
        <Route path={"/logout"} >     
            <LogOut
                logOut={logOut}
                
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