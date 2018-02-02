angular.module("KNPortfolio").controller("TechCtrl",
    function ($scope, $http) {

        $http({
                "url": "/app/Tech/tech.json",
                "method": "GET"
            }).then(response => {
                console.log(response.data.tech)
                // return response.data.tech
                $scope.techArray = response.data.tech
            }

            )

    }
)