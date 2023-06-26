import './bootstrap';

var link = document.getElementById("back-to-top");
var amountScrolled = 250;

window.addEventListener('scroll', function(e) {
    if ( window.pageYOffset > amountScrolled ) {
        link.classList.add('show');
        link.classList.add('up');
    } else {
        link.className = 'back-to-top up font-black text-black';
    }
});

// <!-- Scroll to Top -->
link.addEventListener('click', function(e) {
    e.preventDefault();

    var distance = 0 - window.pageYOffset;
    var increments = distance/(500/16);
    function animateScroll() {
        window.scrollBy(0, increments);
        if (window.pageYOffset <= document.body.offsetTop) {
            clearInterval(runAnimation);
        }
    };
    // Loop the animation function
    var runAnimation = setInterval(animateScroll, 16);
});



let btnCourses = document.querySelector('.btnCourses');
let sectionCourses = document.querySelector('.courses');

let btnNews = document.querySelector('.btnNews-and-Blogs');
let sectionNews = document.querySelector('.news-and-blogs');

let btnContactUs = document.querySelector('.btnContactUs');
let sectionContactUs = document.querySelector('.contactUs');

let btnDownloadApp = document.querySelector('.btnDownloadApp');
let sectionDownloadApp = document.querySelector('.downloadApp');



btnCourses.addEventListener('click', function () {
    sectionCourses.scrollIntoView({behavior: 'smooth'});
});


btnNews.addEventListener('click', function () {
    sectionNews.scrollIntoView({behavior: 'smooth'});
});


btnContactUs.addEventListener('click', function () {
    sectionContactUs.scrollIntoView({behavior: 'smooth'});
});

btnDownloadApp.addEventListener('click', function () {
    sectionDownloadApp.scrollIntoView({behavior: 'smooth'});
});