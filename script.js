(() => {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      const isHidden = mobileNav.getAttribute("aria-hidden") === "true";
      mobileNav.setAttribute("aria-hidden", isHidden ? "false" : "true");
    });

    // Close menu after clicking a link
    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileNav.setAttribute("aria-hidden", "true");
      });
    });
  }
})();
