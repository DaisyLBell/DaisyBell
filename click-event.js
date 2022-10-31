var textButton = document.querySelector('.click-text');

var classOff = document.querySelector('.click-off');

var textOff = document.querySelector('.text-on');

var classTurnOff;


textButton.addEventListener('click', function () {
    classOff.classList.add('click-off');
//    textOff.classList.add('text-off');
});

textButton.addEventListener('click', function () {
    classOff.classList.remove('click-off');
//     textOff.classList.remove('text-off');                                           
                                            });

textButton.addEventListener('click',function(){
    textOff.classList.add('text-off');
});

//classOff.addEventListener('click', function(){
//    textOff.classList.remove('text-off');
//});



