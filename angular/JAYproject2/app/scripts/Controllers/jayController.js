//iife construct
(function(angular){
'use strict';


  function JayController($scope){
    $scope.user = {
       firstName:'jay',
       lastName:'linga'
    };
  }

//dependency injection

 JayController.$inject = ['$scope'];


//calling the module from the main app
angular.module('jayproject2App.Controllers').controller('jayController',JayController);

})(window.angular || (window.angular = {}));
