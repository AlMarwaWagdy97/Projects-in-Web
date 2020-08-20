var myNav = document.getElementById('blockheader');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 50 ) {
        myNav.classList.add("befor");
        myNav.classList.remove("after");
    } 
    else {
        
        myNav.classList.remove("befor");
    }
};
function myfun(){
    document.getElementById('servise').style.display="block";
}