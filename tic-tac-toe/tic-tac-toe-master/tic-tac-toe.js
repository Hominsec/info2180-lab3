window.addEventListener('load',()=>{
    let divboard=document.querySelector("#board");
    //Array
    let child=[];
    for (var num=0; num<=8;num++){
        child[num]=divboard.children[num];
        child[num].className="square";
    }

    //divboard.style.backgroundColor="black";
    /*let child0=divboard.children[0];
    let child1=divboard.children[1];
    let child2=divboard.children[2];
    let child3=divboard.children[3];
    let child4=divboard.children[4];
    let child5=divboard.children[5];
    let child6=divboard.children[6];
    let child7=divboard.children[7];
    let child8=divboard.children[8];
    //child1.style.backgroundColor="black";
    child0.className="square";
    child1.className="square";
    child2.className="square";
    child3.className="square";
    child4.className="square";
    child5.className="square";
    child6.className="square";
    child7.className="square";
    child8.className="square";*/
});