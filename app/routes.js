 // Setting up Routes.
    app.config(['$routeProvider', function ($routeProvider) {
      
       $routeProvider.when('/home', {
         templateUrl: 'app/modules/home/home.html',
         controller:  'homeCtrl'
  
       })
       .when('/ranking', {
         templateUrl: 'app/modules/home/ranking.html',
          controller: 'rankingCtrl'
       }).when('/admin', {
         templateUrl: 'app/modules/home/admin.html',
         controller: 'adminCtrl'
       })
       .otherwise({ redirectTo: '/home' });
       // $locationProvider.
    }]);
