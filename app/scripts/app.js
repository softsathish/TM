'use strict';
angular
    .module('angAppName', [
        'ngAnimate', 'ngResource', 'ngRoute', 'ngSanitize', 'angular-loading-bar', 'ui.bootstrap'
    ])
    .run(function($rootScope) {})
    // Router
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl', controllerAs: 'main' })
        $locationProvider.hashPrefix('');
    });
