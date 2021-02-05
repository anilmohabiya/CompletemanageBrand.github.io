import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Navbar from './Navbar';
import ManageB from './ManageBrand';
import {Switch,Route, Redirect} from 'react-router-dom';

const App =()=>{

return(
<>

<Navbar/>
<Switch>

<Route exact path="/" component={ManageB} />

<Redirect to ="/" />
</Switch>


</>


  );
};
export default App;
