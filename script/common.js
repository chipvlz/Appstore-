(function($) { /*方法模块*/
	///左侧菜单滑动
	$(".show-item").mouseover(function() {
		$(this).parent().siblings().find(".hide-item").animate({
			"width": "4px"
		}, 50)
		$(this).siblings(".hide-item").animate({
			"width": "140px"
		}, 1)
	});
	///应用排行手风琴效果
	$(".ranking-t").click(function() {
		$(this).siblings(".site-ran-con").slideToggle(240);
		$(this).parents("li").siblings().find(".site-ran-con").slideUp(240);
	})
	$(".developer-input").click(function() {
		$(this).siblings(".site-drop-down").slideToggle(200);
		$(this).parent().siblings().find(".site-drop-down").slideUp(200);
	})

	//下拉菜单
	$("body").click(function(e) {
		if(e.target.className == "developer-input" || e.target.name == "click") {
			return false
		} else if(e.target.className == "drop-down-item") {
			var el = $(e.target);
			console.log(el.text());
			
			el.parents(".site-drop-down").siblings(".developer-input").find("input").val(el.text())
			$(".site-drop-down").slideUp(200)
		} else {
			$(".site-drop-down").slideUp(200)
			e.stopPropagation();
		}

	});

	$(".form-list-input").click(function() {
		$(this).find(".site-drop-down").slideToggle(200);
		$(this).find(".site-drop-down").parents(".form-list-item").siblings().find(".site-drop-down").slideUp(200);
	})
	$("body").click(function(e) {

		if(e.target.className == "form-list-input" || e.target.name == "click") {
			return false
		} else if(e.target.className == "drop-down-item") {
			var el = $(e.target);
			console.log(el.text())
			el.parents(".form-list-input").find("input").val(el.text())
			$(".site-drop-down").slideUp(200)
		} else {
			$(".site-drop-down").slideUp(200)
			e.stopPropagation();
		}

	});
	
	//点击审核展示详细信息
	
		$(".site-middle").on('click', '.card-btn-evevt', function(event) {
			event.preventDefault();
			
			var site_details=$("#site_details");
			 setTimeout(function(){
			 	site_details.css("opacity",0).show().animate({"marginLeft":"-550px","opacity":"1"},300)
		$("#select_wrapper,#ranking,.site-middle").animate({"opacity":"0"},300,function(){$(this).hide()})	
			 },0)
		
	
		
	})
		
		$("#site_details").on('click',".delete-icon",function(){

			$("#site_details").show().animate({"marginLeft":"-285px","opacity":"0"},300,function(){$(this).hide()});
			$("#select_wrapper,#ranking,.site-middle").show().animate({"opacity":"1"},300,function(){$(this).show()})	
        
		});
	
	  $("#textarea").click(function(){
	  	$(this).siblings("i,p").hide()
	 
	  }).blur(function(){
	  	 	if($(this).val().length>0){
	  		$(this).siblings("i,p").hide()
	  	} else{
	  		$(this).siblings("i,p").show()
	  		
	  	}
	  })	

})(jQuery)
