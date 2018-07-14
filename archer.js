$(document).ready(function(){
    $(document).keypress(function(e){
        if(e.key===" "){
            $('#arrow')
            .animate({'right':'785px'},2000)
        }
    });
    $("#start").click(function(){
        $("#image").addClass('animateimage');
        setTimeout(function(){
            $("#image").stop();
        },2000)
            /*$("#stop").click(function () {
                clearInterval(timer);
                timer = null
            });*/
            console.log($('#arrow').position().left)
           /* window.alert($('#image').position().left+240);*/
    })
   setInterval(function(){
        var pp=$('#image').position();
        var ob=$('#arrow').position();
        console.log(ob.left);
        if(ob.left==381)
            //$('#image').removeClass('animateimage');
            $('#image').css("animation-play-state","paused");   
        },100); 

});