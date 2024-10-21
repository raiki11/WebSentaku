function janken() {

    const GU = 1;
    const CHOKI = 2;
    const PA = 3;

    function getHumHand() {
        let hum = prompt('半角数字で1～3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
        hum = parseInt(hum, 10);

        if (hum != GU && hum != CHOKI && hum != PA) {
            return undefined;
        } else {
            return hum;
        }
    }

    /*    function getHumHand() {
            let hum = prompt('半角数字で1～3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
            hum = parseInt(hum, 10);
    
            if (hum != GU && hum != CHOKI && hum != PA) {
                return undefined;
            } else {
                return hum;
            }
            return com = Math.floor(Math.random() * 3) + 1;
        }
    */

    //コンピュータの手を決める関数が入ってなかったので追加
    function getComHand() {
        return com = Math.floor(Math.random() * 3) + 1;
    }

    //function getHumHand() {
    //    return com = Math.floor(Math.random() * 3) + 1;
    //}

    function getHandName(num) {

        switch (num) {
            //GUならグーの文字列をcomHandNameに格納
            case GU:
                return 'グー';
                break;
            //CHOKIならチョキの文字列をcomHandNameに格納
            case CHOKI:
                return 'チョキ';
                break;
            //PAならパーの文字列をcomHandNameに格納
            case PA:
                return 'パー';
                break;
        }
    }

    function getResult(com, hum) {
        //let msgResult = 0;　//この変数は使っていないからコメント化してます
        if (hum == com) {
            return '結果は「あいこ」';
        } else if ((hum === GU && com === CHOKI) || (hum === CHOKI && com === PA) || (hum === PA && com === GU)) {
            return '勝ったぞ、やったね';
        } else {
            return '負けた、ズコー';
        }

    }

    /*    function getResult(com, num) {
            //let msgResult = 0;
            if (hum == com) {
                return '結果は「あいこ」';
            } else if ((hum === GU && com === CHOKI || hum === CHOKI && com === PA || hum === PA && com === GU)){
                return '勝ったぞ、やったね';
            } else {
                return '負けた、ズコー';
            }
    
        }
    */

    function getResultMsg(com, hum) {
        return getResult(com, hum) + 'コンピューターの出した手は' + getHandName(com) + 'だったよ';

        //↓関数宣言の中に下記の処理が入っているため、動かなかったと思われ。これを関数の外に出すとよきよ
        /*   let hum = getHumHand;
            if (!hum) {
                alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます')
            } else {
                let com = getComHand();
                alert(getResultMsg(com, hum));
                return getResult(com, hum);
            }
        */
    }

    let hum = getHumHand();
    if (!hum) {
        alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます')
    } else {
        let com = getComHand();
        alert(getResultMsg(com, hum));
        return getResult(com, hum);
    }
}

let win = 0;
let isLose = false;
while (!isLose) {
    let result = janken();
    if (result === '結果は「あいこ」') { //ごめんなさい…テキストと文面が違うため、処理がうまく通っていませんでした。。
        continue;
    }
    if (result === '勝ったぞ、やったね') {　//ごめんなさい…テキストと文面が違うため、処理がうまく通っていませんでした。。
        win++;
        alert('ただいま「' + win + '」勝です。');
        continue;
    }
    alert('連勝はストップです。記録は「' + win + '」勝でした。');
    isLose = true;
}

/*
    let win = 0;
    let isLose = false;
    while (!isLose) {
        let result = janken();
        if (result === '結果はあいこでした。') {
            continue;
        }
        if (result === '勝ちました') {
            win++;
            alert('ただいま「' + win + '」勝です。');
            continue;
        }
        alert('連勝はストップです。記録は「' + win + '」勝でした。');
        isLose = true;
    }
*/
//}
