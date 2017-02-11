//iife construct
(function(angular){
'use strict';


  function KrishnaController($Scope){
    $Scope.user = {
       firstName:'krishna',
       lastName:'linga'
    };
  }

//dependency injection

 KrishnaController.$inject = ['$Scope'];


//calling the module from the main app
angular.module('jayprojectApp.Controllers')
.controller('krishnaController',KrishnaController);


})(window.angular || (window.angular = {}));

