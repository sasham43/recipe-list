import './App.css';
import List from './components/List'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Details from './components/Details'
import Create from './components/Create'

function App() {
  return (
    <div className="App">
      {/* <List /> */}
      <Router>
        <Routes>
          <Route exact path="/" >
            <Route index element={<List />}></Route>
            <Route path="/details" element={<Details />}>
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
