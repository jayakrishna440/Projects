//iife construct

(function(angular){
'use strict';

  function LoginService(UserFactory,$location){

          var self = this;

        self.krishnalogin = function (){

           if(UserFactory.user.username === 'jaya' && UserFactory.user.password === 'sairam'){
              $location.path('/about');
           }
        };
  }

//dependency injection

LoginService.$inject = ['UserFactory','$location'];


angular.module('jayproject3App.services')
 .service('LoginService', LoginService);

})(window.angular || (window.angular = {}));
