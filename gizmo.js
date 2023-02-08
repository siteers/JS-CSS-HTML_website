let box1 = document.querySelector("#middle");

let interval = setInterval(function() {box1.getBoundingClientRect().top <= 300 ? changeclass(): null});

function changeclass()
{
    box1.firstElementChild.classList.remove('divx');
    box1.firstElementChild.classList.add('div');
    clearInterval(interval);
}

let box2 = document.querySelector("#bottom");

let interval2 = setInterval(function() {box2.getBoundingClientRect().top <= 350 ? changeclass2(): null});

function changeclass2()
{
    box2.firstElementChild.classList.remove('divx2');
    box2.firstElementChild.classList.add('div2');
    clearInterval(interval);
}




