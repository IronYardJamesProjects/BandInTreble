module.exports = function(app) {
    app.controller('LookingForController', ['$scope', '$http', 'MusicFactory', '$routeParams', '$location', function($scope, $http, MusicFactory, $routeParams, $location) {
      $scope.musicians = MusicFactory.getMusician($routeParams.instrument);

      $scope.bookClick = function() {
        console.log("clicking book");
        $location.path('/booking');
        
      }

    }]);
};
