var app = angular.module("TodoList", []);

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/news');

app.controller("MainCtrl", [
'$scope',
function($scope){
  $scope.test = "TodoList HA02";

  $scope.todos = [
      {name: "Wäsche waschen", Date: "2022-05-15" , progress: "30%"},
      {name: 'Hausaufabe beenden', Date: '2022-05-19' , progress: "30%"},
      {name: "Präsentaton vorbereiten", Date: "2022-06-10" , progress: "30%"},
  ];

  $scope.addTodo = function(){
    $scope.todos.push({name: "A new Post", Date: "2024-11-11" , progress:"40%"});
  };

}]);