$(document).ready(function(){
    $(window).scroll(function () {
      if($(document).scrollTop() > 500){
        $("#blockheader").css('background','white');
      }
      else{
        $("#blockheader").css('background','transparent');
      }
    });
  });
