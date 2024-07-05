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

    
    //＜結果の判定＞
    //結果（勝敗）を格納する変数「msgResult」を宣言。初期化のために0を代入
    function getResult(com,hum){
        //if文での判定。人間とコンピュータの手が一緒なら…
        if(hum==com){
            return'結果は「あいこ」。';        //結果の変数にあいこの文字列を格納
        }else if(hum == GU && com == CHOKI || hum == CHOKI && com == PA || hum == PA && com == GU){
            return'勝ったぞ、やったね';
        }else{
            return'負けた、ズコー'; 
        }
    }

    function getResultMsg(com,hum){
            return getResult(com,hum)+'コンピューターが出したのは「'+getHandName(com)+'だったよ」';
    }

    let hum=getHumHand();
    if(!hum){
        alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます');  //アラートで再読み込みの文章を表示
    }else{
        let com=getComHand();
        alert(getResultMsg(com,hum))
    }

}
janken();