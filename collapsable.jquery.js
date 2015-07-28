/* Copyright 2015 Craig Laparo */

'use strict';

(function($){
  $.fn.collapsable = function(options){
    var config = $.extend({
      maxHeight: '10em',
      transitions: true,
      onChange: function(){}
    }, options);

    var _show = function(){
      $(this)
        .removeClass('collapsed')
        .css('max-height', $(this).children().height())
        .trigger('uncollapse');

      config.onChange();
    };

    var _hide = function(){
      $(this)
        .addClass('collapsed')
        .css('max-height', config.maxHeight)
        .trigger('collapse');

      config.onChange();
    };

    var _toggle = function(){
      var $this = $(this);

      if($this.hasClass('collapsed')){
        _show.call(this);
      }else{
        _hide.call(this);
      }
    };

    this.each(function(){
      var $this = $(this)
      , full_height = $this.height();

      if($this.data('collapsable')){
        return;
      }

      $this.data('collapsable', true).addClass('collapsable');

      $this.css('max-height', config.maxHeight);
      if($this.height() < full_height){
        if(!config.transitions){
          $this.addClass('no-transitions');
        }
        $this.css('max-height', config.maxHeight).addClass('collapsed').click(_toggle);
      }else{
        $this.css('max-height', '');
      }
    });

    return this;
  };
})(jQuery);
