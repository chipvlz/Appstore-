$(function() {

	function getSummaryData(appId) {
		console.log("appIddfdf : " + appId);
		var url = "../rest/appInfo/getAppSummaryInfo/%7B'APP_ID':'";
		url = url + appId + "'%7D";
		console.log("======url : " + url);
		$.ajax({

			type: "get",
			// async : false, //同步执行
			//url : "../rest/appInfo/getSummaryInfo/%7B'APP_id':'1'",
			url: url,
			contentType: "application/x-www-form-urlencoded",
			dataType: "json", // 返回数据形式为json
			success: function(result) {
				console.log("result : " + result);
				var ss = "transparent url(../rest/appInfo/recordImage?pkVal=" + appId + ") no-repeat center center"
				$('#pic_logo').css("background", ss);
				if(result.resultValue.items[0][0] == "1")
					$("#type").text("IAAS");
				else if(result.resultValue.items[0][0] == "2")
					$("#type").text("PAAS");
				else
					$("#type").text("SAAS");
				$("#autor").text(result.resultValue.items[0][1]);
				$("#is_issue").text(result.resultValue.items[0][2]);
				$("#downnum").text(result.resultValue.items[0][5]);
				$("#dx").text(result.resultValue.items[0][6]);
				$("#app_name").text(result.resultValue.items[0][0]);
				$(".details-btn").hide();
				if(result.resultValue.items[0][4])
					$(".details-val").text(result.resultValue.items[0][4]);
				else
					$(".details-val").text("");

			}
		});

	}
	//分页
	function pager(count) {

		layui.use(['laypage', 'layer'], function() {
			var laypage = layui.laypage,
				layer = layui.layer;
			laypage.render({
				elem: 'down_arrow',
				count: count,
				prev: '<em><</em>',
				next: '<em>></em>',
				jump: function(obj, first) {
					//obj包含了当前分页的所有参数，比如：
					console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
					console.log(obj.limit); //得到每页显示的条数
					obj.count = 100

					//首次不执行
					if(!first) {
						getInitData()
					}
				}
			});

		})
	}
	function getInitData(callback) {
		$.ajax({
			type: "get",
			url: "data.json",
			async: true,
			success: function(data) {
				var dd = "";
				for(var i = 0; i < data.length; i++) {
					var imgSrc = "./\"static/\'images/\"ico/\"" + data[i]["imgSrc"]; //平不出来了。。。。。。
					dd += '<dd><div class="card"><div class="card-pic card-pic-' + (1 + i) + '" style="background-color": "url("' + imgSrc + '")"></div><div class="card-info"><textarea class="card-text">' + data[i]["des"] + '</textarea><button class="card-btn card-btn-evevt">点击审核</button></div></div></dd>'

				}
				$("#app_info dl").html(dd).css({
					"opacity": "0"
				}).animate({
					"opacity": "1"
				}, 300, function() {
					$(this).show()
				});
				callback && callback(data)

			}
		});
	}
	
	/////////////////////////////////////////////
	getInitData(function(data) {
		pager(50)
	})

	

	//点击审核展示详细信息
	$(".site-middle").on('click', '.card-btn-evevt', function(event) {
		event.preventDefault();
		//展示APP详细信息的后台交互
	
		var appId = $(this).attr("data-appid");
		getSummaryData(appId);

	});

})