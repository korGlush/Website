
$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]'),
        closeBtn = $('.modal__close');
        modalDialog = $('.modal__dialog')

    modalBtn.on('click', function () {
        modal.toggleClass('modal-visible')
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal-visible')
    });

    $(document).mouseup( function(e) {
        if(!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0 ) {
            modal.removeClass('modal-visible')
        };
    });

    $(".hero__scroll-down").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".types").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    });


    $(document).on('keydown', function(e) {
    if (e.keyCode == 27)
    modal.removeClass('modal-visible')
    });



    const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
     },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     },
    });


    var next = $('.swiper-button-next')
    var prev = $('.swiper-button-prev')
    var bullets =$('.swiper-pagination')


    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() + 10)
    
    var nextSteps = $('.swiper-button-next_2');
    var bulletsSteps = $('.swiper-pagination_2');

    nextSteps.css('left', prev.width() + 10 + bulletsSteps.width() + 10)
    bulletsSteps.css('left', prev.width() + 10)


    new WOW().init();

    // Валидация формы

    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2,
            },
            userPhone: "required",
            // compound rule
            userEmail: {
              required: true,
              email: true
            }
          },
        messages: {
        userName:{
            required: "Имя обязательно",
            minlength: "Имя не короче двух букв"
        },
        userPhone: "Телефон обязателен",
        userEmail: {
            required: "Обязательно укажите email",
            email: "Введите в формате: name@domain.com"
        }
        },
        submitHandler: function(form){
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    alert('Форма отправлена, мы свяжемся через 10 минут');
                    $(form)[0].rest();
                    modal.removeClass('modal-visible')
                }
            });
        }
    });
    // Маска для телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});
});