

app.controller('adminCtrl',  function ($scope,$firebaseArray) {
	var ref = new Firebase("https://japantemple.firebaseio.com/temples");
    $scope.myData = $firebaseArray(ref);

	$scope.addData = function() {
    $scope.myData.$add(
    {        name: $scope.newMessageText},
    { description: $scope.newDescriptionText},
    {     imglink: $scope.newImgLink}
     );
  

  }
	
});