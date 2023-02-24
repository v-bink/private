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
    const Envelope = document.getElementById('Envelope')
/* 方法--事件 */
    /* 暗黑模式 */
        button.onclick = () => {
            if (!root.hasAttribute('theme')) {
                root.setAttribute('theme', 'dark');
                svgs[0].style.display = 'none';
                svgs[1].style.display = 'block';
                text.innerText = 'Dark Mode';
                body.style.backgroundColor = "#1a1a1f";
            } else {
                root.removeAttribute('theme');
                svgs[1].style.display = 'none';
                svgs[0].style.display = 'block';
                text.innerText = 'Light Mode';
                menuItems.forEach((item, index) => {
                    if (!!item.classList.contains("active")) {
                        body.style.backgroundColor = bgColorsBody[index];
                    }
                })
            }
        };
    /* 菜单切换 */
        function clickItem(item, index) {
            menu.style.removeProperty("--timeOut");
            if (activeItem == item) return;
            if (activeItem) {
                activeItem.classList.remove("active");
            }
            item.classList.add("active");
            if (root.hasAttribute('theme')) {
                root.setAttribute('theme', 'dark');
                svgs[0].style.display = 'none';
                svgs[1].style.display = 'block';
                text.innerText = 'Dark Mode';
                body.style.backgroundColor = "#1a1a1f";
            } else {
                root.removeAttribute('theme');
                svgs[1].style.display = 'none';
                svgs[0].style.display = 'block';
                text.innerText = 'Light Mode';
                body.style.backgroundColor = bgColorsBody[index];
                if (index==3) {
                    $('#Envelope_show').css('display','none');
                    $('#Envelope_hide').css('display','block');
                }
                else if (index ==1) {
                    $('#love_show').css('display','none');
                    $('#love_hide').css('display','block');
                }
                else{
                    $('#Envelope_show').css('display','block');
                    $('#Envelope_hide').css('display','none');
                    $('#love_show').css('display','block');
                    $('#love_hide').css('display','none');
                }
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
    /* pc端移动端判断 */
        function judge() {
            let str = (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) ? 'app': 'pc';
            return str;
        }
    /* 计算日期之差 */
        function DateDiff(sDate1,  sDate2){ 
            var  aDate1, aDate2,  oDate1,  oDate2,  iDays;
            aDate1  =  sDate1.split("-");
            oDate1  =  new  Date(aDate1[1]  +  '/'  +  aDate1[2]  +  '/'  +  aDate1[0]);
            aDate2  =  sDate2.split("-");
            oDate2  =  new  Date(aDate2[1]  +  '/'  +  aDate2[2]  +  '/'  +  aDate2[0]);
            iDays  =  parseInt(Math.abs(oDate1  -  oDate2) / 1000 / 60 / 60 / 24 );
        return  iDays
        }
        var starDate = "2023-02-24";
        var date = new Date()
        var y = date.getFullYear()
        var m = (date.getMonth() + 1).toString().padStart(2,'0');
        var d = date.getDate().toString().padStart(2,'0');
        var NowDate=`${y}-${m}-${d}`
        var n = DateDiff(starDate,NowDate); 
    