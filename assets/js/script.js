 /* window.onload = function() {
        var images = document.getElementsByTagName('img');
        for(var i = 0; i < images.length; i++) {
            var image = images[i];
            image.onclick = function() {
                image.className('.border-images');
            }
        }
    } */


     $(document).ready(function() {
    $('#hall').show(function() {
        $(this).addClass("border-images");
        $('#edu, #shop').addClass('image-border');
         $('#hall').removeClass('image-border');
    });

    $('#hall').click(function(){
        $(this).addClass('border-images');
        $('#edu, #shop').removeClass('border-images');
        $('#edu, #shop').addClass('image-border');
         $('#hall').removeClass('image-border');
    })

    $('#edu').click(function() {
        $(this).addClass('border-images');
        $('#hall, #shop').removeClass('border-images');
        $('#hall, #shop').addClass('image-border');
        $('#edu').removeClass('image-border');
    });

    $('#shop').click(function(){
        $(this).addClass('border-images');
         $('#hall, #edu').removeClass('border-images');
         $('#hall, #edu').addClass('image-border');
          $('#shop').removeClass('image-border');
    });
}); 