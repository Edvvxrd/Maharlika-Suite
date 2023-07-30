maharlikaApp.config(function($routeProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    .when('/features', {
        templateUrl: 'pages/login.html',
        controller: 'featuresController'
    })

    .when('/pricing', {
        templateUrl: 'pages/login.html',
        controller: 'pricingController'
    })

    .when('/faq', {
        templateUrl: 'pages/faq.html',
        controller: 'faqController'
    })

    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    })

    .when('/features', {
        templateUrl: 'pages/features.html',
        controller: 'featuresController'
    })

    .when('/gallery', {
        templateUrl: 'pages/gallery.html',
        controller: 'galleryController'
    })

    .when('/booking', {
        templateUrl: 'pages/booking.html',
        controller: 'bookingController'
    })
});