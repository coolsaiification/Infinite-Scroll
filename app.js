var app= angular.module('myApp', [ 'infinite-scroll' ]);

app.controller('Ctrl', function($scope, $http){

  $scope.names=[];

  $scope.getMoreData = function () {
    $http({ method: 'GET', url: 'names.json' }).then(function(response){
        $scope.names = response.data.slice(0, $scope.names.length + 30);
      }), function(response){
        console.log("Error getting data");
      };
  }
});
