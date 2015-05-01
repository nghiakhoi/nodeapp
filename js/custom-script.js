(function($) {
    $(function(){
    	//Dropdown cart in header
		$('.cart-holder > h3').click(function(){
			if($(this).hasClass('cart-opened')) {
				$(this).removeClass('cart-opened').next().slideUp(300);
			} else {
				$(this).addClass('cart-opened').next().slideDown(300);
			}
		});
		//Popup rating content
		$('.star-rating').each(function(){
			rate_cont = $(this).attr('title');
			$(this).append('<b class="rate_content">' + rate_cont + '</b>');
		});

		//Disable cart selection
		(function ($) {
            $.fn.disableSelection = function () {
                return this
                    .attr('unselectable', 'on')
                    .css('user-select', 'none')
                    .on('selectstart', false);
            };
            $('.cart-holder h3').disableSelection();
        })(jQuery);

		//Fix contact form not valid messages errors
		jQuery(window).load(function() {
			jQuery('.wpcf7-not-valid-tip').live('mouseover', function(){
				jQuery(this).fadeOut();
			});

			jQuery('.wpcf7-form input[type="reset"]').live('click', function(){
				jQuery('.wpcf7-not-valid-tip, .wpcf7-response-output').fadeOut();
			});
		});

		// compare trigger
		$(document).on('click', '.cherry-compare', function(event) {
			event.preventDefault();
			button = $(this);
			$('body').trigger( 'yith_woocompare_open_popup', { response: compare_data.table_url, button: button } )
		});

    });
})(jQuery);