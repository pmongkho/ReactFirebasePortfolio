import "./App.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Feed from "./Feed";
import { useState } from "react";
import AboutMe from "./AboutMe";
import BlogPost from "./BlogPost";
import BlogPost2 from './BlogPost2'


function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app__body">
              <Routes>
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/blog" element={<BlogPost />} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
