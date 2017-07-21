
var list = $('.list'),
    content = $('.content'),
    services = list.find('.services>li'),
    description = list.find('.tab'),
    serviceList = list.find('.service-list'),
    section = content.find('.section'),
    sectionDescription = content.find('.section-disc');

$(function () {
    services.on('click', function () {
        var currentIndex = $(this).index();
        $(description[currentIndex]).show();
        serviceList.show();
        sectionDescription.hide();
    });
});

services.on('click', function () {
    var currentIndex = $(this).index();
    if (services[currentIndex] !== description[currentIndex]){
        description.hide();
    }
});

$(function () {
    section.on('click', function () {
        var currentIndex = $(this).index();
        $(sectionDescription[currentIndex]).show();
        description.hide();
        serviceList.hide();
    })
});

section.on('click', function () {
    var currentIndex = $(this).index();
    if (section[currentIndex] !== sectionDescription[currentIndex]){
        sectionDescription.hide();
    }
});
