maharlikaApp.controller('homeController', ['$scope', '$log', function ($scope, $log) {
    const hero = document.querySelector("#hero");
    const parallaxOverflow = document.querySelectorAll(".parallax-overflow");
    const gallery = $('.gallery-slider.owl-carousel');
    const navFooter = document.querySelector('#navFooter');
    navFooter.style.display = "block";

    setTimeout(()=>{
        hero.querySelector(".reveal").classList.add("active");
    }, 1000);
    
    new simpleParallax(parallaxOverflow, {
        scale: 1.6,
        overflow: true
    });

    window.addEventListener('scroll', function () {
        const navHeader = document.querySelector('#navHeader');
        const navBody = document.querySelector("#navBody")
        const navFooter = document.querySelector('#navFooter');
        const reveal = document.querySelectorAll(".reveal");

        if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
            navHeader.classList.add("hide");
            navBody.classList.add("toggled");
            navFooter.classList.add("hide");
        } else {
            navHeader.classList.remove("hide");
            navBody.classList.remove("toggled");
            navFooter.classList.remove("hide");
        }
        
        reveal.forEach((item, index) => {
            let windowHeight = window.innerHeight;
            let elementTop = reveal[index].getBoundingClientRect().top;
            let e = 190;
            
            if (elementTop < windowHeight - e) {
                reveal[index].classList.add("active");
            }
            else {
                reveal[index].classList.remove("active");
            }
        });
    });

    gallery.owlCarousel({
        items: 6,
        margin: 10,
        loop: false,
        nav: true,
        navText: ["<i class='bx bxs-chevron-left' ></i>", "<i class='bx bxs-chevron-right'></i>"],
        dots: true,
        lazyLoad: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            }
        }
    });
    gallery.find('.owl-stage-outer').append(gallery.find('.owl-nav'));

    const loadMap = () => {
        var map = L.map('map', {
            zoomControl: false
        }).setView([15.776792457404308, 120.96824345349065], 18);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attributionControl: false,
        }).addTo(map);

        L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }).addTo(map);
    }

    loadMap();
}]);