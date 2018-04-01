angular.module("KNPortfolio").controller("ProjectCtrl",
    function ($scope) {

        $scope.ProjectsArray = []

        Project1 = {
            Name: "Life Reel",
            Link: "https://life-reel.firebaseapp.com",
            GitHub: "https://github.com/krnorris65/front-end-capstone",
            Image: "img/projects/LifeReelApp.png",
            AltText: "Life Reel Frontend Capstone",
            Description: "Web application to track major life events as they happen. Life Reel makes it easy for users to look back and remember the important things that happened throughout the year as well as interact with other users on the application. Created with AngularJS, HTML and CSS, Life Reel is a complete CRUD application that uses Firebase Authentication and Realtime Database."
        }

        Project2 = {
            Name: "PupPals",
            Link: "http://pup-pals.kristen-norris.com",
            GitHub: "https://github.com/krnorris65/pup-pals",
            Image: "img/projects/PupPals.png", 
            AltText: "Pup Pals Backend Capstone",
            Description: "PupPals is a web application that allows users to track information about the houses they encounter while walking their pet. PupPals was built using ASP.NET MVC and connects to a SQLite database. This application utilizes the Google Maps Javascript API, Google Maps Geocoding API and Google Places API Web Service to create a visual representation of the information a user tracks and allows the user to search the map."
        }

        Project3 = {
            Name: "Bangazon API",
            // Link: "https://github.com/Remarkable-Donkeys/bangazon",
            GitHub: "https://github.com/Remarkable-Donkeys/bangazon",
            Image: "img/projects/bangazonAPI.png",
            AltText: "Bangazon API Swagger",
            Description: "An ASP.NET MVC Web API to perform all CRUD operations for Bangazon, Inc., an NSS subsidiary company that employs students for C# project work. This application was created by Sean Williams, Tyler Bowman, Kimberly Bird and myself and is set up to build employees, training programs, customers, products, and other necessary features to the functionality of the company. The primary features that I worked on were Training Programs, Payment Types and implementing CORS."
        }

        Project4 = {
            Name: "Cohort 22 Class Website",
            Link: "https://nss-day-cohort-22.github.io/Class-Website/",
            GitHub: "https://github.com/nss-day-cohort-22/Class-Website",
            Image: "img/projects/classWebsite.png", 
            AltText: "Cohort 22 Class Website",
            Description: "This website was built to feature the students of Nashville Software School Cohort 22. It was built using AngularJS, HTML, CSS and Bootstrap and primary contributors to the site were John Dulaney, Greg Lawrence, Garrett Ward and myself. The primary features that I worked on were collecting/updating student data, styling and collecting tech icons."
        }
        console.log(Project3)
        console.log(Project3.Link)

        $scope.ProjectsArray.push(Project1, Project2, Project3, Project4)

    }
)
