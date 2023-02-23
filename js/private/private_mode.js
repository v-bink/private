const root = document.documentElement;
const button = document.querySelector('button');
const svgs = document.querySelectorAll('button>svg');
const text = document.querySelector('h1');
button.onclick = () => {
    if (!root.hasAttribute('theme')) { // 检查当前主题
        root.setAttribute('theme', 'dark'); // 向根节点插入theme属性，值为dark
        // 这样页面中颜色就会匹配 :root[theme='dark'] { ... } 这一套
        svgs[0].style.display = 'none';
        svgs[1].style.display = 'block';
        text.innerText = 'Dark Mode';
    } else {
        root.removeAttribute('theme'); // 移除根节点theme属性
        svgs[1].style.display = 'none';
        svgs[0].style.display = 'block';
        text.innerText = 'Light Mode';
    }
};