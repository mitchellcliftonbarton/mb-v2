var app = angular.module("mb-app", ['ngRoute']);

app.config(function($routeProvider) {

  $routeProvider

    .when('/', {
      templateUrl: 'pages/menu.html'
    })

    .when('/pseudorandom-landscape', {
      templateUrl: 'pages/pseudorandom.html'
    })

    .when('/rising-falling', {
      templateUrl: 'pages/rising-falling.html'
    })

    .when('/controlled-winter-preparation', {
      templateUrl: 'pages/winterprep.html'
    })

    .when('/cycle', {
      templateUrl: 'pages/cycle.html'
    })

    .when('/floral', {
      templateUrl: 'pages/flowers.html'
    })
});