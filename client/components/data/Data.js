import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

class Data extends Component {
  constructor(props) {
   super(props);

   this.state = {
     array: []
   };

   this.renderRecipes = this.renderRecipes.bind(this);
 }

 componentDidMount(){
   axios
     .get('https://crossorigin.me/https://s3-us-west-2.amazonaws.com/digicode-interview/Q1.json')
     .then(({ data })=> {
       console.log(data);
       this.setState(
         { array: data.recipes }
       );
     })
     .catch((err)=> {})
 }

 render() {
   return(
     <div>
       <h3>Recipes</h3>
       <ul className="list-group">
          {this.renderRecipes()}
       </ul>
     </div>
   );
 }

 renderRecipes() {
   return _.map(this.state.array, index => {
     return (
       <li className="list-group-item" key={index.name}>
           <p>{index.name}</p>
           <p>bla</p>
       </li>
     );
   });
 }
}

export default Data;
