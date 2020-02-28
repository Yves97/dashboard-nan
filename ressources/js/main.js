$('.sidebar-control').click(function(){
    $('.sidebar').animate({width: 'toggle'})
    $('.sidebar-control img').attr("src","ressources/images/cancel.svg")
})