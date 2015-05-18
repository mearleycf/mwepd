var myApp = angular.module('application',[]);

App.controller('ProvidersCtrl', function($scope, $http) {
	$http.get('providers.json')
	.then(function(res){
		$scope.providers = res.data;
	});
});