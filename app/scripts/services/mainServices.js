angular.module('angAppName')
    .factory('mainServices', function($http, $q) {
    var url = '';
    return {
        loginSubmit: function(form) {

        },
        getBarsList: function() {
            url = "data/progressBarDetails.json";

            var deferred = $q.defer();
            $http.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function(data){
                deferred.resolve(data.data);
            }),function(data){
                deferred.reject(data);
            };
            return deferred.promise;
        }
    }
});