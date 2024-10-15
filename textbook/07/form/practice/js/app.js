let button = document.getElementById('button');
let form = document.getElementById('form');
let textarea = document.getElementById('textarea');

let maxTextNum=textarea.getAttribute('maxlength');

let reminingTimerNum=10;
let textMessage=document.createElement('div');
let parent = textarea.parentElement;
parent.insertBefore(textMessage,textarea);

let timerMessage=document.createElement('div');
parent.insertBefore(timerMessage,null);


textarea.addEventListener('keyup', function(){
    let currentTextNum=textarea.value.length;
    textMessage.innerHTML='<p>あと「' +(maxTextNum - currentTextNum)
    +'」文字を入力できます</p>';
});


button.addEventListener('click',function(){

    let timerId=setInterval(function(){
        timerMessage.innerHTML='<p>制限時間:'+reminingTimerNum+'秒</p>';
        if(reminingTimerNum<=0){
            alert('制限時間終了');
            clearInterval(timerId);
        }
        reminingTimerNum--;
    },1000);
    
    form.style.display='block';

});

