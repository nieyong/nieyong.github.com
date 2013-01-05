$(document).ready(function(){
	
	// 根据h2标签生成右边栏目录
	var html = '<div id="nav"><h2>内容</h2><div id="nav_content"><ul>';
	var flg = false;
	
	$("h2").each(function(){
		flg = true;
		html += '<li><a href="#' + $(this).attr("id") + '">' + $(this).html() + '</a></li>';
	});
	
	html += '</ul></div></div>';

	if(flg){
		$(".container").append(html);
	}
	
	// 出现 go2top 按钮
    $(window).scroll(function () {
        var obj = $('.go2top');
        if (obj.length == 0) return false;
        900 < obj.offset().top ? obj.show() : obj.hide();
    });
	
    // 滑到顶部
    $('.go2top').click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, {
			queue: !1,
			duration: 800,
			easing: "easeInOutExpo",
		});
        
    });
	
});

$(window).load(function(){
	var maxWidth = $('#content').width();
	var ratio;
	
	$('img').each(function(){
		if(maxWidth < $(this).width()){
			ratio = $(this).height()/$(this).width();
			
			$(this).width(maxWidth);
			$(this).height(maxWidth*ratio);
		}
	});
});

(function($){
    // 滑动顶部效果插件
    $.extend(
        $.easing, 
        {
            easeInOutExpo: function(a, c, d, b, e) {
                if (c == 0)
                    return d;
                if (c == e)
                    return d + b;
                if ((c /= e / 2) < 1)
                    return b / 2 * Math.pow(2, 10 * (c - 1)) + d;
                return b / 2 * (-Math.pow(2, -10 * --c) + 2) + d
             }
        }
    );
})(jQuery);
