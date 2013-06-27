'use strict';
var app = angular.module('myApp', []);

function getPersonCtrl($scope) {
	$scope.persons = [];

	$scope.addPerson = function () {
		$scope.persons.push({pfirstName : $scope.firstName , 
							 plastName : $scope.lastName ,
							 pphone : $scope.phone ,
							 pemail : $scope.email
							});
	};
}	

