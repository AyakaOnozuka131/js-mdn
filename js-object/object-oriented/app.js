// ----------------------------
// コンストラクターとオブジェクトインスタンス
// ----------------------------
// JavaScriptでは、オブジェクトやその機能を定義し初期化するためにコンストラクター関数という特殊な関数を使用する。

// ## コンストラクター関数を使わない場合
// ----------------------------
// function createNewPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.greeting = function() {
//     alert('Hi! I\'m ' + obj.name + '.');
//   };
//   return obj;
// }
// const salva = createNewPerson('Salva');
// salva.name;
// salva.greeting();

// ## コンストラクター関数を使用
// ----------------------------
// 参考：https://ja.javascript.info/constructor-new
// function Person(name) {
// 	// this = {};  (暗黙)
// 	this.name = name;
// 	this.greeting = function() {
// 			alert('Hi! I\'m ' + this.name + '.');
// 	};
// 	// return this;  (暗黙)
// }
// let person1 = new Person('Bob');
// let person2 = new Person('Sarah');

// ### 新しいオブジェクトが生成された後、 person1 および person2 変数は、次のオブジェクトを格納している。
// 以下の例は、コンストラクター関数を呼び出すとき毎回 greeting() メソッドを定義してしまっているが、
// これを回避するために、代わりにプロトタイプに関数を定義することができる
// {
//   name: 'Bob',
//   greeting: function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   }
// }
// {
//   name: 'Sarah',
//   greeting: function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   }
// }

// ## 最終的なコンストラクターの作成
// ----------------------------
function Person(first, last, age, gender, interests) {
	this.name = {
		first : first,
		last : last
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
	this.bio = function() {
		alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
	};
	this.greeting = function() {
		alert('Hi! I\'m ' + this.name.first + '.');
	}
};

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);


// ## オブジェクトインスタンスを生成する他の方法
// ----------------------------
// Object() コンストラクターを新しいオブジェクトの生成のために使うことができる。
// let person1 = new Object();

// Object()コンストラクターに引数としてオブジェクトリテラルを渡すこともできる。
// let person1 = new Object({
//   name: 'Chris',
//   age: 38,
//   greeting: function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   }
// });

// ### create()メソッドの使用
// 最初にコンストラクターを作らずにインスタンスを生成することもできる
// let person2 = Object.create(person1);
