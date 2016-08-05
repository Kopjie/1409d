define(["jquery"],function(){
	//$(".sbitem").hide()
		$(".sbbox").on("click",".sbh3",function(){
			$(this).next().toggle()
			$(this).parent().siblings().find(".sbitem").hide();
			$(this).toggleClass("yc");
			$(this).parent().siblings().find(".sbh3").removeClass("yc");
			//alert(1);

		})
})