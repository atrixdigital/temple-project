


app.controller('homeCtrl',  function ($scope,$firebaseArray,$firebaseAuth) {
  
    var ref = new Firebase("https://japantemple.firebaseio.com/temples");
    $scope.myData = $firebaseArray(ref);
    $scope.a = "moeid";

  
    
});