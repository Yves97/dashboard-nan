$(document).ready(function() {
    $('#example').DataTable();
} );

$('.sidebar-control').click(function(){
    $('.sidebar').animate({height: 'toggle'})
})