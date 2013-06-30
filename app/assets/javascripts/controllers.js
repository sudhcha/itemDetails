'use strict';

/** Controllers */
angular.module('itemDetails.controllers', ['itemDetails.services']).
    controller('itemCtrl', function ($scope, $http, itemModel) {
    
        $scope.options = itemModel.getOptions();
        $scope.currentOption = $scope.options[0];
        $scope.details = [];

        /** change current option, get data for table */
        $scope.setCurrentOption = function (option) {
            $scope.currentOption = option;
            $scope.fetchData();
        };
        
        $scope.formatResponse = function (data) {
        	var allItems=[];
        	allItems.length = data.length;
        	var i;
        	for (i = 0; i < allItems.length; i++) {
        		allItems[i] = {
        			name:data[i].name,
        			value:data[i].value
        		};
        	}
        	return allItems;
        };

        $scope.fetchData = function () {
        	
            $http.get('/'+$scope.currentOption.value).then(function(response) {
              $scope.details = $scope.formatResponse(response.data);
		    });
        };

    });