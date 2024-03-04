import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="messenger" element={<Messenger />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<lengthogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// import { ReactDOM } from "react-dom/client";
// import { BrowserRouter, Routes, Route} from "react-router-dom"
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Profile from "./pages/profile/Profile";
// import Register from "./pages/register/Register";
// import Messenger from "./pages/messenger/Messenger";
// // import { useContext } from "react";
// // import { AuthContext } from "./context/AuthContext";

// export defaul function App() {
//   // const { user } = useContext(AuthContext);
//   return (
//     <BrowserRouter>
//      <Routes>
//          <Route path="/" element={<Login />}>
//           <Route index element={<Home/> }/>
//           <Route path="profile" element={<Profile />}>
//           <Route path="/messenger" element={<Messenger />} />
//           <Route path="*" element={<Register />} />
//         </Route>
//      </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);



// import React from "react";
// // import ReactDOM from 'react-dom';
// import {Routes, Route, Router } from 'react-router-dom';
// import Register from "./pages/register/Register";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Profile from "./pages/profile/Profile";
// import Messenger from "./pages/messenger/Messenger";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";

// const  App = () => {
//     const { user } = useContext(AuthContext);
  

//    return (
//      <>
//       <Router>
//         <Routes>
//               <Route path="/" element={<Register />} >
//                 <Route index element={<Login/>} />
//                 <Route path="/home" element={ <Home/>} />
//                 <Route path="/profile" element={<Profile />} />
//                 <Route path="/messenger" element={!user ? <link to="/" /> : <Messenger />} />
//                 <Route path="*" element={<Login/>} />
//               </Route>
//             </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;