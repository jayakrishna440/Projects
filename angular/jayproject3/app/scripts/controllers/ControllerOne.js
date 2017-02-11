(function(angular){
'use strict';
  function ControllerOne(LoginService,UserFactory){

      /*console.log($scope);*/
      /*$scope.user = UserFactory.user;

       //angular event from the index html

       $scope.loginUser = function(){

          LoginService.krishnalogin();

       };*/

       var vm = this;
        vm.user = UserFactory.user;

        vm.loginUser = function(){
          LoginService.krishnalogin();
        };
  }


  ControllerOne.$inject = ['LoginService','UserFactory'];


angular.module('jayproject3App.controllers')
.controller('ControllerOne',ControllerOne);

})(window.angular || (window.angular = {}));
