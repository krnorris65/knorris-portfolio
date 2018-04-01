angular.module("KNPortfolio").controller("ProjectCtrl",
    function ($scope) {

        $scope.Project1 = "Life Reel"
        $scope.Link1 = "https://life-reel.firebaseapp.com"
        $scope.GitHub1 = "https://github.com/krnorris65/front-end-capstone"
        $scope.Image1 = "img/projects/LifeReelApp.png" 
        $scope.AltText1 = "Life Reel Frontend Capstone"
        $scope.Description1 = "Web application to track major life events as they happen. Life Reel makes it easy for users to look back and remember the important things that happened throughout the year as well as interact with other users on the application. Created with AngularJS, HTML and CSS, Life Reel is a complete CRUD application that uses Firebase Authentication and Realtime Database."

        $scope.Project2 = "PupPals"
        $scope.Link2 = "http://pup-pals.kristen-norris.com"
        $scope.GitHub2 = "https://github.com/krnorris65/pup-pals"
        $scope.Image2 = "img/projects/PupPals.png" 
        $scope.AltText2 = "Pup Pals Backend Capstone"
        $scope.Description2 = "PupPals is a web application that allows users to track information about the houses they encounter while walking their pet. PupPals was built using ASP.NET MVC and connects to a SQLite database. This application utilizes the Google Maps Javascript API, Google Maps Geocoding API and Google Places API Web Service to create a visual representation of the information a user tracks and allows the user to search the map."

        $scope.Project4 = "Cohort 22 Class Website"
        $scope.Link4 = "https://nss-day-cohort-22.github.io/Class-Website/"
        $scope.GitHub4 = "https://github.com/nss-day-cohort-22/Class-Website"
        $scope.Image4 = "img/projects/classWebsite.png" 
        $scope.AltText4 = "Cohort 22 Class Website"
        $scope.Description4 = "An ASP.NET MVC Web API to perform all CRUD operations for Bangazon, Inc., an NSS subsidiary company that employs students for C# project work. This application was created by Sean Williams, Tyler Bowman, Kimberly Bird and myself and is set up to build employees, training programs, customers, products, and other necessary features to the functionality of the company. The primary features that I worked on were Training Programs, Payment Types and implementing CORS."


    }
)
