/* 参数获取 */
const root = document.documentElement;
const body = document.body;
const svgs = document.querySelectorAll('.mode>.mode_icon');
const text = document.querySelector('h1');
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");
const button = document.querySelector('.mode');
const active = document.querySelector('active');
/* 方法--事件 */
button.onclick = () => {
    if (!root.hasAttribute('theme')) { // 检查当前主题
        root.setAttribute('theme', 'dark');
        svgs[0].style.display = 'none';
        svgs[1].style.display = 'block';
        text.innerText = 'Dark Mode';
        body.style.backgroundColor = "#1a1a1f";
    } else {
        root.removeAttribute('theme'); // 移除根节点theme属性
        svgs[1].style.display = 'none';
        svgs[0].style.display = 'block';
        text.innerText = 'Light Mode';
        // body.style.backgroundColor = "#ffb457";
        menuItems.forEach((item, index) => {//标签  index
            if (!!item.classList.contains("active")) {
                body.style.backgroundColor = bgColorsBody[index];
            }
            // item.addEventListener("click", () => clickItem(item, index));
        })
    }
};
function clickItem(item, index) {
    menu.style.removeProperty("--timeOut");
    if (activeItem == item) return;
    if (activeItem) {
        activeItem.classList.remove("active");
    }
    item.classList.add("active");
    // body.style.backgroundColor =bgColorsBody[index]
    if (root.hasAttribute('theme')) { // 检查当前主题
        root.setAttribute('theme', 'dark');
        svgs[0].style.display = 'none';
        svgs[1].style.display = 'block';
        text.innerText = 'Dark Mode';
        body.style.backgroundColor = "#1a1a1f";
    } else {
        root.removeAttribute('theme'); // 移除根节点theme属性
        svgs[1].style.display = 'none';
        svgs[0].style.display = 'block';
        text.innerText = 'Light Mode';
        body.style.backgroundColor = bgColorsBody[index];
    }
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
}
function offsetMenuBorder(element, menuBorder) {
    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}
offsetMenuBorder(activeItem, menuBorder);
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItem(item, index));
})
window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});