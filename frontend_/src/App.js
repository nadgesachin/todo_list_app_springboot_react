// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import Header from './components/header/Header';
// import About from './components/page/About';
// import Todos from './components/todo/ViewTodos'
// import AddTodo from './components/todo/AddTodo';
// import UpdateTodo from './components/todo/UpdateTodo';
// import Signin from './components/auth/Signin';
// import Signup from './components/auth/Signup';
// import Signout from './components/auth/Signout';
// import Landing from './components/page/Landing';
// import NotFound from './components/page/NotFound';

// import './bootstrap.min.css';
// import './App.css';

// function App () {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     if(sessionStorage.getItem('token') !== null){
//       setIsAuthenticated(true);
//     }
//   }, [])

//   return (
//     <Router>
//     <div className="App">
//       <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
//       <div>
//         <Routes>
//           <Route exact path="/" render={(props) => (<Landing {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />)} />
//           <Route exact path="/signin" render={(props) => (<Signin {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />)} />
//           <Route exact path="/signup" render={(props) => (<Signup {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />)} />
//           <Route exact path="/signout" render={(props) => (<Signout {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />)} />
//           <Route exact path="/todo" render={(props) => (<Todos {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />)} />
//           <Route exact path="/add" render={(props) => (<AddTodo {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />)} />
//           <Route exact path="/update/:id" render={(props) => (<UpdateTodo {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />)} />
//           <Route exact path="/about" component={About} />
//           <Route component={NotFound} />
//         </Routes>
//       </div>
//     </div>
//     </Router>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import About from './components/page/About';
import Todos from './components/todo/ViewTodos';
import AddTodo from './components/todo/AddTodo';
import UpdateTodo from './components/todo/UpdateTodo';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Landing from './components/page/Landing';
import NotFound from './components/page/NotFound';

import './bootstrap.min.css';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('token') !== null) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Header
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Landing
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route
              exact
              path="/signin"
              element={
                <Signin
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <Signup
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route
              exact
              path="/signout"
              element={
                <Signout
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route
              exact
              path="/todo"
              element={
                <Todos
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route
              exact
              path="/add"
              element={
                <AddTodo
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route
              exact
              path="/update/:id"
              element={
                <UpdateTodo
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
