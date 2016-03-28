
app.service('dataService', ['$http', function ($http) {
    
     var recipeList = {};
     var obj;
     

this.getCategories = function() {
    return $http.get("json/recipes.json").then(function(recipes){
        return recipes.data
    });
}


this.setRecipes = function (recipesArr) {
            if (window.localStorage && recipesArr) {
                localStorage.setItem("recipes", angular.toJson(recipesArr));
            }
            //update the cached version
            recipeList = recipesArr;
        },

        this.getRecipes = function () {
            recipeList = angular.fromJson(localStorage.getItem("recipes"));
            return recipeList ? recipeList : [];
        } 


this.setFavorite = function (recipesArr) {
            if (window.localStorage && recipesArr) {
                localStorage.setItem("favorites", angular.toJson(recipesArr));
            }
           
            recipeList = recipesArr;
        },

        this.getFavorite = function () {
            recipeList = angular.fromJson(localStorage.getItem("favorites"));
            return recipeList ? recipeList : [];
        } 

this.setPlanned = function (recipesArr) {
            if (window.localStorage && recipesArr) {
                localStorage.setItem("planned", angular.toJson(recipesArr));
            }
            
            recipeList = recipesArr;
        },

        this.getPlanned = function () {
            recipeList = angular.fromJson(localStorage.getItem("planned"));
            return recipeList ? recipeList : [];
        } 


this.setShoping = function (recipesArr) {
            if (window.localStorage && recipesArr) {
                localStorage.setItem("shoping", angular.toJson(recipesArr));
            }
            
            recipeList = recipesArr;
        },

        this.getShoping = function () {
            recipeList = angular.fromJson(localStorage.getItem("shoping"));
            return recipeList ? recipeList : [];
        } 

this.dublication = function (current) {
  return obj = angular.merge({}, current)
}


this.newRecipe = function () {
    
      var recipe =  { 
          title: "",
          description: "",
          photoUrl: "",
          ingredients: ["","",""],
          instruction: "",

      }
      return obj = recipe;
}

this.mainObj = function() {

    return obj;
}


}]);





