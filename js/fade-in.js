/* FADE IN RIGHT */
$(document).ready(function() {
    $(window).scroll(function(){
        $('.fadein-right').each(function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).innerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window + 100 > bottom_of_object ){
                /* two animations at the same time with different durations */
                $(this).animate({'right':'0'}, 600);  
                $(this).animate({'opacity' : '1'}, {duration: 700, queue: false}); 
            }            
        });     
    });    
});