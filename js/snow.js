/**
 * Created by fqh on 2016/7/26.
 */
var minSize=5;
var maxSize=50;
var newOn=200;//��λ�Ǻ���˴�Ϊ0.2��
var flakeColor="#c43cc4";
var flake=$("<div></div>").css({"position":"absolute","top":"-50px"}).html("*");
$(function() {
    var documentHeight = $(document).height();
    var documentWidth = $(document).width();

    setInterval(function() {
        var startPositionLeft = Math.random() * documentWidth;
        var startOpacity = 0.9 + Math.random() * 0.1;
        /*͸���� ��͸����Ϊ1ʱ����͸��*/
        var endPositionTop = documentHeight;
        var endPositionLeft = Math.random() * documentWidth;
        var durationFall = 2000 + Math.random() * 3000;
        var sizeFlake=minSize+Math.random()*maxSize;
        flake.clone().appendTo("body").css({
            "left":startPositionLeft,
            "opacity":startOpacity,
            "font-size":sizeFlake,
            "color":flakeColor
        }).animate({
            "top":endPositionTop,
            "left":endPositionLeft,
            "opacity":0.5
        },durationFall,function(){ $(this).remove();});
    }, newOn);
});