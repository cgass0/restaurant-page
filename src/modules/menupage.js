export default function renderMenuPage() {

    content.removeAttribute("class")
    content.classList.add('menu');

    // create hero section
    const h1 = document.createElement('h1');
    h1.setAttribute("id", "slogan");
    h1.textContent = "This is the menu";
    hero.appendChild(h1);

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute("id", "menu-container");
    hero.append(menuContainer);

    const menuItemsObjects = [
        {title: "Hambuger", image: "/src/img/hamburger.png", price: "$6.99", id: 1},
        {title: "Hot-Dog", image: "/src/img/hotdog.png", price: "$2.99", id: 2},
        {title: "Poutine", image: "/src/img/poutine.png", price: "$9.99", id: 3},
        {title: "French Fries", image: "/src/img/frenchfries.png", price: "$2.99", id: 4},
        {title: "Hut-Chikunz", image: "/src/img/sandwich.png", price: "$8.99", id: 5},
        {title: "Ratatouille", image: "/src/img/ratatouille.png", price: "$69.69", id: 6}
    ];

    for(let i = 0; i < menuItemsObjects.length; i++) {
        const menuItem = document.createElement('div');
        menuItem.setAttribute("class", "menu-item");
        menuItem.setAttribute("id", i);
        menuItem.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
        menuItem.style.color = "black";
        menuContainer.append(menuItem);

        const itemName = document.createElement('h3');
        const itemImage = document.createElement('img');
        const itemPrice = document.createElement('p');
        itemName.textContent = menuItemsObjects[i].title;
        itemImage.src = menuItemsObjects[i].image;
        itemPrice.textContent = menuItemsObjects[i].price;

        itemImage.style.height = "125px"

        menuItem.append(itemName);
        menuItem.append(itemImage);
        menuItem.append(itemPrice);
    }


    
    
}