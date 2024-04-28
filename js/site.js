window.addEventListener("scroll", function () {
  var header = document.querySelector(".header-top");

  header.classList.toggle("py-3", window.scrollY > 120);
  header.classList.toggle("box-shadow-white", window.scrollY > 120);

  if (window.innerWidth >= 500) {
    header.classList.toggle("bg-transparent", window.scrollY <= 120);
    header.classList.toggle("bg-dark", window.scrollY > 120);
  }
});

window.onload = function () {
  window.onscroll();
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    document.getElementById("goToTopBtn").style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const pageContentNavigationClick = (targetId) => {
  const element = document.getElementById(targetId);

  element.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
};

