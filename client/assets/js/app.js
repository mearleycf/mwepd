(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

var myApp = angular.module('application');
myApp.controller('ProvidersCtrl', function($scope, $http) {
    $http.get('/providers.json').then(function(res){
      $scope.providers = res.data;
    });
  });


  function run() {
    FastClick.attach(document.body);
  }

})();
