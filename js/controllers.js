       
app.controller('recipesController', ['$scope','$routeParams', 'dataService', 
  function($scope,$routeParams,dataService) {
 
$scope.mainObj = dataService.mainObj();

$scope.arrStorage = dataService.getRecipes();
$scope.arrFavorite = dataService.getFavorite();
$scope.arrPlanned = dataService.getPlanned();
$scope.arrShoping = dataService.getShoping();

$scope.recipeJson = $routeParams.ideaId
$scope.recipeStorage = $routeParams.myRecipeId
$scope.recipeLists = $routeParams.listsId
$scope.id = $routeParams.id


dataService.getCategories().then(function(data){
$scope.recipes = data.recipes;

if ($scope.recipeStorage === undefined) {
  $scope.hide = true;
  $scope.lists = true;
  $scope.recipe = $scope.recipes[$scope.recipeJson]
} else {
  $scope.recipe = $scope.arrStorage[$scope.recipeStorage]
  }
  

  if ($scope.recipeJson === undefined && $scope.recipeStorage === undefined) {
  $scope.lists = false;
     if ($scope.recipeLists === 'favorite') {
      $scope.recipe = $scope.arrFavorite[$scope.id]
     
    } else {
       $scope.recipe = $scope.arrPlanned[$scope.id]
       $scope.recipe = $scope.arrShoping[$scope.id]
   } 
 }    

});


$scope.saveStorage = function () {
  $scope.arrStorage.push($scope.mainObj)
  dataService.setRecipes($scope.arrStorage);
  $scope.isTrue = true;
  $scope.mainObj.title = '';
  $scope.mainObj.description = '';
  $scope.mainObj.photoUrl = '';
  $scope.mainObj.instruction = '';
  $scope.mainObj.ingredients = '';
}

$scope.edit = function () {
  dataService.dublication($scope.recipe);
}

$scope.saveFromGallery = function () {
  $scope.arrStorage.push($scope.recipe)
  dataService.setRecipes($scope.arrStorage)
}

$scope.saveForFavorite = function () {
  $scope.arrFavorite.push($scope.recipe)
  dataService.setFavorite($scope.arrFavorite)
  $scope.isFavorite = true; 
 
}


$scope.saveForPlanned = function () {
  $scope.arrPlanned.push($scope.recipe)
  dataService.setPlanned($scope.arrPlanned)
  $scope.isPlanned = true; 
  
}

$scope.saveForShoping = function () {
  $scope.arrShoping.push($scope.recipe)
  dataService.setShoping($scope.arrShoping)
  $scope.isShoping = true;
  
}

$scope.addRecipe = function() {
  dataService.newRecipe();
}
   
$scope.addIngredient = function () {
  $scope.mainObj.ingredients.push("");
}



}]);









