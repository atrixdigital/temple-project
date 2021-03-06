/*
Licenced:Atrix Digital Solutions©
Version: 1.0.0
dated: 07/31/16
authorUrl: www.atrixdigital.com 


Project: Japan temple 
Backend: Cloudbased = Firebase. 
Frontend: AngularJS 1 
unitTesting: Karma

*/


    var app = angular.module( 'myApp', [   
      'ngRoute',
      'firebase',
      'ngAnimate',
      'ngCsv',
      'ngSanitize'
      ] );

app.directive('routeLoadingIndicator', function($rootScope) {
  return {
    restrict: 'E',
    template: "<div ng-show='isRouteLoading' class='loading-indicator'>" +
    "<div class='loading-indicator-body'>" +
    "<h3 class='loading-title'>Loading...</h3>" +
    "<div class='spinner'><rotating-plane-spinner></rotating-plane-spinner></div>" +
    "</div>" +
    "</div>",
    replace: true,
    link: function(scope, elem, attrs) {
      scope.isRouteLoading = false;
 
      $rootScope.$on('$routeChangeStart', function() {
        scope.isRouteLoading = true;
      });
      $rootScope.$on('$routeChangeSuccess', function() {
        scope.isRouteLoading = false;
      });
    }
  };
});




