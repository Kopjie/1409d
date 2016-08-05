define(["jquery"],function($){
	//$(".centerLeft").css({"opacity": 0});
		var daohang=function(dh,box){
			$(dh).on("click",function(){
			
				if ($(dh).hasClass("yc")) {
					$(box).css({"opacity": 1});
					$(this).removeClass("yc");
				}else{
					$(box).css({"opacity": 0});
					$(this).addClass("yc");
				}
			
			})
		}
		return daohang;
		
})