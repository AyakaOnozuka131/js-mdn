// ----------------------------
// よくある操作
// ----------------------------
// 配列の生成
const fruits = ['りんご', 'バナナ'];
console.log(fruits.length); //2

// 位置を使用して配列にアクセスする
const last = fruits[fruits.length -1]; //2-1 = 1
console.log(last); //バナナ

// 配列のループ処理
fruits.forEach((item, index, array) => {
    console.log(item, index);
    // りんご 0
    // バナナ 1
});

// 配列の末尾に要素を追加する
const addNewElement = fruits.push('みかん');
console.log(fruits); //['りんご', 'バナナ', 'みかん']

// 配列の末尾の要素を削除する
const removeLastElement = fruits.pop();
console.log(fruits); //['りんご', 'バナナ']

// 配列の先頭の要素を削除する
const removeFirstElement = fruits.shift();
console.log(fruits); // ["バナナ"]

// 配列の先頭に要素を追加する
const addFirstElement = fruits.unshift('いちご');
console.log(fruits); //['いちご', 'バナナ']

// 配列の添字を取得する
// indexOf => 引数に与えられた内容と同じ内容を持つ最初の配列要素の添字を返します。存在しない場合は -1 を返します。
const position = fruits.indexOf('バナナ');
console.log(position); // 1

// 位置を指定して要素を削除する
const removedItem = fruits.splice(position, 1);
console.log(removedItem); // バナナ

// 位置から複数の要素を削除する
const vegettables = ['キャベツ', 'カブ', '大根', 'にんじん'];
const pos = 1;
const n = 2;
const removedItems = vegettables.splice(pos, n);
console.log(vegettables); // ['キャベツ', 'にんじん']
console.log(removedItems); // ['カブ', '大根']

// 配列をコピーする
const shallowCopy = fruits.slice();
console.log(shallowCopy); // ['いちご']

// 配列へのアクセス
const array = ['最初の要素', '2 番目の要素', '最後の要素'];
console.log(array[0]); //最初の要素
console.log(array[1]); // 2番目の要素
console.log(array[array.length - 1]); //最後の要素

// ----------------------------
// length と数値プロパティとの関係
// ----------------------------
// JSの配列のlengthプロパティと数値プロパティは関連している
// 配列の一部の組み込みメソッドは、配列のlengthプロパティの値はメソッドの呼び出し時の値を考慮する
const cars = [];
cars.push('アクア', 'プリウス', 'シエンタ');
console.log(cars.length); // 3

// JSの配列に、配列の添字として妥当なプロパティであり、かつ現在の配列の範囲の外にある添字を設定すると、
// エンジンは配列のlenthプロパティを更新する
cars[5] = 'カローラ'; // 配列の5番目に追加
console.log(cars[5]); // カローラ
console.log(cars); //['アクア', 'プリウス', 'シエンタ', empty × 2, 'カローラ']
console.log(Object.keys(cars)); // ['0', '1', '2', '5']
console.log(cars.length); // 6 - lenthプロパティが更新されている！配列の中に空の値が入っている。

// lenthの増加
// lengthプロパティの値を現在より大きな値に変更すると、配列内の要素数も増加する。
cars.length = 10;
console.log(cars); // ['アクア', 'プリウス', 'シエンタ', empty × 2, 'カローラ', empty × 4]
console.log(Object.keys(cars)); // ['0', '1', '2', '5']
console.log(cars.length); // 10
console.log(cars[8]) // undefined

// lengthの減少
// lengthプロパティの値を現在より小さな値に変更すると、配列内の要素数も減少する。
cars.length = 2;
console.log(cars); // ['アクア', 'プリウス']
console.log(Object.keys(cars)); // ['0', '1']
console.log(cars.length); //2

// ※length とは？
// Array.length - 配列の要素の数を設定または取得する。
// lengthプロパティは必ずしも配列内で定義された値の数を示しているわけではない。

// ----------------------------
// match の結果を利用して配列を作成
// ----------------------------
// 1文字の d と、続く1文字以上の b と、続く1文字の d に一致します
// 一致した b およびそれに続く d を記憶します
// 大文字小文字は区別しません
const myRe = /d(b+)(d)/i;
const myArray = myRe.exec('cdbBdbsbz');
console.log(myArray); //  ['dbBd', 'bB', 'd', index: 1, input: 'cdbBdbsbz', groups: undefined]

// ----------------------------
// 配列の生成
// ----------------------------
const msgArray = [];
msgArray[0] = 'Hello';
msgArray[99] = 'World';
console.log(msgArray); // ['Hello', empty × 98, 'World']
if ( msgArray.length === 100 ) {
    console.log("配列の length は 100 です。");
}

// ----------------------------
// 2次元配列を生成する
// ----------------------------
const board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r']
];
// arr.join([separator])
console.log(board.join('\n') + '\n\n'); // \n = 改行
// キングの前のポーンを 2 つ前へ移動
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));

// 配列を使って値のセットを表にする
const values = [];
for (let x = 0; x < 10; x++) {
    values.push([
        2 ** x,
        2 * x ** 2
    ]);
};
console.table(values);
// 0	1	0
// 1	2	2
// 2	4	8
// 3	8	18
// 4	16	32
// 5	32	50
// 6	64	72
// 7	128	98
// 8	256	128
// 9	512	162
