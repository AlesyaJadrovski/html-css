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

var list = document.find('.list'),
    service = list.find('.service>li'),
    description = list.find('.description>li');

    $(service).on('click', function () {
        description.show();
        });
