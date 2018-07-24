



function fixElement () {
    var pos = window.scrollY;
    var element = document.querySelector('.banner-fix');
    console.log(pos);
    if(pos > 300) {

        element.classList.add('fixed');
    } else {
        element.classList.remove('fixed');
    }
}


function reduceNav () {

}

window.addEventListener ('scroll', function() {

    fixElement();
});



