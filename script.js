const items = document.querySelectorAll(".item");
const menus = document.querySelectorAll(".menu");
const overlays = document.querySelectorAll(".overlay");

items.forEach((item, i) = >(
    item.clicked = false;
    item.childNodes[1].clicked = false;
    item.childNodes[3].clicked = false;

    item.addEventlistener("click", () => expand (item, i))


)