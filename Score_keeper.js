const a = document.querySelector("#A");
const b = document.querySelector("#B");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const reset = document.querySelector("#reset");
const select = document.querySelector("#score");

let cnt1 = 0, cnt2=0;
let max = parseInt(select.value);

select.addEventListener("change",function(){
    let x = select.value
    max = parseInt(x);
})

function checker(){
    if(cnt1 >= max || cnt2 >= max){
        p1.disabled = true;
        p2.disabled = true;
        if(cnt1 >= max){
            a.classList.add("text-success");
            b.classList.add("text-danger");
        }else{
            a.classList.add("text-danger");
            b.classList.add("text-success");
        }
    }
}

p1.addEventListener("click",function(){
    cnt1++;
    a.innerText = cnt1;
    console.log(cnt1,cnt2);
    checker();
})

p2.addEventListener("click",function(){
    cnt2++;
    b.innerText = cnt2;
    console.log(cnt1,cnt2);
    checker();
})

reset.addEventListener('click',function(){

    cnt1=0; cnt2=0;
    a.innerText='0';
    b.innerText='0';
    a.classList.remove("text-success","text-danger");
    b.classList.remove("text-success","text-danger");
    p1.disabled = false;
    p2.disabled = false;
})