function addClick(elementName, type) {
    if(type == "className") {
        elementName = '.' + elementName
    }
    $(elementName).click(function() {
        console.log(elementName + 'Click');
    })
}

$('body').click(function() {
    console.log('bodyClick');
})

$('header').click(function() {
    console.log('headerClick');
})

addClick('main')
$('main').click(function() {
    console.log('mainClick');
})
addClick('div1', 'className')
$('.div1').click(function() {
    console.log('div1Click');
    widthAnimation($(this));
})

$('.div1-1').click(function() {
    console.log('div1-1Click');
})

$('.div1-2').click(function() {
    console.log('div1-2Click');
})

$('.div2').click(function() {
    console.log('div2Click');
})

$('footer').click(function() {
    console.log('footerClick');
})

function widthAnimation(elment) {
    var width = elment.css('width');
    width = parseInt(width);
    setTimeout(function() {
        if(width < 80) {
            width += 5;
            elment.css('width', width);
            widthAnimation(elment);
        }
    }, 400);
}
//加类名