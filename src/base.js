const navBar = document.querySelector("#navbar");
    const threshold = navBar.offsetHeight;

    window.addEventListener("scroll", function() {
      const scrollPosition = window.pageYOffset || window.scrollY;

      if (scrollPosition >= threshold) {
        navBar.classList.add("fixed", "top-0", "left-0", "right-0", "z-50");
      } else {
        navBar.classList.remove("fixed", "top-0", "left-0", "right-0", "z-50");
      }
    });