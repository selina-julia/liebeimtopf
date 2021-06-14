
//Subscribe animation
var subscribe_button = document.querySelector(".subscribe-button");
if(subscribe_button){
    subscribe_button.addEventListener('click', function(){
        var subscribing = document.querySelector(".subscribing");
        var thanks = document.querySelector(".thanks");
        var login = document.querySelector(".signup");

        subscribing.classList.add("subscribing-active");
        subscribe_button.classList.add("subscribe-button-active");
        setTimeout(function(){
            login.classList.add("signup-active");
        }, 1200);
        setTimeout(function(){
            thanks.classList.add("thanks-active");
        }, 1400);

        setTimeout(function(){
            thanks.classList.remove("thanks-active");
            login.classList.remove("login-active");
            subscribing.classList.remove("subscribing-active");
            subscribe_button.classList.remove("subscribe-button-active");
            login.classList.remove("signup-active");

        }, 4000);
    });
}


//To top

var to_top_button = document.getElementById("to-top");
if(to_top_button) {

    function scroll_to_top (){
        to_top_button.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });

        })
    }

    document.addEventListener('scroll', function() {

        if (window.innerWidth > 600) {
            if (window.pageYOffset > 200) {
                to_top_button.classList.add('show');
            } else {
                to_top_button.classList.remove('show');
            }
        }
    })

    scroll_to_top();

}


//Filter
// Check active classes
var checkClass = function() {
    if ( $('.item').hasClass('hide') ) {
        $('.item').removeClass('hide');
    }
};

// Category filters
$('.all').click( function() {
    checkClass();
});
$('.spring-button').click( function() {
    checkClass();
    $('.item:not(.spring)').toggleClass('hide');
});
$('.summer-button').click( function() {
    checkClass();
    $('.item:not(.summer)').toggleClass('hide');
});
$('.autumn-button').click( function() {
    checkClass();
    $('.item:not(.autumn)').toggleClass('hide');
});
$('.winter-button').click( function() {
    checkClass();
    $('.item:not(.winter)').toggleClass('hide');
});


// Active tag
$('.button').click(function(){
    $('.button').removeClass('active');
    $(this).addClass('active');
})