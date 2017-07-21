
var list = $('.list'),
    services = list.find('.services>li'),
    description = list.find('.tab'),
    serviceList = list.find('.service-list');

$(function () {
    services.on('click', function () {
        var currentIndex = $(this).index();
        $(description[currentIndex]).show();
        serviceList.show();
    });
});

    services.on('click', function () {
        var currentIndex = $(this).index();
        if (services[currentIndex] !== description[currentIndex]){
            description.hide();
        }
    });
