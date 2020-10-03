$(document).ready(function () {

    // modal
    $('.modal__close').on('click', function () {
        $('.overlay, #thanks').fadeOut('slow');
    });



    // mailer
    $('form').submit(function (e) {
        e.preventDefault();/* отключаем перезагрузку страницы */
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

});