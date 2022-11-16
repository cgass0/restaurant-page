export default function renderContactPage() {

    content.removeAttribute("class")
    content.classList.add('contact');

    // create hero section
    const h1 = document.createElement('h1');
    h1.setAttribute("id", "slogan");
    h1.textContent = "Contact us with the following";
    hero.appendChild(h1);

    const contactContainer = document.createElement('div');
    contactContainer.setAttribute("id", "contact-container");
    hero.append(contactContainer);

    const contactItem = document.createElement('div');
    contactItem.setAttribute("class", "contact-item");
    contactContainer.append(contactItem);
    
}