
var list = $('.list'),
    service = list.find('.service>li'),
    description = list.find('.tab');
    //indexService = service.index();

    service.on('click', function () {
        var currentIndex = $(this).index();
        description.index(currentIndex).show();
    });
