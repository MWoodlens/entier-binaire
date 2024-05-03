//---------------------------------------
let form = document.querySelector('form');
let ch1 = document.getElementById('type1');
let ch2 = document.getElementById('type2');
// --------------------------------------
let nb = document.querySelector('.nb');
let result = document.querySelector('.result');
let btn = document.querySelector('.btn');
// --------------------------------------
const nbInt ="0123456789";
const leftRightKey = ['Backspace','ArrowLeft','ArrowRight'];

nb.addEventListener('keydown',(ev)=>{
    if(ch1.checked){
        if(!nbInt.includes(ev.key) && !leftRightKey.includes(ev.key)){
            ev.preventDefault();
        }
    }

    if(ch2.checked){
        const bin = nbInt.substring(0,2);
        if(!bin.includes(ev.key) && !leftRightKey.includes(ev.key)){
            ev.preventDefault();
        }
    
    }
})

form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    //Int to Binary
    if(ch1.checked){
       if(nb.value == 0){
            result.value = '0';
       }else
       if(nb.value == 1){
            result.value = '01';
       }else{
        let a = parseInt(nb.value);
        let b;
        let r = [];

        while(true){
            r.push(a%2);
            b = parseInt(a/2);
            if(b == 1 || b == 0){
                r.push(b);
                break;
            }
            a = b;
           
        }
        r = r.reverse();
        result.value = r.join('');
        
       }
    }


    //Binary to Int
    if(ch2.checked){
        if(nb.value ==0){
            result.value = '0';
        }else
        if(nb.value == 1){
            result.value ='1';
        }else{
            let a = nb.value;
            a = a.split('');
            let l = a.length
            let r = 0;
            for(let el of a){
               l = l-1;
               let val = el*Math.pow(2,l);
               r+=val; 
            } 
            result.value = r;
        }
    }
})