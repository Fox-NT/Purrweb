$(document).ready(function () {

    var show = true;
    var countbox = ".count_wrapper";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.count').css('opacity', '1');
            $('.count_item').css('opacity', '1');
            $('.count').spincrement({
                thousandSeparator: ",",
                duration: 1200
            });
            show = false;
        }
    });

});

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});
