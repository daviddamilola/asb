import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
import Divisions from 'Pages/Divisions'
import NavBar from 'Components/Navbar'

function App() {
  return (
    <>
   
    <Router>
    <NavBar />
      <Switch>
        <Route path="/divisions" component ={Divisions} exact/>
        <Route  component ={() => <div style={{width: '14%', height: '100%', margin: '0 aut0' }}>NOT FOUND</div>} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
