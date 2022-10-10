$(document).ready(function(){
    $(".hpbagus").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_hpbagus = split[1];

        $("#cuy_1").slideUp();
        $("#cuy_2").slideUp();
        $("#cuy_3").slideUp();
        $("#cuy_"+id_hpbagus).slideToggle("medium");


        $(".hpbagus").removeClass('aktif');
        $("#hpbagus_"+id_hpbagus).addClass('aktif');

        

    });
});