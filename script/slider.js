(function($){

  var xSlider = function(el, userConfig) {

    var _this = this
    this.el = el

    // 参数配置
    this.userConfig = userConfig
    this.config = {
      w: this.el.width(),
      current: 0,
      speed: 500,
      intervalTime: 5000
    }
    if(userConfig != null) {
      $.extend(this.config,this.userConfig);
    }

    // 保存查找dom元素
    var slider_img = this.el.children('.slider-img')
   
    var slider_img_ul = slider_img.children('.slider-img-ul')
    var slider_img_ul_li = slider_img_ul.children('dl')
     slider_img_ul.width((slider_img_ul_li.length*120)+"%") 
    var len=slider_img_ul_li.length;
    var slider_img_ul_li = slider_img_ul.children('dl').css("width",$(".slider").width())
    // 初始化左右按钮
//  this.el.append('<a href="javascript:" class="slider-btn slider-btn-left">&lt;</a>')
//  this.el.append('<a href="javascript:" class="slider-btn slider-btn-right">&gt;</a>')
  

    // 初始化圆点
    this.el.append('<div class="down_arrow clearfix"><a href="javascript:" class="slider-btn slider-btn-left iconfont icon-xiangzuo  ui-button ui-button--default"></a><div class="slider-dot"><ul class="clearfix"></ul></div><a href="javascript:" class="slider-btn slider-btn-right  iconfont icon-xiangzuo-copy ui-button ui-button--default"> </a></div>')
    var slider_btn_left = this.el.find('.slider-btn-left')
    var slider_btn_right = this.el.find('.slider-btn-right')
    var slider_dot = this.el.find('.slider-dot')
    var slider_dot_ul = slider_dot.children('ul')
    var slider_img_length = slider_img_ul_li.length
//  alert(slider_img_length)
    for (var i = 0; i < slider_img_length - 1; i++) {
      if(i === this.config.current){
        slider_dot_ul.append('<li class="active">'+(i+1)+'</li>')
      } else {
        slider_dot_ul.append('<li>'+(i+1)+'</li>')
      }
    }
    var slider_dot_ul_li = slider_dot_ul.children('li')

    // 初始化默认显示图片位置
    slider_img_ul.css('left', - this.config.w * this.config.current - this.config.w)

    // 圆点切换点亮
    var active = function(i) {
      slider_dot_ul_li.removeClass('active')
      slider_dot_ul_li.eq(i).addClass('active')
    }

    // 右点击事件
    slider_btn_right.on('click', function(event) {
     
      event.preventDefault()
      if(_this.config.current < slider_img_length - 1){
        toggleInterval ()
        _this.config.current ++
        if(_this.config.current != slider_img_length - 1) {
          slider_img_ul.stop(true, false).animate({left: - _this.config.w * _this.config.current - _this.config.w}, _this.config.speed, function () {
            active(_this.config.current)
          })
        }
        if (_this.config.current === slider_img_length - 1) {
        	 _this.config.current --;
        	 return false
//        slider_img_ul.stop(true, false).animate({left: - _this.config.w * _this.config.current - _this.config.w}, _this.config.speed, function() {
//          slider_img_ul.css('left', - _this.config.w)
//          _this.config.current = 0
//          active(_this.config.current)
//        })
        }
      }
    })

    // 左点击事件
    slider_btn_left.on('click', function(event) {
      event.preventDefault()
      if(_this.config.current > -1){
        toggleInterval ()
        _this.config.current --
        if(_this.config.current != -1){
          slider_img_ul.stop(true, false).animate({left: - _this.config.w * _this.config.current - _this.config.w}, _this.config.speed, function() {
            active(_this.config.current)
          })
        }
        if(_this.config.current === -1){
        	 _this.config.current ++;
        	 return false
//        slider_img_ul.stop(true, false).animate({left: 0}, _this.config.speed, function() {
//          slider_img_ul.css('left', - _this.config.w * (slider_img_length - 1))
//          _this.config.current = slider_img_length - 3
//          active(_this.config.current)
//        })
        }
      }
    })

    // dot点击事件
    slider_dot_ul_li.on('click', function(event) {
      event.preventDefault()
      toggleInterval ()
      var index = $(this).index()
      active(index)
      slider_img_ul.stop(true, false).animate({left: - _this.config.w * index - _this.config.w}, _this.config.speed, function() {
        _this.config.current = index
      })
    })

    // 自动切换
  var sliderInt = setInterval(sliderInterval, _this.config.intervalTime)
    // 判断图片切换
    function sliderInterval() {
//    if (_this.config.current < slider_img_length - 1) {
//      _this.config.current ++
//      slider_img_ul.stop(true, false).animate({left: - _this.config.w * _this.config.current - _this.config.w}, _this.config.speed, function() {
//        active(_this.config.current)
//        if (_this.config.current === slider_img_length - 1) {
//          slider_img_ul.css('left', - _this.config.w)
//          _this.config.current = 0
//          active(_this.config.current)
//        }
//      })
//    }
    }
    // 重置计时器
    function toggleInterval () {
//    clearInterval(sliderInt)
//    sliderInt = setInterval(sliderInterval, _this.config.intervalTime)
    }

  } // --end-- xSlider

  $.fn.extend({
    xSlider: function() {
      new xSlider($(this))
    }
  })

})(jQuery)


