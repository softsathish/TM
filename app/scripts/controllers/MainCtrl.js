'use strict';

/**
 * @ngdoc function
 * @name asEstoreApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Common application controller
 */
angular.module('angAppName')
    .controller('MainCtrl', function ($scope,mainServices,$filter) {

    	mainServices.getBarsList().then(function(data) {
    		$scope.progressBarList = data;
    		$scope.selectedBar = $scope.progressBarList.bars[0];
    		$scope.valueForCalc = $scope.progressBarList.limit/100;
		});
     	
     	$scope.moveProgress = function(btn){
     		var index = $scope.progressBarList.bars.indexOf($scope.selectedBar);
     		$scope.progressBarList.bars[index].barFill = $scope.progressBarList.bars[index].barFill + (btn * $scope.valueForCalc)
     		if($scope.progressBarList.bars[index].barFill < 0){
     			$scope.progressBarList.bars[index].barFill = 0;
     		}else{
     			$filter('number')($scope.progressBarList.bars[index].barFill, 0)
     		}
     		if($scope.progressBarList.bars[index].barFill > $scope.progressBarList.limit){
     			//$scope.progressBarList.bars[index].barFill = $scope.progressBarList.limit;
     		}
     	}

  });
