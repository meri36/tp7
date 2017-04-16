'use strict';

/**
 * @ngdoc function
 * @name tp7sirApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp7sirApp
 */
angular.module('tp7sirApp')
        .controller('MainCtrl', function ($scope, $http, ajout) {


            // récupérer les données via $http
            $http.get("http://localhost:9000/rest/person/").then(function (response) {
                $scope.persons = response.data;
            });

            
        });
 
