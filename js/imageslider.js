//alert("javascript working");
var currentimage = 1;
var firsttime = true, iterationcount = 1;
var totalimages = 4;
var totalbullet = 4;
var upperbound = 5;
var lowerbound = 1;

/*for setting background*/

/*var main_heading_home_page = document.getElementById("main_heading");
var a = (Math.floor(Math.random() * (upperbound - lowerbound)) + 1);
main_heading_home_page.style.background = "url(\"Images/Backgrounds/1 (" + a + ").jpg\")";
main_heading_home_page.style.backgroundSize = "cover";
main_heading_home_page.style.transition = "background ease-in-out 2s";

a = (Math.floor(Math.random() * (upperbound - lowerbound)) + 1);
setInterval(function () {
    main_heading_home_page.style.background = "url(\"Images/Backgrounds/1 (" + a + ").jpg\")";
    main_heading_home_page.style.backgroundSize = "cover";
    a = (Math.floor(Math.random() * (upperbound - lowerbound)) + 1);
}, 20000);

*/
/*background setting done*/


setInterval(function () {

    if (currentimage == 1) {
        if (firsttime) {
            var imageslider = document.getElementById("homeslider" + currentimage);
            var navbullet = document.getElementById("bullet" + currentimage);
            imageslider.classList.toggle('active');
            navbullet.classList.toggle("active1");
            var imageslidera = document.getElementById("homeslider" + (currentimage + 1));
            var navbulleta = document.getElementById("bullet" + (currentimage + 1));
            imageslidera.classList.toggle('active');
            navbulleta.classList.toggle('active1');
            firsttime = false;
            currentimage++;
        }
        else {
            document.getElementById("homeslider" + totalimages).classList.toggle('active');
            document.getElementById("bullet" + totalbullet).classList.toggle('active1');
            document.getElementById("homeslider1").classList.toggle('active');
            document.getElementById("bullet1").classList.toggle('active1');
        }
        }
        else {
            var imageslider = document.getElementById("homeslider" + currentimage);
            var navbullet = document.getElementById("bullet" + currentimage);
            imageslider.classList.toggle('active');
            navbullet.classList.toggle("active1");
            var imageslidera = document.getElementById("homeslider" + (currentimage - 1));
            var navbulleta = document.getElementById("bullet" + (currentimage - 1));
            imageslidera.classList.toggle('active');
            navbulleta.classList.toggle('active1');
            
        }

        if (currentimage == totalimages) {
            currentimage = 0;
        }

        currentimage++;
        iterationcount++;

}, 5000);

