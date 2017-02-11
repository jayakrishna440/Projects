//iife construct

(function(angular){
'use strict';

  angular
  .module('jayprojectApp',[
        'ngAnimate',
        'ngCookies',
        'ngAnimateMock',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'jayprojectApp.Controllers'

  ]);


//creating a new module for both contollers
angular.module('jayprojectApp.Controllers',[]);

})(window.angular || (window.angular = {}));
