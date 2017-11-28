(function ($) {
  Drupal.behaviors.ajax_buttons = {
    attach: function (context, settings) {
      $('.btn--ajax').removeClass('js-loading');
      $('.btn--ajax').once('ajax-compatible-buttons').on('click', function() {
        $(this).addClass('js-loading');
      });
    }
  };
})(jQuery);
