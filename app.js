var app = angular.module('TodoList', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'TodoList HA02';

  $scope.todos = [
      {name: 'Wäsche waschen', Date: '2022-05-15' , progress: '30%'},
      {name: 'Hausaufabe beenden', Date: '2022-05-19' , progress: 30},
      {name: 'Präsentaton vorbereiten', Date: '2022-06-10' , progress: 30},
  ];
}]);