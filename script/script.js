

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

  if (viewportWidth < 1024) {
    header.classList.add('openNav');
    header.classList.remove('closeNav');

    openBtn.style.display = "none";
    closeBtn.style.display = "block";
  } else {
    console.log("else");
  }
}
