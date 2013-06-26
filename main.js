'use strict';
var app = angular.module('myApp', []);

function getPersonCtrl($scope) {
	$scope.persons = [];

	$scope.addPerson = function () {
		$scope.persons.push({firstName : $scope.firstName , 
							 lastName : $scope.lastName ,
							 phone : $scope.phone ,
							 email : $scope.email
							});
	}
}	

