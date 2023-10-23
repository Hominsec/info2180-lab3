window.addEventListener('load',()=>{
    let divboard=document.querySelector("#board");
    let status=document.querySelector("#status");
    let button=document.querySelector(".btn");
    
    //CHECK
    let check=0;
    let mssg='';
    let fin="";
    //Array
    let child=[];
    let childstate=["","","","","","","","",""];
    for (var num=0; num<=8;num++){
        child[num]=divboard.children[num];
        child[num].className="square";
    }//BTN
    button.addEventListener("click",()=>{
        for (var num=0; num<=8;num++){
            child[num].innerHTML="";
            status.innerHTML="Move your mouse over a square and click to play an X or an O.";
            status.className="status";
        }
        childstate=["","","","","","","","",""];

    });
    
    //FUNC
    function func(){
        if(fin!=""){
            console.log(fin)
            return;
        }
        //console.log("TEST");
        if((childstate[0]=='X')&&(childstate[1]=='X')&&(childstate[2]=='X')){
            mssg="Congratulations! X is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[3]=='X')&&(childstate[4]=='X')&&(childstate[5]=='X')){
            mssg="Congratulations! X is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[6]=='X')&&(childstate[7]=='X')&&(childstate[8]=='X')){
            mssg="Congratulations! X is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[0]=='X')&&(childstate[3]=='X')&&(childstate[6]=='X')){
            mssg="Congratulations! X is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[1]=='X')&&(childstate[4]=='X')&&(childstate[7]=='X')){
            mssg="Congratulations! X is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[2]=='X')&&(childstate[5]=='X')&&(childstate[8]=='X')){
            mssg="Congratulations! X is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[2]=='X')&&(childstate[4]=='X')&&(childstate[6]=='X')){
            mssg="Congratulations! X is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[0]=='X')&&(childstate[4]=='X')&&(childstate[8]=='X')){
            mssg="Congratulations! X is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
          //O
        if((childstate[0]=='O')&&(childstate[1]=='O')&&(childstate[2]=='O')){
            mssg="Congratulations! O is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[3]=='O')&&(childstate[4]=='O')&&(childstate[5]=='O')){
            mssg="Congratulations! O is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[6]=='O')&&(childstate[7]=='O')&&(childstate[8]=='O')){
            mssg="Congratulations! O is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[0]=='O')&&(childstate[3]=='O')&&(childstate[6]=='O')){
            mssg="Congratulations! O is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[1]=='O')&&(childstate[4]=='O')&&(childstate[7]=='O')){
            mssg="Congratulations! O is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[2]=='O')&&(childstate[5]=='O')&&(childstate[8]=='O')){
            mssg="Congratulations! O is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[2]=='O')&&(childstate[4]=='O')&&(childstate[6]=='O')){
            mssg="Congratulations! O is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        if((childstate[0]=='O')&&(childstate[4]=='O')&&(childstate[8]=='O')){
            mssg="Congratulations! O is the WInner!";
            fin="Winner already decided";
            status.innerHTML=mssg;
            status.className="status you-won";
            console.log(mssg);
        }
        
    };
    //ONCLICK
    

    //
    
    child[0].addEventListener("click",()=>{
        child[0].style.background="";
        child[0].style.borderColor="";
        child[0].style.cursor="";
        if(childstate[0]==""){
            check+=1;
            console.log(check);
        }
        if(childstate[0]!=""){}
        //check+=1;
        if(check%2==0){
            childstate[0]="X";
            child[0].innerHTML="X";
            child[0].className="square X";
        }
        else{
            childstate[0]="O";
            child[0].innerHTML="O";
            child[0].className="square O";
        }        
        if(check>=3){
            func();
        }
        console.log(childstate);
                    //console.log("Raised");
    });
    child[1].addEventListener("click",()=>{
        child[1].style.background="";
        child[1].style.borderColor="";
        child[1].style.cursor="";
        if(childstate[1]==""){
            check+=1;
        }
        if(childstate[1]!=""){}
        //check+=1;
        else if(check%2==0){
            childstate[1]="X";
            child[1].innerHTML="X";
            child[1].className="square X";            
        }
        else{
            childstate[1]="O";
            child[1].innerHTML="O";
            child[1].className="square O";
        }   
        if(check>=3){
            func();
        }
        console.log(childstate);
                    //console.log("Raised");
    });
    child[2].addEventListener("click",()=>{
        child[2].style.background="";
        child[2].style.borderColor="";
        child[2].style.cursor="";
        if(childstate[2]==""){
            check+=1;
        }
        if(childstate[2]!=""){}
        //check+=1;
        if(check%2==0){
            childstate[2]="X";
            child[2].innerHTML="X";
            child[2].className="square X";
        }
        else{
            childstate[2]="O";
            child[2].innerHTML="O";
            child[2].className="square O";
        }  
        if(check>=3){
            func();
        } 
        console.log(childstate);
                    //console.log("Raised");
    });
    child[3].addEventListener("click",()=>{
        child[3].style.background="";
        child[3].style.borderColor="";
        child[3].style.cursor="";
        if(childstate[3]==""){
            check+=1;
        }
        if(childstate[3]!=""){}
        //check+=1;
        if(check%2==0){
            childstate[3]="X";
            child[3].innerHTML="X";
            child[3].className="square X";
        }
        else{
            childstate[3]="O";
            child[3].innerHTML="O";
            child[3].className="square O";
        }   
        if(check>=3){
            func();
        }
        console.log(childstate);
                    //console.log("Raised");
    });
    child[4].addEventListener("click",()=>{
        child[4].style.background="";
        child[4].style.borderColor="";
        child[4].style.cursor="";
        if(childstate[4]==""){
            check+=1;
        }
        if(childstate[4]!=""){}
        //check+=1;
        if(check%2==0){
            childstate[4]="X";
            child[4].innerHTML="X";
            child[4].className="square X";
        }
        else{
            childstate[4]="O";
            child[4].innerHTML="O";
            child[4].className="square O";
        }   
        if(check>=3){
            func();
        }
        console.log(childstate);
                    //console.log("Raised");
    });
    child[5].addEventListener("click",()=>{
        child[5].style.background="";
        child[5].style.borderColor="";
        child[5].style.cursor="";
        if(childstate[5]==""){
            check+=1;
        }
        if(childstate[5]!=""){}
        //check+=1;
        if(check%2==0){
            childstate[5]="X";
            child[5].innerHTML="X";
            child[5].className="square X";
        }
        else{
            childstate[5]="O";
            child[5].innerHTML="O";
            child[5].className="square O";
        }   
        if(check>=3){
            func();
        }
        console.log(childstate);
                    //console.log("Raised");
    });
    child[6].addEventListener("click",()=>{
        child[6].style.background="";
        child[6].style.borderColor="";
        child[6].style.cursor="";
        if(childstate[6]==""){
            check+=1;
        }
        if(childstate[6]!=""){}
        //check+=1;
        if(check%2==0){
            childstate[6]="X";
            child[6].innerHTML="X";
            child[6].className="square X";
        }
        else{
            childstate[6]="O";
            child[6].innerHTML="O";
            child[6].className="square O";
        } 
        if(check>=3){
            func();
        }  
        console.log(childstate);
                    //console.log("Raised");
    });
    child[7].addEventListener("click",()=>{
        child[7].style.background="";
        child[7].style.borderColor="";
        child[7].style.cursor="";
        if(childstate[7]==""){
            check+=1;
        }
        if(childstate[7]!=""){}
        //check+=1;
        if(check%2==0){
            childstate[7]="X";
            child[7].innerHTML="X";
            child[7].className="square X";
        }
        else{
            childstate[7]="O";
            child[7].innerHTML="O";
            child[7].className="square O";
        }   
        if(check>=3){
            func();
        }
        console.log(childstate);
                    //console.log("Raised");
    });
    child[8].addEventListener("click",()=>{
        child[8].style.background="";
        child[8].style.borderColor="";
        child[8].style.cursor="";
        if(childstate[8]==""){
            check+=1;
        }
        if(childstate[8]!=""){}
        //check+=1;
        if(check%2==0){
            childstate[8]="X";
            child[8].innerHTML="X";
            child[8].className="square X";
        }
        else{
            childstate[8]="O";
            child[8].innerHTML="O";
            child[8].className="square O";
        }   
        if(check>=3){
            func();
        }
        console.log(childstate);
                    //console.log("Raised");
    });

       //ONHOVER
    child[0].addEventListener("mouseover",()=>{
        child[0].style.background="var(--coral)";
        child[0].style.borderColor="var(--lightblue)";
        child[0].style.cursor="pointer";
    });
    child[0].addEventListener("mouseleave",()=>{
        child[0].style.background="";
        child[0].style.borderColor="";
        child[0].style.cursor="";

    });

    child[1].addEventListener("mouseover",()=>{
        child[1].style.background="var(--coral)";
        child[1].style.borderColor="var(--lightblue)";
        child[1].style.cursor="pointer";
    });
    child[1].addEventListener("mouseleave",()=>{
        child[1].style.background="";
        child[1].style.borderColor="";
        child[1].style.cursor="";
    });

    child[2].addEventListener("mouseover",()=>{
        child[2].style.background="var(--coral)";
        child[2].style.borderColor="var(--lightblue)";
        child[2].style.cursor="pointer";
    });
    child[2].addEventListener("mouseleave",()=>{
        child[2].style.background="";
        child[2].style.borderColor="";
        child[2].style.cursor="";
    });

    child[3].addEventListener("mouseover",()=>{
        child[3].style.background="var(--coral)";
        child[3].style.borderColor="var(--lightblue)";
        child[3].style.cursor="pointer";
    });
    child[3].addEventListener("mouseleave",()=>{
        child[3].style.background="";
        child[3].style.borderColor="";
        child[3].style.cursor="";
    });

    child[4].addEventListener("mouseover",()=>{
        child[4].style.background="var(--coral)";
        child[4].style.borderColor="var(--lightblue)";
        child[4].style.cursor="pointer";
    });
    child[4].addEventListener("mouseleave",()=>{
        child[4].style.background="";
        child[4].style.borderColor="";
        child[4].style.cursor="";
    });

    child[5].addEventListener("mouseover",()=>{
        child[5].style.background="var(--coral)";
        child[5].style.borderColor="var(--lightblue)";
        child[5].style.cursor="pointer";
    });
    child[5].addEventListener("mouseleave",()=>{
        child[5].style.background="";
        child[5].style.borderColor="";
        child[5].style.cursor="";
    });

    child[6].addEventListener("mouseover",()=>{
        child[6].style.background="var(--coral)";
        child[6].style.borderColor="var(--lightblue)";
        child[6].style.cursor="pointer";
    });
    child[6].addEventListener("mouseleave",()=>{
        child[6].style.background="";
        child[6].style.borderColor="";
        child[6].style.cursor="";
    });

    child[7].addEventListener("mouseover",()=>{
        child[7].style.background="var(--coral)";
        child[7].style.borderColor="var(--lightblue)";
        child[7].style.cursor="pointer";
    });
    child[7].addEventListener("mouseleave",()=>{
        child[7].style.background="";
        child[7].style.borderColor="";
        child[7].style.cursor="";
    });
    
    child[8].addEventListener("mouseover",()=>{
        child[8].style.background="var(--coral)";
        child[8].style.borderColor="var(--lightblue)";
        child[8].style.cursor="pointer";
    });
    child[8].addEventListener("mouseleave",()=>{
        child[8].style.background="";
        child[8].style.borderColor="";
        child[8].style.cursor="";
    });
    
    
    
    
    

    

});

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