var myApp = angular.module('myApp', ['ui.router'])

// Config route provider
.config(function($stateProvider) {
    $stateProvider
  .state('home', {
    url:'',
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
  })
  .state('projects', {
    url:'/projects',
    templateUrl: 'templates/projects.html',
    controller: 'ProjectsController',
  })
  .state('athletics', {
    url:'/athletics',
    templateUrl: 'templates/athletics.html',
    controller: 'AthleticsController',
  })
})

// Home page controller
.controller('HomeController', function($scope, $http){
  $scope.myName = "Mason Shigenaka";
  $scope.profilePic = "img/headshot.jpg";
  $scope.resume = "files/resume.pdf";
})

// Projects page controller
.controller('ProjectsController', function($scope, $http){
  $http.get('data/projects.json').then(function(response) {
        $scope.data = response.data;
        console.log($scope.data);
    });
})

// Athletics page controller
.controller('AthleticsController', function($scope, $http){
  $http.get('data/athletics.json').then(function(response) {
        $scope.data = response.data;
        console.log($scope.data);
    });
})