
var bgFixed = document.getElementById('backspan');
var header = document.getElementById('header');

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
      bgFixed.style.background = ' rgb(235, 235, 235)';

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

