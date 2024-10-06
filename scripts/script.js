
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
    }

    function LightMode() {
      root.style.setProperty("--background", "#fafafa");
      root.style.setProperty("--hover", "#f5f5f5");
      root.style.setProperty("--color", "black");
      root.style.setProperty("--border", "solid 2px #eee");
      root.style.setProperty("--shadow", "0px 3px 10px gray");
    }

    i.classList.toggle("fa-moon");
    i.classList.toggle("fa-sun");

    i.className.replace("fa-solid ", "") === "fa-sun"
      ? LightMode()
      : DarkMode();
  });

  document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('nav-menu').style.display = 'block';
    document.getElementById('menu-icon').style.display = 'none';
    document.getElementById('close-icon').style.display = 'block';
});

document.getElementById('close-icon').addEventListener('click', function() {
    document.getElementById('nav-menu').style.display = 'none';
    document.getElementById('menu-icon').style.display = 'block';
    document.getElementById('close-icon').style.display = 'none';
});

