/*
function openbox1(id){
    display = document.getElementById(id).style.display;

    if(display=='none'){
        document.getElementById(id).style.display='block';
    }else{
        document.getElementById(id).style.display='none';
    }
}
*/

var list = $('.list'),
    service = list.find('.service>li'),
    description = list.find('.tab');
    //indexService = service.index();

    service.on('click', function () {
        var currentIndex = $(this).index();
        description.index(currentIndex).show();
    });
