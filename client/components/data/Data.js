import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

class Data extends Component {
  constructor(props) {
   super(props);

   this.state = {
     array: [],
     ingredient: []
   };

   this.renderRecipes = this.renderRecipes.bind(this);
   this.renderIngredients = this.renderIngredients.bind(this);
 }

 componentDidMount(){
   axios
     .get('https://crossorigin.me/https://s3-us-west-2.amazonaws.com/digicode-interview/Q1.json')
     .then(({ data })=> {
       console.log(data);
       this.setState(
         {
          ingredient: data.recipes,
          array: data.recipes[0].Ingredients
          }
       );
     })
     .catch((err)=> {})
 }

 render() {
   return(
     <div>
       <h3>Recipes</h3>
       <div className="list-group">
          {this.renderRecipes()}
          {this.renderIngredients()}
       </div>
     </div>
   );
 }

 renderRecipes() {
   return _.map(this.state.array, index => {
     return (
       <li className="list-group-item" key={index.name}>
           <p>{index.name}</p>
           <p>{index.amount}</p>
       </li>
     );
   });
 }
  
renderIngredients() {
   return _.map(this.state.ingredient, Ingredient => {
     return (
       <div key={Ingredient.name}>
           <p>{Ingredient.name}</p>
       </div>
     );
   });
 }

}

export default Data;
