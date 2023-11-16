import "./App.css";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App=()=> {
  const pageSize = 12;

  // apiKey = process.env.REACT_APP_NEWS_API;
  // apiKey = "ac6f545bfaad4dc2ae392385f9e03835"
  const apiKey="4292c2854ff84eb39191d023569c5b46";

  const [progress, setProgress] = useState(0);
  

    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
            color="#f11946"
            progress={progress}
            height={3}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                ></News>
              }
            />
            <Route
              exact
              path="/General"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                ></News>
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                ></News>
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                ></News>
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                ></News>
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                ></News>
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                ></News>
              }
            />
          </Routes>
          
        </Router>
        
      </div>
    );
  
}
export default App;