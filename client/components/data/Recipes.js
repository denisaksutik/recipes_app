import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import NavigationBar from '../NavigationBar';

class Recipe extends Component {
  constructor(props) {
   super(props);

   this.state = {
     recipe: [],
     ingridients: []
   };

   this.renderRecipes = this.renderRecipes.bind(this);
   this.renderIngredients = this.renderIngredients.bind(this);
 }

 componentDidMount(){
   axios
     .get('https://s3-us-west-2.amazonaws.com/digicode-interview/Q1.json')
     .then(({ data })=> {
       this.setState(
         { recipe: data.recipes, ingridients: data.IngredientsDetails }
       );
     })
     .catch((err)=> {});
 }

 render() {
   return(
      <div id="top" className="container render">
          <NavigationBar />
          {this.renderRecipes()}
        <div className="link_top"><a className="btn btn-default" href="#top">&uarr; Go top</a></div>
      </div>
   );
 }

 renderRecipes() {
   return _.map(this.state.recipe, recipe => {
     return (
      <div className="container head_title" key={recipe.name}>
      <h2>{recipe.name}</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <h4>Ingredients and amount:</h4>
              {this.renderIngredients(recipe)}
          </div>
          <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12">
              <h4>Steps:</h4>
              {this.renderSteps(recipe)}
          </div>
        </div>
            <h4>Similar Cuisines:</h4>
            <div className="similarCuisines">{this.renderSimilarCuisines(recipe)}</div>
      </div>
     );
   });
 }

 renderIngredients(recipe) {
    return _.map(recipe.Ingredients, ingredient => {
        return (
          <li className="list-group-item" key={ingredient.name}>
              <p><a type="button" className="btn" href={this.state.ingridients[ingredient.name]}>{ingredient.name}</a> -{ingredient.amount}</p>
          </li>
        );
    });
 }

  renderSteps(recipe) {
    return _.map(recipe.steps, steps => {
        return (
          <li className="list-group-item" key={steps}>
              <p>{steps}</p>
          </li>
        );
    });
 }

  renderSimilarCuisines(recipe) {
    return _.map(recipe.SimilarCuisines, SimilarCuisines => {
        return (
          <li className="cusines" key={SimilarCuisines}>
             <p>{SimilarCuisines}</p>
          </li>
        );
    });
 }
}

export default Recipe;
