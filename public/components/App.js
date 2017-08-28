import React, { Component } from 'react'
import Stars from './Stars'; 
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';


class App extends Component {

    render() {
      return (
        <MuiThemeProvider>
        <div className="container">
          <h3> Lets Play </h3>
          <hr/>
          <div className="row">
            <div className="col-md-3"><Stars/></div>
            <div className="col-md-2"><Button/></div>
            <div className="col-md-3"><Answer/></div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-12"><Numbers/></div>
          </div>
        </div>
  
        </MuiThemeProvider> 
      );
   }
}

export default App;