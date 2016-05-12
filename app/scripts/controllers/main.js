'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workshopApp
 */
angular.module('workshopApp')
  .controller('MainCtrl', function ($scope) {



    $scope.data = [12000, 13000, 11230, 8900, 3245, -212, 1023, 2930, 1023, 4082, 10932];
    $scope.options = {
        type: 'bar',
        width: 100,
        height: 30
    };

    var arr = [100, 200, 300, 400, 500, 600, 700];
    //$scope.data2 = [100, 200, 300, 400, 500, 600, 700];
    $scope.data2 = arr.reverse();
    $scope.options = {
        type: 'bar',
        width: 100,
        height: 30
    };

  });
