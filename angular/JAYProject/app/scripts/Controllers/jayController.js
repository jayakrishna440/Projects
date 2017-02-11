//iife construct
(function(angular){
'use strict';


  function JayController($Scope){
    $Scope.user = {
       firstName:'jay',
       lastName:'linga'
    };
  }

//dependency injection

 JayController.$inject = ['$Scope'];


//calling the module from the main app
angular.module('jayproject2App.Controllers')
.controller('jayController',JayController);

})(window.angular || (window.angular = {}));
