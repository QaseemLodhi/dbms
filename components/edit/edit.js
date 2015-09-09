/**
 * Created by QASEEM WAKEEL on 7/4/2015.
 */
var counter = 1;

var app = angular.module("app.edit", ['ngNewRouter', 'ngMaterial', 'firebase']);

app.controller("EditController", ['$routeParams', '$firebaseObject', '$location', EditController]);

function EditController($routeParams, $firebaseObject, $location) {
    var ref = new Firebase("https://dbms.firebaseio.com//arr");
    this.id = $routeParams.id;
    this.list = {};
    this.list = $firebaseObject(ref.child(this.id));
    var $scope = this;
    this.list.$loaded()
        .then(
        function () {
            $scope.first = $scope.list.first;
            $scope.last = $scope.list.last;
            $scope.phone = $scope.list.phone;
            $scope.email = $scope.list.email;
        });

    $scope.update = function () {
        ref.child(this.id).set({
            first: $scope.first,
            last: $scope.last,
            phone: $scope.phone,
            email: $scope.email
        });
        $location.path('/view');
    }
}
