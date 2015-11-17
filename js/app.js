/// <reference path='../typings/angularjs/angular.d.ts' />
angular.module('hh',['ngMaterial'])
		  .config(function($mdThemingProvider) {
          $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('orange')
            .warnPalette('red')
            .backgroundPalette('grey');
      })
      .controller('experienceCtrl', function($scope,$timeout) {
              
            this.simulateLoading = function () {
              this.loading = true;
              console.log("Loading is true");
              $timeout(function () {
                console.log("Becoming false");
                this.loading = false;
                console.log("Became false");
              }.bind(this), 5000);
            };
  
            this.loading = false;
            console.log("Loading is false");
            this.simulateLoading();
            console.log(this.simulateLoading);

          
            $scope.myDate = new Date();
         
            $scope.minDate = new Date(
              $scope.myDate.getFullYear(),
              $scope.myDate.getMonth() - 2,
              $scope.myDate.getDate());
         
            $scope.maxDate = new Date(
              $scope.myDate.getFullYear(),
              $scope.myDate.getMonth() + 2,
              $scope.myDate.getDate());
              
              
             $scope.userState = '';
            $scope.hours = ['9am','9:30am','10am','10:30am','11am','11:30am','12pm','12:30pm','1pm','1:30pm','2pm','2:30pm','3pm','3:30pm','4pm','4:30pm','5pm','5:30pm']
              
        });