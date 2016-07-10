let app = angular.module('BandInTreble', ['ngRoute']);
require('./controllers/homecontroller')(app);
require('./controllers/availablecontroller')(app);
require('./controllers/lookingforcontroller')(app);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/login',
        })
        .when('/login', {
            controller: 'HomeController',
            templateUrl: 'templates/login.html',
        })
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'templates/home.html',
        })
        .when('/available', {
            controller: 'AvailableController',
            templateUrl: 'templates/available.html',
        })
        .when('/lookingfor', {
            controller: 'HomeController',
            templateUrl: 'templates/lookingfor.html',
        });
}]);

//
// THIS IS THE SERVICE BREH BRO
//
app.factory('MusicFactory', ['$http', '$location', function($http, $location) {
    let musicianPeople = [{}];
    let bandmanagerPeople = [];
    let instruments = [];
    return {
        // todo: rename this to be more specific
        postThis: function(name) {
            $http({
                url: '/login',
                method: 'POST',
                data: {
                    name: name,
                    password: "1234",
                    avatar: null,

                },
            }).then(function(results) {
                console.log("posted")
            });
        },
        getMusician: function(musicguy) {
            $http({
                url:'/band-manager',
                method: 'GET',
                 params:{ instruments: musicguy}
            }).then(function(response) {
                let musicians = response.data;
                console.log(musicians)
                musicians.forEach(function(element) {
                    musicianPeople.push({
                      name: element.user.name,
                      hourlyRate: element.hourlyRate,
                      rating: element.rating,
                      email: element.user.email,

                    })

                })
            });
        },
        getBandManager: function() {
            $http({
                url: '/musician',
                method: 'GET',
            }).then(function(response) {
                let bandmanager = response.data
                console.log(bandmanager);
                bandmanager.forEach(function(element) {
                    bandmanagerPeople.push(element.value);
                })
                console.log(bandmanager)

            });

        },


    }; // end return
}]);
