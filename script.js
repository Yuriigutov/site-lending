document.addEventListener("DOMContentLoaded", function () {
  const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const offsetTop = targetElement.offsetTop;
      const scrollDuration = 800;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });
});
