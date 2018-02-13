angular.module("KNPortfolio").controller("TechCtrl",
    function ($scope, $http) {

        $http({
                "url": "./app/Tech/tech.json",
                "method": "GET"
            }).then(response => {
                $scope.techArray = response.data.tech
            }

            )

    }
)