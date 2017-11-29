function btn_move(el, mouseLeft, mouseTop) {
    var leftRnd = (Math.random() -0.5)*20;
    var topRnd = (Math.random() -0.5)*20

    // 当前位置+/-(随机偏移量绝对值+100px)
    var btnLeft = mouseLeft + (leftRnd>0?100:-100) + leftRnd;
    var btnTop = mouseTop + (topRnd>0?30:-30) + topRnd;

    // window.innerHeight - 浏览器窗口的内部高度
    // 将button限制在有限活动范围内
    // left: 100px~(window.innerWidth-100)px
    // top: 100px~(window.innerHeight-100)px
    btnLeft = btnLeft < 100?( btnLeft + window.innerWidth-200):( btnLeft > window.innerWidth-100? btnLeft-window.innerWidth + 200: btnLeft);
    btnTop = btnTop < 100?( btnTop + window.innerHeight-200):( btnTop > window.innerHeight-100? btnTop-window.innerHeight + 200: btnTop);

    // document.getElementById("id").style.property="值"
    el.style.position = 'fixed';
    el.style.left = btnLeft +'px';
    el.style.top = btnTop +'px';

}

function over_btn(e) {
    // 在做事件处理时候区分IE和其他浏览器事件对象

    // 浏览器中的事件都是以对象的形式存在的，IE浏览器与标准DOM浏览器之间在获取事件对象上不同。
    // 在IE浏览器中事件对象仅是window对象的一个属性event，那么就可以直接在函数中通过window.event访问;
    // 而标准的DOM浏览器中规定event对象必须作为一个参数传给事件处理函数
    // 利用if语句判断，如果window.event存在，则!e为true;
    // 反之，在标准DOM浏览器中，因为window.event是不存在的，我们就可以直接使用e,它会直接无视掉这句判断
    if(!e){
        e = window.event;
    }
    // this指的是,调用函数的那个对象
    btn_move(this, e.clientX, e.clientY);
}

document.getElementById("su").onmouseover = over_btn;