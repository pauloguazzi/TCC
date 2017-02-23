var app = angular.module('tcc', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider, $compileProvider) {

   $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|skype|sip):/);

    $routeProvider.when('/land', {
        templateUrl: 'landPage.html',
        controller: 'mainCtn'
    });

    $routeProvider.otherwise({ redirectTo: '/land' });
});

app.controller("mainCtn", function ($scope, $http, $q, $location, $filter, $interval, $timeout) {

    //landPageController
    $scope.tabs = {
        about: true,
        why: false,
        benefits: false
    }

    $scope.changeTabs = function (i) {
        if (i == 0) {
            $scope.tabs.about = true;
            $scope.tabs.why = false;
            $scope.tabs.benefits = false;

        }
        else if (i == 1) {
            $scope.tabs.about = false;
            $scope.tabs.why = true;
            $scope.tabs.benefits = false;
        }
        else {
            $scope.tabs.about = false;
            $scope.tabs.why = false;
            $scope.tabs.benefits = true;
        }
    }
    
})