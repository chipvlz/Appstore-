/*******************************************************************************
 * 通用JS herun
 */

var PubUtil = function() {

};
PubUtil.prototype = {

	//将form表单元素的值序列化成对象
	serializeObject: function(form) {
		var o = {};
		$.each(form.serializeArray(), function(index) {
			if(o[this['name']]) {
				o[this['name']] = o[this['name']] + "," + this['value'];
			} else {
				o[this['name']] = this['value'];
			}
		});
		return o;
	},
	/*获取已选条件，包括电压等级，所有者，厂站类型*/
	getSelectedCondition: function() {
		var selected = {
			"voltageId_arr": [],
			"stationId_arr": []
		}

		$(".selected-con span").each(function() {
			var _type = $(this).attr("data-type");
			var _id = $(this).attr("data-id");
			switch(_type) {
				case 'station':
					selected.stationId_arr.push(_id);
					break; //厂站
				case 'voltage':
					selected.voltageId_arr.push(_id);
					break; //电压类型
				default:
					console.log("参数错误！")
			}
		});
		return selected
	},

	/*获取type值，一个参数则获取每个设备的唯一标识*/
	getType: function() {
		var type;
		$(".site-menu-item li").each(function(index) {
			var _this = $(this);
			if(_this.hasClass("active")) {
				type = _this.attr("data-type") ? _this.attr("data-type") : "3";
			}
		})
		return type;
	},
	loader:function(msg){
		$("#site-table").append('<div class="table-loader"><img src="../static/images/loder.gif" /> <span>'+msg+'</span></div>')
	},
	closeLoader:function(){
		$(".table-loader").remove()
	}

};

var pubUtil = new PubUtil();