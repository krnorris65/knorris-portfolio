angular.module("KNPortfolio").controller("NavCtrl",
    function ($scope, $location) {

        // gives functionality to collapsed menu 
        $(".button-collapse").sideNav();

        $(document).ready(function(){
            $('.parallax').parallax();
          });

    }
)