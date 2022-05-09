import './App.css';
import { useEffect } from 'react'
import List from './components/List'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Details from './components/Details'
import Create from './components/Create'

function App() {
  useEffect(() => {
    // make sure favorites exists as an array in local storage
    let favorites = window.localStorage.getItem('favorites')
    if(!favorites){
      window.localStorage.setItem('favorites', JSON.stringify([]))
    }
  }, [])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" >
            <Route index element={<List />}></Route>
            <Route path="/details">
              <Route path=":index"  element={<Details />} />
            </Route>
            <Route path="/create" element={<Create />}>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
