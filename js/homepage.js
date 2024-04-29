particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
        },

        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


const calculateExperience = () => {

    var currentDate = new Date();
    var pastDate = new Date(2010, 8, 11);

    var spentTimeMilliseconds = currentDate - pastDate;
    var spentTimeDays = spentTimeMilliseconds / (1000 * 60 * 60 * 24);
    var spentYear = Math.floor(spentTimeDays / 365.25);

    document.getElementById('totalExperience').innerHTML = spentYear;
};

function calculateTimeDifference(startDate, endDate) {
    
    var startMilliseconds = startDate.getTime();
    var endMilliseconds = endDate.getTime();

    var timeDifferenceMilliseconds = Math.abs(endMilliseconds - startMilliseconds);

    var days = Math.floor(timeDifferenceMilliseconds / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifferenceMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifferenceMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifferenceMilliseconds % (1000 * 60)) / 1000);

    var months = Math.floor(days / 30);
    var years = Math.floor(months / 12);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        months: months,
        years: years
    };
}

function convertMonthToYearAndMonth(month) {
    var year = Math.floor(month / 12);
    var remainingMonths = month % 12;

    return {
        year: year,
        month: remainingMonths
    };
}

const LastJobTimeSpentSetup = () => {
    var startDate = new Date('2023-02-27T10:00:00');
    var endDate = new Date();

    var timeDifference = calculateTimeDifference(startDate,endDate);

    let monthtext = 'Month';
    if(timeDifference.months > 1) monthtext = 'Months'

    document.getElementById('lastJobSpentTime').innerHTML = `${timeDifference.months} ${monthtext}`;

    if(timeDifference.years >= 1){
        var lastJobSpentTime = convertMonthToYearAndMonth(timeDifference.months);
        
        let yearText = 'Year';
        monthtext = 'Month';

        if(lastJobSpentTime.year > 1) yearText = 'Years';
        if(lastJobSpentTime.month > 1) monthtext = 'Months';

        document.getElementById('lastJobSpentTime').innerHTML = `${lastJobSpentTime.year} ${yearText} ${lastJobSpentTime.month} ${monthtext}`;
    }

}

window.onload = function() {
    calculateExperience();
    LastJobTimeSpentSetup();

    if(window.innerWidth < 500){
        document.querySelector('.header-top').classList.remove('bg-transparent');
    }
};
