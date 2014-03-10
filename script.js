document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = document.getElementsByClassName(target.className)[0];
    if (text.className === "liquid" ||text.className === "pen" || text.className === "glass") {
        document.getElementsByClassName("adam")[0].classList.add('hidden-div');
        document.getElementsByClassName("fernando")[0].classList.add('hidden-div');
    } else if (text.className === "flash" || text.className === "camera") {
        document.getElementsByClassName("alex")[0].classList.add('hidden-div');
        document.getElementsByClassName("fernando")[0].classList.add('hidden-div');
    } else if (text.className === "mouse" || text.className === "computer" || text.className === "wheel") {
        document.getElementsByClassName("alex")[0].classList.add('hidden-div');
        document.getElementsByClassName("adam")[0].classList.add('hidden-div');
    }
    addVisibility();
}, false);
function addVisibility(){
    
    var alex_info = document.getElementsByClassName('alex-info')[0];
    alex_info.classList.add('visible-info');
}

