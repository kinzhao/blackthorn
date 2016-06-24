'use strict';

angular.module('blackthornApp.auth', [
  'blackthornApp.constants',
  'blackthornApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
