//////////////////////////////// Header ////////////////////////////////
////////// Links //////////
let headerLinks = document.querySelectorAll("header .main-nav > li");
let chgclr = document.querySelectorAll("header .main-nav > li > a");
let megaMenu = document.querySelector("header .mega-menu");
let MMControler = document.getElementById("MM-control");
headerLinks.forEach((links) => {
  links.onclick = function () {
    headerLinks.forEach((ele) => {
      ele.classList.remove("active");
      this.classList.add("active");
      chgclr.forEach((a) => {
        if (a.parentElement.classList.contains("active")) {
          a.style.color = "var(--Main-color)";
        } else {
          a.style.color = "black";
        }
      });
      // Mega menu
      if (MMControler.parentElement.classList.contains("active")) {
        megaMenu.style.opacity = "1";
        megaMenu.style.top = "100%";
      } else {
        megaMenu.style.opacity = "0";
        megaMenu.style.top = "calc(100% + 50px)";
      }
    });
  };
});
////////// Mega menu //////////
let linkInMegaMenu = document.querySelectorAll(".mega-menu .links li");
linkInMegaMenu.forEach((el) => {
  el.onclick = function () {
    headerLinks.forEach((headlink) => {
      headlink.classList.remove("active");
    });
  };
});
/////////////////////////////////////////////////////////////////////////
//////////////////////////////// Skilss ////////////////////////////////
let section = document.querySelector(".our-skills");
let skills = document.querySelectorAll(".skills .skill .the-progress span");
let start = false;
/////////////////////////////////////////////////////////////////////////
//////////////////////////////// Events ////////////////////////////////
let timeSection = document.getElementById("events");
let time = document.querySelectorAll(
  ".events .container .info .time .box > div"
);
let seconds = document.querySelector(
  ".events .container .info .time .box .seconds"
);
let minutes = document.querySelector(
  ".events .container .info .time .box .minutes"
);
let hours = document.querySelector(
  ".events .container .info .time .box .hours"
);
let days = document.querySelector(".events .container .info .time .box .days");
let begen = false;
/////////////////////////////////////////////////////////////////////////
//////////////////////////////// status ////////////////////////////////
let statusSection = document.getElementById("status");
let number = document.querySelectorAll(".status .boxs .box .number");
let NBTC = false;
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!start) {
      skills.forEach((skill) => {
        let goal = skill.dataset.goal;
        let numberToStart = 1;
        let counter = setInterval(() => {
          skill.style.width = `${numberToStart++}%`;
          if (skill.style.width == goal) {
            clearInterval(counter);
          }
        }, 4000 / goal);
      });
    }
    start = true;
  }
  if (window.scrollY >= timeSection.offsetTop) {
    if (!begen) {
      time.forEach((el) => {
        let goalToArrive = el.dataset.time;
        let numbers = 1;
        let count = setInterval(() => {
          el.innerHTML = `${++numbers}`;
          if (el.innerHTML == el.dataset.time) {
            clearInterval(count);
          }
        }, 2000 / goalToArrive);
      });
      setInterval(() => {
        if (seconds.innerHTML == 0) {
          seconds.innerHTML = 60;
          minutes.innerHTML -= 1;
        }
        if (minutes.innerHTML == 0) {
          minutes.innerHTML = 60;
          hours.innerHTML -= 1;
        }
        if (hours.innerHTML == 0) {
          hours = 24;
          days.innerHTML -= 1;
        }
        seconds.innerHTML -= 1;
      }, 1000);
      begen = true;
    }
  }
  if (window.scrollY >= statusSection.offsetTop) {
    if (!NBTC) {
      number.forEach((el) => {
        let goal = el.dataset.go;
        let counter = setInterval(() => {
          el.innerHTML = +el.innerHTML + 1;
          if (el.innerHTML == el.dataset.go) {
            clearInterval(counter);
          }
        }, 2000 / goal);
      });
    }
    NBTC = true;
  }
};
///////////////////////////////////////////////////////////////////////
