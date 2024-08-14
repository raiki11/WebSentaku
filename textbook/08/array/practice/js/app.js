//要素オブジェクトの取得
let getResult= document.getElementById('getResult');
let result=document.getElementById('result');

//イベントの登録
getResult.addEventListener('click',function(){
result.innerHTML='結果は「' + omikuji.getResult() + '」でした';
});

//おみくじの結果データ作成
let omikuji={
    results: ['大吉','吉','中吉','小吉','凶'],
    getResult:function(){
        let results=this.results;
        return results[Math.floor(Math.random() * results.length)];
    }
}

console.log(omikuji.getResult());

//配列[results]をコンソールに表示
console.log(results);

//インデックスが[0]の要素をコンソールに表示
console.log(results[0]);


//配列に所属するデータをfor文ですべて表示
for (let i=0; i< result.length; i++){
    console.log('index:'+i+'データ'+results[i]);
}


