export default function renderHomePage() {

    content.removeAttribute("class")
    content.classList.add('home');

    // create hero section
    const h1 = document.createElement('h1');
    h1.setAttribute("id", "slogan");
    h1.textContent = "If you are what you eat, then I only want to eat the good stuff.";
    hero.appendChild(h1);

    const img = document.createElement('img');
    img.src = '/src/img/Gusteaus.webp';
    img.setAttribute("alt", "Gusteau's restaurant logo");
    hero.appendChild(img);
    img.style.height = "75%"
    img.style.width = "100%"
}

