

/*$( document ).ready( function () {
    $( '.dropdown' ).on( 'click', function ( e ) {
        var $el = $( this );
        var $parent = $( this ).offsetParent( ".dropdown-menu" );
        if ( !$( this ).next().hasClass( 'show' ) ) {
            $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
        }
        var $subMenu = $( this ).next( ".dropdown-menu" );
        $subMenu.toggleClass( 'show' );
        
        $( this ).parent( "li" ).toggleClass( 'show' );

        $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
            $( '.dropdown-menu .show' ).removeClass( "show" );
        } );
        
         if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
            $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
        }

        return false;
    } );
} ); */

//zegar na stronie głównej 

function time() {
    var today = new Date();
    
    var hour = today.getHours();
    if (hour<10) hour = "0"+hour;
    
    var minute = today.getMinutes();
    if (minute<10) minute = "0"+minute;
    
    var second = today.getSeconds();
    if (second<10) second = "0"+second;
    
    document.getElementById("clock").innerHTML = hour+":"+minute+":"+second;
     
     setTimeout("time()",1000);
}







