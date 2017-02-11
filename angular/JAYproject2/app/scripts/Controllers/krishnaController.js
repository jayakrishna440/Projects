//iife construct
(function(angular){
'use strict';


  function KrishnaController($rootScope){
    $rootScope.user = {
       firstName:'',
       lastName:''
    };
  }

//dependency injection
 KrishnaController.$inject = ['$rootScope'];


//calling the module from the main app
angular.module('jayproject2App.Controllers')
.controller('krishnaController',KrishnaController);


})(window.angular || (window.angular = {}));

