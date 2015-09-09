/**
 * Created by QASEEM WAKEEL on 7/2/2015.
 */

var app = angular.module("app.add",['ngNewRouter','ngMaterial','firebase']);

app.controller("AddController",function($firebaseArray){
    var $scope = this;
    var ref = new Firebase("https://dbms.firebaseio.com//arr");
    $scope.list = $firebaseArray(ref);

    $scope.add = function (){

            $scope.list.$add({
                first: $scope.first,
                last: $scope.last,
                phone: $scope.phone,
                email: $scope.email

            });

            $scope.first = null;
            $scope.last = null;
            $scope.phone = null;
            $scope.email = null;

    };
});


