module.exports = function(app) {
    app.controller('HomeController',['MusicFactory','$scope','$location',function(MusicFactory,$scope, $location) {
        $scope.loginClick = function() {
          MusicFactory.postThis($scope.username)
            console.log('clicked')
            if ($scope.username != null){
              $location.path('/home');
            } else {
              alert ('Please enter a username');
            }
        }
    $scope.instrument = "";
    $scope.managers = "";

    $scope.bandManagerSelect = function() {
            console.log($scope.instrument)
            // if ($scope.instrument === )
            // $location.path('/available');
            // MusicFactory.getMusician.user();
            $scope.musician = MusicFactory.getMusician();
        }
        $scope.musicianSelect = function() {
            console.log($scope.managers)
            ////need to make sure they can select multiple before they are redirected to the lookingfor page
            // $location.path('/lookingfor');
            // MusicFactory.getBandManager.user();
            let logan = MusicFactory.getBandManager();
            console.log(logan);

        }
    }]);
};
