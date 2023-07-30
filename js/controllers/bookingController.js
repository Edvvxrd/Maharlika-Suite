maharlikaApp.controller('bookingController', ['$scope', '$log', '$http', '$filter', function ($scope, $log, $http, $filter) {
    const navFooter = document.querySelector('#navFooter');
    navFooter.style.display = "none";
    $scope.user = {};
    $scope.success = false;

    window.addEventListener('scroll', function () {
        const navHeader = document.querySelector('#navHeader');
        const navBody = document.querySelector("#navBody")
        const reveal = document.querySelectorAll(".reveal");

        if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
            navHeader.classList.add("hide");
            navBody.classList.add("toggled");
        } else {
            navHeader.classList.remove("hide");
            navBody.classList.remove("toggled");
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

    $scope.rooms = [
        {
            name: "Single Room",
            type: "SINGLE",
            rating: 3,
            review: 51,
            status: ["Popular", "Best Seller"],
            min: 350,
            ave: 750,
            max: 1500
        },
        {
            name: "Family Room",
            type: "FAMILY",
            rating: 4,
            review: 23,
            status: [],
            min: 500,
            ave: 1000,
            max: 2000
        },
        {
            name: "Family Suite Room",
            type: "FAMILY SUITE",
            rating: 5,
            review: 8,
            status: ["Special Offer"],
            min: 1500,
            ave: 2000,
            max: 3000
        }
    ]

    $scope.createReservation = (room, event) => {
        const roomCards = document.querySelectorAll('.room-item');
        const target = event.target.closest('.room-item');
        roomCards.forEach(card => {
            if (target !== card) {
                card.classList.remove("selected");
            }
        });
        target.classList.toggle("selected");
        $scope.user.type = room;
        $('#detailsModal').modal('show');
    }

    $scope.sendRequest = (form) => {
        $scope.user.check_in = $filter('date')($scope.user.check_in, 'yyyy-MM-dd');
        $scope.user.check_out = $filter('date')($scope.user.check_out, 'yyyy-MM-dd');
        $http({
            method: 'POST',
            url: 'js/controllers/http/request.php',
            data: 'data=' + JSON.stringify($scope.user),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success((response) => {
            if(response == 1) {
                $scope.success = true;
            }
        }).error((error) => {
            $log.log(error);
        });
    }

    $('#detailsModal').on('hide.bs.modal', () => {
        $scope.user = {};
        $scope.success = false;
        $('.room-item').removeClass("selected");

    });
}]);