

app.controller('rankingCtrl',  function ($scope,$firebaseArray,$firebaseObject) {



   
	var ref = new Firebase("https://japantemple.firebaseio.com/temples");
    $scope.myData = $firebaseArray(ref);
    $scope.arr = $scope.myData;

   $scope.orderByMe = function(x) {
        $scope.myOrderM = x;
    }   
    $scope.orderByMultiple = function(w,x,y,z) {
        $scope.myOrderM = [w,x,y,z];
    }

$scope.saveJSON = function () {
			$scope.toJSON = '';
			$scope.toJSON = angular.toJson($scope.myData);
			var blob = new Blob([$scope.toJSON], { type:"application/json;charset=utf-8;" });			
			var downloadLink = angular.element('<a></a>');
                        downloadLink.attr('href',window.URL.createObjectURL(blob));
                        downloadLink.attr('download', 'fileName.json');
			downloadLink[0].click();
		};

		

		
});