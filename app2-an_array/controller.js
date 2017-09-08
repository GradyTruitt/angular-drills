angular.module('arrayApp').controller('arrayCtrl', function($scope, arraySrv){

    $scope.myData = arraySrv.myData;
});