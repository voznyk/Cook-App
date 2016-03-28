var app = angular.module('app', ['ngRoute', 'ngSanitize']);


app.config(['$routeProvider',function($routeProvider){
    
                $routeProvider.when("/ideas", {
                    templateUrl: "pages/ideas.html",
                    controller: "recipesController"
                });

                $routeProvider.when("/myrecipes", {
                    templateUrl: "pages/myrecipes.html",
                    controller: "recipesController"
                });

                $routeProvider.when("/myrecipes/new", {
                    templateUrl: "pages/newrecipe.html",
                    controller: "recipesController"
                });

                $routeProvider.when("/myrecipes/edit", {
                    templateUrl: "pages/newrecipe.html",
                    controller: "recipesController"
                });


                 $routeProvider.when("/ideas/:ideaId", {
                    templateUrl: "pages/view.html",
                    controller: "recipesController"
                });

                $routeProvider.when("/myrecipes/:myRecipeId", {
                    templateUrl: "pages/view.html",
                    controller: "recipesController"
                });

                 $routeProvider.when("/lists", {
                    templateUrl: "pages/lists.html",
                    controller: "recipesController"
                });

                 $routeProvider.when("/lists/:listsId/:id", {
                    templateUrl: "pages/view.html",
                    controller: "recipesController"
                });


    $routeProvider.otherwise({
        redirectTo: '/ideas'
    });
}]);



