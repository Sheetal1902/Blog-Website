//filter js
$(document).click(function () {
    $('.filter-item').click(function () {
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.post-box').show('1000')
        }
        else {
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });

    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

//header bg chnge
let header = document.querySelector('header');

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

$(document).ready(function () {
    $('#comment').click(function () {
        var input = $('#input').val();
        $('.Box').append(input + '<br>');
        $('#input').val('');
        $('.Box-Container').slideDown();
    });
    $('#cancel').click(function () {
        $('#input').val('');
    });
    $('#delete').click(function () {
        $('.Box').text('');
        $('.Box-Container').slideUp();
    });
});