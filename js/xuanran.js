define(["jquery"],function($){
	$.ajax({
			url:"data.json",
			success:function(data){
				//console.log(data);
				var e=data.content;
				var tit="";
				for(var i in e){
					tit+="<option value='"+i+"'>"+e[i].headline+"</option>"
				}
				$(".xiala").html(tit);
			}
	})
	$(".xiala").on("change",function(){
		var now=$(this).val();
		
		$.ajax({
			url:"data.json",
			success:function(data){
				//console.log(data);
				var n=data.content[now].matter;
				//console.log(n);
				var opt="";
				for(var j in n){
					opt+="<div class='sbtit'><h3 class='sbh3'><img src='img/jia.png'>"+n[j].title+"</h3><ul class='sbitem'><ul>";
					for(var k in n[j].details){
						opt+="<li>"+n[j].details[k]+"</li>";
					}
					opt+="</ul></div>"
								
						
				}
				$(".sbbox").html(opt);
			}
		})
	})
})