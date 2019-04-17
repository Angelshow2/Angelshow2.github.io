//函数的自调用---食物
(function () {

    //产生小方块的构造函数
    var elements = [];

    function Food(x, y, width, height, color) {
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "green";
        this.x = x || 0;
        this.y = y || 0;
        this.element = document.createElement("div");
    }

    //初始化小方块的位置
    Food.prototype.init = function (map) {
        //先删除小食物
        remove();

        var div = this.element;
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        div.style.position = "absolute";         //脱离文档流
        //小方块的位置
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        //把小方块加入到map中
        map.appendChild(div);
        //放入数组中
        elements.push(div);
    };

    //私有的函数---用来删除食物的
    function remove() {
        //elements中有这个食物
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];
            //找到这个子元素的父级元素,然后删除这个子元素
            ele.parentNode.removeChild(ele);
            //再次把elements中的这个子元素也要删除
            elements.splice(i, 1);
        }
    }

    window.Food = Food;
}());