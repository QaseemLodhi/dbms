/**
 * Created by QASEEM WAKEEL on 7/2/2015.
 */

var app = angular.module("app.main", ['firebase']);

app.controller("MainController", function ($location, $rootScope) {
    var scope = this;
    scope.ref = new Firebase("https://dbms.firebaseio.com/");
    scope.login = function () {
        scope.ref.authWithOAuthPopup("facebook", function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                console.log("Hello");
                $location.path('/home');
                $location.replace();
                $rootScope.$apply();
            }

        });


    };
});