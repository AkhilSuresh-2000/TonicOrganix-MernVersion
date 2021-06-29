import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

//importing the screens

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//components
import Navabar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer  from './components/SideDrawer';

function App() {
const [sidetoggle,setSideToggle] = useState(false);

  return (
    <Router>
       <Navabar click={() =>setSideToggle(true)}/>
        <SideDrawer show={sidetoggle}  click={() => setSideToggle(false)} />
        <Backdrop show={sidetoggle}  click={() => setSideToggle(false)} />
        <main>
          <Switch>
            <Route exact path = "/" component={HomeScreen} />
            <Route exact path = "/product/:id" component={ProductScreen} />
            <Route exact path="/cart"  component={CartScreen} />
          </Switch>
        </main>
    </Router>
  );
}

export default App;