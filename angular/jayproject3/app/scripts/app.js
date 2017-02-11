(function(angular){

'use strict';
function AppConfig($routeProvider){
 $routeProvider
 .when('/home',{
   templateUrl:'../templates/sample.html',
   controller:'ControllerOne as CtrlOne'
 })
 .when('/about',{
  templateUrl:'../templates/about.html',
  controller:'ControllerTwo'
 });




}

AppConfig.$inject = ['$routeProvider'];

/**
 * @ngdoc overview
 * @name krishnaprojectApp
 * @description
 * # krishnaprojectApp
 *
 * Main module of the application.
 */
angular
  .module('jayproject3App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'jayproject3App.controllers',
    'jayproject3App.services'
  ])
  .config(AppConfig);


 angular.module('jayproject3App.controllers',[]);

 angular.module('jayproject3App.services',[]);

 }) (window.angular || (window.angular = {}));
