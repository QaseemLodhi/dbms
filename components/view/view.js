/**
 * Created by QASEEM WAKEEL on 7/3/2015.
 */


var app = angular.module("app.view",['ngNewRouter','ngMaterial','firebase']);

app.controller("ViewController",function($firebaseArray, $location){
    var $scope = this;
    var ref = new Firebase("https://dbms.firebaseio.com//arr");
    $scope.list = $firebaseArray(ref);

    $scope.remove = function (index) {
        $scope.list.$remove(index);
        console.log($scope.list)
    };

    $scope.UpdateFirebase = function () {

        $scope.list[indexEdit].First = $scope.first;
        $scope.list[indexEdit].Last  =  $scope.last;
        $scope.list[indexEdit].Phone = $scope.phone;
        $scope.list[indexEdit].Email = $scope.email;
        indexEdit = null;

        $scope.first = null;
        $scope.last  = null;
        $scope.phone = null;
        $scope.email = null;
    };
    $scope.update = function (id) {
         $location.path('/edit/'+id);
        counter = 1;
    };

});