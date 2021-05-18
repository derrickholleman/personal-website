/* hamburger menu animation toggle */
$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});

/* set variables for classes to target */
const menu_toggle = document.querySelector('.hamburger');
const mobile_menu_display = document.querySelector('.mobile-nav');

menu_toggle.addEventListener('click', function () {
    menu_toggle.classList.toggle('is-active'); /* init .is-active class on .hamburger*/
	mobile_menu_display.classList.toggle('is-active'); /* init .mobile-nav.is-active */
})

/* prevents the hamburger menu from scrolling while open */
jQuery('.hamburger').click(function(){
    var menu_active = jQuery(this).hasClass('is-active');
    if(menu_active){
        jQuery('body').css('position','fixed');
    } 
    else {
       jQuery('body').css('position','static');
    }
});

