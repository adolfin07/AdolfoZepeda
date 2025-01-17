
document
  .getElementById("change-theme-website")
  .addEventListener("click", () => {
    const i = document.querySelector("#change-theme-website i");
    const root = document.documentElement;

    function DarkMode() {
      root.style.setProperty("--background", "#141414");
      root.style.setProperty("--hover", "#161616");
      root.style.setProperty("--color", "white");
      root.style.setProperty("--border", "solid 1px rgb(26, 26, 26)");
      root.style.setProperty("--shadow", "0px 3px 10px #272727");
      root.style.setProperty("--box-shadow", "2px 2px 4px 0px #eee");
      bgFixed.style.background = '#141414';
    }

    function LightMode() {
      root.style.setProperty("--background", "#fafafa");
      root.style.setProperty("--hover", "#f5f5f5");
      root.style.setProperty("--color", "black");
      root.style.setProperty("--border", "solid 1px #141414");
      root.style.setProperty("--box-shadow", "2px 2px 4px 0px #141414");
      bgFixed.style.background = ' rgb(196, 196, 196)';

    }

    i.classList.toggle("fa-moon");
    i.classList.toggle("fa-sun");

    i.className.replace("fa-solid ", "") === "fa-sun"
      ? LightMode()
      : DarkMode();
  });

//vertical observer

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//observerleft
const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showLeft');
    } else {
      entry.target.classList.remove('showLeft');
    }
  });
});

const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft');
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

//observerRight
const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showRight');
    } else {
      entry.target.classList.remove('showRight');
    }
  });
});

const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
hiddenElementsRight.forEach((el) => observerRight.observe(el));

//observerUp
const observerUp = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showUp');
    } else {
      entry.target.classList.remove('showUp');
    }
  });
});

const hiddenElementsUp = document.querySelectorAll('.hiddenUp');
hiddenElementsUp.forEach((el) => observerUp.observe(el));


//navbar responsive
var openBtn = document.getElementById('barsBtn');
var closeBtn = document.getElementById('xBtn');
var header = document.getElementById('header');

let menu = document.querySelectorAll("#nav-menu a");

openBtn.addEventListener('click', () => {

  openNav();

});

closeBtn.addEventListener('click', () => {

  closeNav();

});

menu.forEach(menu => {
  menu.addEventListener("click", (e) => {
    closeNav();
  });
});


//closenav func
function closeNav() {
  let viewportWidth = window.innerWidth;
  if (viewportWidth < 780) {
    header.classList.add('closeNav')
    header.classList.remove('openNav');


    openBtn.style.display = "block";
    closeBtn.style.display = "none";
  }

}

//opennav func
function openNav() {
  let viewportWidth = window.innerWidth;

  if (viewportWidth < 780) {
    header.classList.add('openNav');
    header.classList.remove('closeNav');

    openBtn.style.display = "none";
    closeBtn.style.display = "block";
  } else {
    console.log("else");
  }
}
