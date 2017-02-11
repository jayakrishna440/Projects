//iife construct

(function(angular){
'use strict';
  function AppConfig($routeProvider){
    $routeProvider
      .when('/home',{
        templateUrl:'../templates/home.tpl.html',
        Controller:'HomeController'
      })

      .when('/about',{
        templateUrl:'../templates/about.tpl.html',
        Controller:'jayController'
      })
      .otherwise('/home');
  }

AppConfig.$inject = ['$routeProvider'];

  function AppRun($rootScope){
    $rootScope.user = {
      firstName :'',
      lastName :''
    };
  }
AppRun.$inject = ['$rootScope'];

      angular.module('jayproject2App',
                   ['ngAnimate',
                    'ngAria',
                    'ngCookies',
                    'ngMessages',
                    'ngResource',
                    'ngRoute',
                    'ngSanitize',
                    'ngTouch',
                    'jayproject2App.Controllers'])
      .config(AppConfig)
      .run(AppRun);



//creating a new module for both contollers
angular.module('jayproject2App.Controllers', []);

})(window.angular || (window.angular = {}));
