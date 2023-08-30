//Weight Calc
$(function () {
  $('#calcweight').click(function (a) {
    a.preventDefault();
    a = Math.ceil(Number($('#minus_weight').val()) / 0.666666);
    Number($('#weight').val()) > Number($('#minus_weight').val()) + 40
      ? $('.formResult').html(
        '<p><b>إذا إتبعت التعليمات في هذا المقال سوف تتمكن فقدان العديد من الكيلوجرامات   ' +
        
        ' خلال أسابيع معدودة !</b></p><p>هل تعتقد ان هذا ممكن ؟! يمكنك قراءة المقال و الحكم بنفسك! </p>'
      )
      : $('.formResult').html(
        '<p><b>\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435.</b></p>'
      );
    $('.formResult').css({ transition: 'background 1s', backgroundColor: '#ff7426c4', border: '2px solid #ff7426c4' });
    setTimeout(function () {
      $('.formResult').css({ backgroundColor: '#fff' });
    }, 2e3);
  });
});


// --------------SCROLL-------------------
$("a").on("touchend, click", function (e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $('.order').offset().top
  }, 400);
});

$(".ac_footer a, .ac_gdpr_fix a, a.link ").unbind("click");

// --------------New comment-------------------
