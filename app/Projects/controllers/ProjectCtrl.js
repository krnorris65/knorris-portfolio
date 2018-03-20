angular.module("KNPortfolio").controller("ProjectCtrl",
    function ($scope) {

        $scope.Project1 = "Life Reel"
        $scope.Link1 = "https://life-reel.firebaseapp.com"
        $scope.GitHub1 = "https://github.com/krnorris65/front-end-capstone"
        $scope.Image1 = "img/LifeReelApp.png" 
        $scope.AltText1 = "Life Reel Frontend Capstone"
        $scope.Description1 = "Web application to track major life events as they happen. Life Reel makes it easy for users to look back and remember the important things that happened throughout the year as well as interact with other users on the application. Created with AngularJS, HTML and CSS, Life Reel is a complete CRUD application that uses Firebase Authentication and Realtime Database."

        $scope.Project2 = "PupPals"
        $scope.Link2 = "https://github.com/krnorris65/pup-pals"
        $scope.GitHub2 = "https://github.com/krnorris65/pup-pals"
        $scope.Image2 = "img/PupPals.png" 
        $scope.AltText2 = "Pup Pals Backend Capstone"
        $scope.Description2 = "PupPals is a web application that allows users to track information about the houses they encounter while walking their pet. PupPals was built using ASP.NET MVC and connects to a SQLite database for deployment through DigitalOcean. This application also utilizes the Google Maps API to display markers on a map for the houses a user tracks."

        // $scope.Project2 = "Backend Capstone"

    }
)