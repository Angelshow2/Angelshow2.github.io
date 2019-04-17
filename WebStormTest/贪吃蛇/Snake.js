//函数的自调用---小蛇
(function () {

    //存放小蛇
    var elements = [];

    //小蛇的构造函数
    function Snake(width, height, direction) {
        this.width = width || 20;
        this.height = height || 20;
        //小蛇的身体
        this.body = [
            {x: 3, y: 2, color: "red"},//头
            {x: 2, y: 2, color: "orange"},//身体
            {x: 1, y: 2, color: "orange"}//身体
        ];
        this.direction = direction || "right";//方向先不管
    }

    //为原型添加方法---小蛇的初始化方法
    Snake.prototype.init = function (map) {
        //先删除之前的小蛇
        remove();
        //循环遍历创建div
        for (var i = 0; i < this.body.length; i++) {
            //数组中每个元素都是一个对象
            var obj = this.body[i];
            var div = document.createElement("div");
            map.appendChild(div);
            //设置div的样式
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.position = "absolute";
            //横纵坐标
            div.style.left = obj.x * this.width + "px";
            div.style.top = obj.y * this.height + "px";
            //背景颜色
            div.style.backgroundColor = obj.color;
            //把div加入到elements数组中----目的是为了删除
            elements.push(div);
        }
    };

    //为原型添加方法---小蛇动起来
    Snake.prototype.move = function (food, map) {
        //改变小蛇的身体的坐标
        var i = this.body.length - 1;//2
        for (; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //判断方向---改变小蛇的头的坐标
        switch (this.direction) {
            case "right":
                this.body[0].x += 1;
                break;
            case "left":
                this.body[0].x -= 1;
                break;
            case "top":
                this.body[0].y -= 1;
                break;
            case "bottom":
                this.body[0].y += 1;
                break;
        }

        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;
        if (headX == food.x && headY == food.y) {
            //获取小蛇的最后的尾巴
            var last = this.body[this.body.length - 1];
            //把最后的蛇尾复制一个,重新的加入到小蛇的body中
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });
            //把食物删除,重新初始化食物
            food.init(map);
        }
    };


    //私有的函数---用来删除小蛇的
    function remove() {
        //获取数组
        var i = elements.length - 1;
        for (; i >= 0; i--) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }

    };

    window.Snake = Snake;
}());