export default function initialRender() {

    const content = document.getElementById('content');

    // create header section
    const header = document.createElement('div');
    header.setAttribute("id", "header");
    content.appendChild(header);

    const headerTitle = document.createElement('h1');
    headerTitle.setAttribute("id", "header-title");
    headerTitle.textContent = "Gusteau's";
    header.appendChild(headerTitle);

    const headerTabs = document.createElement('div');
    headerTabs.setAttribute("id", "header-tabs");
    header.appendChild(headerTabs);

    const ul = document.createElement('ul');
    ul.setAttribute("id", "tab-list");
    headerTabs.appendChild(ul);
    let tabListItems = ['Home', 'Menu', 'Contact'];
    tabListItems.forEach(item => {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML=li.innerHTML + item;
    });

    // create hero section
    const hero = document.createElement('div');
    hero.setAttribute("id", "hero");
    content.appendChild(hero);

    // create footer section
    const footer = document.createElement('div');
    footer.setAttribute("id", "footer");
    content.appendChild(footer);

    const para = document.createElement('p');
    para.textContent = "Copyright © CGass0 2022";
    footer.appendChild(para);
    
}