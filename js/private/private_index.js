/* 参数获取 */
    const root = document.documentElement;
    const body = document.body;
    const body_style = document.querySelectorAll('.theme-light')
    const svgs = document.querySelectorAll('.mode>.mode_icon');
    const text = document.querySelector('h1');
    const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
    const menu = body.querySelector(".menu");
    const menuItems = menu.querySelectorAll(".menu__item");
    let activeItem = menu.querySelector(".active");
    const active = document.querySelector('active');
    const Envelope = document.getElementById('Envelope')
/* 方法--事件 */
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
                body.style.backgroundColor = "#ffffff";
                if (index==2) {
                    $('#Envelope_show').css('display','none');
                    $('#Envelope_hide').css('display','block');
                }
                else{
                    $('#Envelope_show').css('display','block');
                    $('#Envelope_hide').css('display','none');
                }
            }
            activeItem = item;
            offsetMenuBorder(activeItem);
        }
        function offsetMenuBorder(element) {
            const offsetActiveItem = element.getBoundingClientRect();
            const left = Math.floor(offsetActiveItem.left - menu.offsetLeft -  offsetActiveItem.width / 2) +  "px";
        }
        offsetMenuBorder(activeItem);
        menuItems.forEach((item, index) => {
            item.addEventListener("click", () => clickItem(item, index));
        })
        window.addEventListener("resize", () => {
            offsetMenuBorder(activeItem);
            menu.style.setProperty("--timeOut", "none");
        });
    /* pc端移动端判断 */
        function judge() {
            let str = (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) ? 'app': 'pc';
            return str;
        }
    /* 计算日期之差 */
        function DateDiff(sDate1="2023-02-24",  sDate2){ 
            var  aDate1, aDate2,  oDate1,  oDate2,  iDays;
            aDate1  =  sDate1.split("-");
            oDate1  =  new  Date(aDate1[1]  +  '/'  +  aDate1[2]  +  '/'  +  aDate1[0]);
            aDate2  =  sDate2.split("-");
            oDate2  =  new  Date(aDate2[1]  +  '/'  +  aDate2[2]  +  '/'  +  aDate2[0]);
            iDays  =  parseInt(Math.abs(oDate1  -  oDate2) / 1000 / 60 / 60 / 24 );
        return  iDays
        }
    /* 时间差结果 */   
        function result() {
            var date = new Date()
            var NowDate=`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')}`
            return DateDiff(undefined,NowDate); 
        }
        var data_time = result()
    /* 判断时间段 */
        function NowTime(startTime, endTime){
            // 获取当前时间
            const date  = new Date()
            // 获取当前时间的年月日
            const dataStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `
        
            // 获取开始时间、结束时间、现在时间的时间戳
            let startDate = new Date(dataStr + startTime).getTime()
            let endDate = new Date(dataStr + endTime).getTime()
            let nowDate = date.getTime()
            console.log('时间')
            const s = startDate > endDate // 判断开始时间否大于结束时间
            if(s) [startDate, endDate] = [endDate, startDate] // 若开始时间否大于结束时间则交换值
            // 判断现在的时间是否在开始时间和结束时间之间，若s为true则结果取反
            if(nowDate > startDate && nowDate < endDate){
                root.removeAttribute('theme');
                text.innerText = 'Light Mode';
                body.style.backgroundColor = "#fff";
                Qmsg.success({
					content:"现在天亮,关闭夜深模式看清屏幕...",
					timeout:3000,
				})
                return s ? false : true //false
            }else{
                root.setAttribute('theme', 'dark');
                text.innerText = 'Dark Mode';
                body.style.backgroundColor = "#1a1a1f";
                Qmsg.success({
					content:"夜深了,开启夜深模式保护眼睛...",
					timeout:3000,
				})
                return s ? true : false//true
            }
        }
        setInterval(NowTime('18:00','7:00'), 1000*60*60);