var submenu = document.querySelector('.submenu');
var openSubmenu = document.querySelector('.open_Submenu');

openSubmenu.addEventListener('click',function(){
    submenu.classList.toggle('show');
})

document.addEventListener('click',function(e){
    if(submenu.classList.contains('show')
    && !submenu.contains(e.target)
    && !openSubmenu.contains(e.target)){
        submenu.classList.remove('show');
    }
})