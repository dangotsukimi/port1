$(function( $ ) {
	function menu_open() {
		if ( $( this ).hasClass( 'sp-close' ) ) {
			$( this )
				.removeClass( 'sp-close' )
				.addClass( 'sp-open' );
			$( '#menu' ).slideDown( 'fast' );
		} else {
			$( this )
				.removeClass( 'sp-open' )
				.addClass( 'sp-close' );
			$( '#menu' ).slideUp( 'fast' );	
		}	
	}
	$( '#sp-icon' ).on( 'click', menu_open );
});