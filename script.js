document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = document.getElementsByClassName(target.className)[0];
    if (text.className === "liquid" || text.className === "pen" || text.className === "glass") {
        hiddenDiv("add", "adam");
        hiddenDiv("add", "fernando");
        visibility("add");
    } else if (text.className === "flash" || text.className === "camera") {
        hiddenDiv("add", "alex");
        hiddenDiv("add", "fernando");
        visibility("add");
    } else if (text.className === "mouse" || text.className === "computer" || text.className === "wheel") {
        hiddenDiv("add", "alex");
        hiddenDiv("add", "adam");
        visibility("add");
    } else if (text.className === "x" || text.className === "close-button") {
        hiddenDiv("remove", "alex");
        hiddenDiv("remove", "adam");
        hiddenDiv("remove", "fernando");
        visibility("remove");
    }
}, false);
function visibility(option){
    var alex_info = document.getElementsByClassName('alex-info')[0];
    if (option === "add") {
        alex_info.classList.add('visible-info');
    }else if(option === "remove"){
        alex_info.classList.remove('visible-info');
    }
}
function hiddenDiv(option, name){
    if (option === "add") {
        document.getElementsByClassName(name)[0].classList.add('hidden-div');
    }else if(option === "remove"){
        document.getElementsByClassName(name)[0].classList.remove('hidden-div');
    }
}

