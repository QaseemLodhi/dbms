/**
 * Created by QASEEM WAKEEL on 7/2/2015.
 */

var app = angular.module("app",['ngNewRouter', 'app.add','app.home','app.main','app.view','app.edit','ngMaterial'])

app.controller('AppController',function($router,$location){
    $router.config([
        {path: "/", component:"main"},
        {path: "/home", component:"home"},
        {path: "/add", component:"add"},
        {path: "/view", component:"view"},
        {path: "/edit/:id", component:"edit"}
    ]);



});