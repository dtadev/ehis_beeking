$(document).ready(function(){

    //open nav bar 
    $('.navbar-icon').click(function(){
        
                $('#menu .left').toggleClass('d-block');
                $('#menu .right').toggleClass('d-block');
        
    })

    $('.sumenh-intro').click(function(){
        
       
        $('.sumenh_content').toggleClass('d-block');
        $('.sumenh_down').toggleClass('d-block');
        $('.sumenh_up').toggleClass('d-none');


    })

    $('.giatri_intro').click(function(){
        
       
        $('.giatri_content').toggleClass('d-block');
        $('.giatri_down').toggleClass('d-block');
        $('.giatri_up').toggleClass('d-none');


    })
});