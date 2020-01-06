const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
      }
    });
  });
}

navSlide();

wordBank = [
  "star wars",
  "princess leia",
  "luke", "darth",
  "vader",
  ["lord", "tyranus"],
  ["lord", "maul"]
  ["the emperor", "palpatine", "senate"],
  "the galactic senate",
  "ewok",
  "endor",
  "alderaan",
  "death star",
  "jar-jar",
  "naboo",
  "i don't like sand it's coarse, and rough and irritating and it gets everywhere",
  "clone wars"
];
