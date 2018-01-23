angular.module("KNPortfolio").controller("NavCtrl",
    function ($scope) {

        // gives functionality to collapsed menu 
        $(".button-collapse").sideNav();

        $(document).ready(function(){
            $('.parallax').parallax();
          });

    }
)