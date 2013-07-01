'use strict';

/** Controllers */
angular.module('itemDetails.controllers', ['itemDetails.services']).
    controller('itemCtrl', function ($scope, $http, itemModel) {
    
    	$scope.details = [];
    	
    	/** change current option, get data for table */
        $scope.setCurrentOption = function (option) {
            $scope.currentOption = option;
            $scope.fetchData();
        };
    
    	$scope.fetchData = function () {
        	
            $http.get('/'+$scope.currentOption.value).then(function(response) {
              $scope.details = response.data;
		    });
        };
    
        $scope.options = itemModel.getOptions();
        $scope.setCurrentOption($scope.options[0]);
    });