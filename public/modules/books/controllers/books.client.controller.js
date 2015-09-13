'use strict';

// Books controller
angular.module('books').controller('BooksController', ['$scope', '$stateParams', '$location', 'Authentication', 'Books', 'Authors', 'Categories',
	function($scope, $stateParams, $location, Authentication, Books, Authors, Categories) {
		$scope.authentication = Authentication;
		$scope.all_authors = Authors.query();
		$scope.all_categories = Categories.query();

		$scope.setCategory = function(current_category, category_id){
			if (current_category) {
				return current_category._id === category_id;
			}
			return false;
			
		};

		// Create new Book
		$scope.create = function() {
			var authors = [];
			var category = null;
			if (this.authors !== null) {
				for (var i = this.authors.length - 1; i >= 0; i--) {
					authors.push(this.authors[i]._id);
				}
			}

			if (this.category !== null) {
				category = this.category._id;
			}
			// Create new Book object
			var book = new Books ({
				name: this.name,
				big_cover: this.big_cover,
				thumbnail: this.thumbnail,
				description: this.description,
				authors: authors,
				category: category,
			});

			// Redirect after save
			book.$save(function(response) {
				$location.path('books/' + response._id);

				// Clear form fields
				$scope.name = '';
				$scope.description = '';
				$scope.big_cover = '';
				$scope.thumbnail = '';
				$scope.authors = '';
				$scope.category = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Book
		$scope.remove = function(book) {
			if ( book ) { 
				book.$remove();

				for (var i in $scope.books) {
					if ($scope.books [i] === book) {
						$scope.books.splice(i, 1);
					}
				}
			} else {
				$scope.book.$remove(function() {
					$location.path('books');
				});
			}
		};

		// Update existing Book
		$scope.update = function() {
			var book = $scope.book;

			book.$update(function() {
				$location.path('books/' + book._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Books
		$scope.find = function() {
			$scope.books = Books.query();
		};

		// Find existing Book
		$scope.findOne = function() {
			$scope.book = Books.get({ 
				bookId: $stateParams.bookId
			});
		};
	}
]);