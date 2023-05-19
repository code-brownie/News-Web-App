import './App.css';
import React, {useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
 const apikey = process.env.REACT_APP_NEWS_API;

const[progress, setProgress]=useState(0);
    return (
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="General" pageSize={6} country='in' category='General' />} />
          <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="Business" pageSize={6} country='in' category='Business' />} />
          <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="Sports" pageSize={6} country='in' category='Sports' />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="Entertainment" pageSize={6} country='in' category='Entertainment' />} />
          <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="Health" pageSize={6} country='in' category='Health' />} />
          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="Science" pageSize={6} country='in' category='Science' />} />
          <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="Technology" pageSize={6} country='in' category='Technology' />} />
        </Routes>
      </Router>
    )
  
}
export default App;