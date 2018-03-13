(function() {

	///上传部分     ---------------参考========== >>>>>    http://www.layui.com/doc/modules/upload.html
	layui.use('upload', function() {
		var upload = layui.upload;
		var uploadInst = upload.render({
			elem: '#upload_logo',
			auto: false,
			choose: function(obj) {
				var files = obj.pushFile();

				//预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
				obj.preview(function(index, file, result) {
					console.log(index); //得到文件索引
					console.log(file); //得到文件对象
					console.log(result); //得到文件base64编码，比如图片
					$('#upload_logo').css({
						'background-image': "url(" + result + ")",
						"background-size": "cover"
					}).children().css("opacity", "0"); //图片链接（base64）

					//obj.upload(index, file); //对上传失败的单个文件重新上传，一般在某个事件中使用
					//delete files[index]; //删除列表中对应的文件，一般在某个事件中使用
				})
			},
			before: function(obj) {
				//预读本地文件示例，不支持ie8

				obj.preview(function(index, file, result) {

				});
			}

		});

		upload.render({
			elem: '#upload_app',
			url: '/upload/',
			accept: 'file', //普通文件
			auto: false,
			choose: function(obj) {
				var files = obj.pushFile();

				//预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
				obj.preview(function(index, file, result) {
					console.log(index); //得到文件索引
					console.log(file); //得到文件对象
					console.log(result); //得到文件base64编码，比如图片
					$("#upload_app").find("p").text(file.name)

					//obj.upload(index, file); //对上传失败的单个文件重新上传，一般在某个事件中使用
					//delete files[index]; //删除列表中对应的文件，一般在某个事件中使用
				})
			},
			done: function(res) {
				console.log(res)
			}
		});

		//上传图片

		upload.render({
			elem: '#upload_image',
			auto: false,
			multiple: true,
			choose: function(obj) {
				//将每次选择的文件追加到文件队列
				var files = obj.pushFile();

				//预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
				obj.preview(function(index, file, result) {
					console.log(index);
					console.log(file);
					console.log(result);
					$('#upload_image').append('<img src="' + result + '" alt="' + file.name + '" title="' + file.name + '" class="upload-img">')

					if($('#upload_image').children().length > 1) {
						$('#upload_image .iconfont').removeClass("icon-image").addClass("icon-tianjia1")
					}
					//obj.upload(index, file); //对上传失败的单个文件重新上传，一般在某个事件中使用
					//delete files[index]; //删除列表中对应的文件，一般在某个事件中使用
				});
			},
			done: function(res) {
				//上传完毕
			}
		});

	})

})()