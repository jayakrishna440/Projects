//iife construct

(function(angular){
 'use strict';
//call back function for the USER factory

  function UserFactory(){

     var self = this;

     self.user = {
        'username':'',
        'password':''
     };

     return self;

  }


  UserFactory.$inject= [];


 angular.module('jayproject3App.services')
 .factory('UserFactory',UserFactory);

})(window.angular || (window.angular = {}));
