document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = document.getElementsByClassName(target.className)[0];
    if (text.className === "liquid" || text.className === "pen" || text.className === "glass") {
        hiddenDiv("add", "adam");
        hiddenDiv("add", "fernando");
        infoVisibility("add");
        fillInfo("Alex");
    } else if (text.className === "flash" || text.className === "camera") {
        hiddenDiv("add", "alex");
        hiddenDiv("add", "fernando");
        infoVisibility("add");
        fillInfo("Adam");
    } else if (text.className === "mouse" || text.className === "computer" || text.className === "wheel") {
        hiddenDiv("add", "alex");
        hiddenDiv("add", "adam");
        infoVisibility("add");
        fillInfo("Fernando");
    } else if (text.className === "x" || text.className === "close-button") {
        hiddenDiv("remove", "alex");
        hiddenDiv("remove", "adam");
        hiddenDiv("remove", "fernando");
        infoVisibility("remove");
    }
}, false);
function infoVisibility(option){
    var alex_info = document.getElementsByClassName('info')[0];
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
function fillInfo(name){
    document.getElementById("worker-title").innerHTML = name;
    document.getElementById("worker-text").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non justo libero. Donec eget dolor sagittis, porttitor nibh id, accumsan est. Phasellus vitae pretium ligula. Morbi porta metus sed ipsum dignissim ornare. Maecenas eu orci sapien. Morbi hendrerit et risus nec placerat. Sed placerat odio eu est faucibus iaculis. Pellentesque adipiscing nec urna in aliquet. Maecenas eros sem, semper ac tincidunt a, blandit non tortor. Nunc faucibus quam non fringilla posuere. Aenean a augue tellus. Curabitur et tellus at sapien egestas pharetra. Sed luctus sollicitudin turpis. Phasellus euismod est sit amet molestie pretium. Vivamus interdum lacus ac nibh semper auctor.";
}

