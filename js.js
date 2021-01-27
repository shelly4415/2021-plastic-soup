$(document).ready(function() {
    // 當頁面往下滑超過40 按鈕浮現，否則消失
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.topBtn').fadeIn();
        } else {
            $('.topBtn').fadeOut();
        }
    });
    // 點下按鈕, 花4秒 跳至頁面位置0之處
    $(".topBtn").click(function() {
        $('html,body').animate({ scrollTop: 0 }, { easing: "linear" });
    })

})

// // Get the modal
// var modal = $("#myModal");

// // Get the button that opens the modal
// var img = $("#fish");

// // Get the <span> element that closes the modal
// var span = $(".close")[0];

// // When the user clicks on the button, open the modal
// img.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }