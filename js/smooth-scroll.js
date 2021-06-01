$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      400, // scroll speed in ms //
      'linear'
    )
  })