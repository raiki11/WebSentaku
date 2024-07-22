  /************************************
 ジャンケンゲームを作る（関数なし）
*************************************/
//＜ジャンケンの手の番号を設定＞
function janken(){
    //＜「const」で変数宣言することで、define的な定数の使い方をする＞
    const GU=1;
    const CHOKI=2;
    const PA=3;
    //GUという変数を宣言、1を格納する
    //CHOKIという変数を宣言、2を格納する
    //PAという変数を宣言、3を格納する

    //＜ジャンケンの入力ダイアログボックスを表示＞
    function getHumHand(){
        let hum = prompt('半角数字で1～3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー'); //1:グー、2:チョキ、3:パーと、対応する変数と組み合わせて表示する。\nは改行コードなので、文字として扱う
        hum = parseInt(hum,10);  
        //<入力値のチェック>
        if(hum != GU && hum != CHOKI && hum != PA){
            return undefined //アラートで再読み込みの文章を表示
        }else{
            return hum;
        }
    }
    
    //<コンピューターの手を決める>
    function getComHand(){
    return Math.floor(Math.random()*3)+1;
    }   
        

    //＜コンピュータの手の名前＞
    function  getHandName(num){
    switch(num){
        case GU:
            return'グー';
            break;
        case CHOKI:
            return'チョキ';
            break;
        case PA:
            return'パー';
            break;

        }
    }

    alert(getResultMsg(com,hum));
    return getResult(com,hum);
    let win=0;
    let isLose=false;
    while(!isLose){
        let result=janken();
        if(result==='結果はあいこでした'){
            continue;
        }
        if(result==='勝ちました'){
            win++;
        }
       alert('ただいま「'+win+'」勝です。');
       continue;
    }
    alert('連勝はストップです。記録は「'+win+'」勝でした');
    isLose=true;
}