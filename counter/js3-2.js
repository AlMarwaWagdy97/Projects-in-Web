/*$(document).ready(function(){
    let i = 0;
    $('#counter1').html("click count: " + i);
    $('#img1').click(function(){
        $('#counter1').html("click count: " + i++);
    })
})
*/

var map={"image1":0,"image2":0,"image3":0}
$(document).ready(function(){
    $(".pic img").click(function(){
        var name = $(this).attr("data-tab") ;
        var count = $("p").length;
        $('p').each(function(){
            if($(this).attr('id') == name){
                $(this).html("click count: " + (++map[name]));
                return false;
            }
        })
        })
})

