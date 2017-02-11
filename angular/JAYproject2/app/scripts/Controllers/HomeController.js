//IIFE CONSTRUCTION

(function(angular){

'use strict';

  function HomeController($scope,$location){

    $scope.user = {

      'username':'',
      'password':''
    };

    $scope.loginUser = function(){
      if($scope.user.username ==='jay' && $scope.user.password==='kri'){

        $location.path('/about');

      }

    };



  }

  HomeController.$inject=['$scope','$location'];



 angular.module('jayproject2App.Controllers')
 .controller('HomeController',HomeController);

 })(window.angular || (window.angular = {}));
