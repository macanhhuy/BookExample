'use strict';


angular.module('core').controller('HomeController',
	function($scope, $http, $rootScope, Authentication, $stateParams, $location, $modal, $log, Books) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.all_books = Books.query();

		$scope.searchBook = function(){
			$scope.all_books = [];
			if ($scope.keyword) {
				$http.post('/search?keyword=' + $scope.keyword, {}).
			  then(function(response) {
			    $scope.all_books = response.data;
			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
			}
			
		};

	}
);
