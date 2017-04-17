
var app = angular.module('popover', ['ngAnimate', 'ui.bootstrap']);
app.controller('popoverCtl', function ($scope) {
      $scope.myData = {
        firstname: 'John',
        lastname: 'Doe',
        age : 100,
        employer: 'FBI'
      };

      $scope.popover = {
         close: function() {
           document.getElementById('popoverButton').click();
         }
      }; 

      $scope.doSubmit=function() {
    	  alert("Do submitting" + JSON.stringify($scope.myData) + JSON.stringify($scope.popover));
      }; 

    });