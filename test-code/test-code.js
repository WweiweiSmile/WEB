// function doit(n) {
// 	return new MyPromise((resolve) => {
// 		setTimeout(() => {
// 			resolve(parseInt(n) + 1000);
// 		}, n);
// 	});
// }
// function step1(n) {
// 	console.log('step1 with ', n);
// 	return doit(n);
// }

// function step2(n) {
// 	console.log('step2 with', n);
// 	return doit(n);
// }
// function step3(n) {
// 	console.log('step3 with', n);
// 	return doit(n);
// }
// function dodo() {
// 	console.time('dodo');
// 	const time1 = 200;
// 	step1(time1).then((time2) => step2(time2)).then((time3) => step3(time3)).then(() => console.log('执行完毕了'));
// 	// .then(() => console.log('执行完毕'));
// }

// dodo();

let resolvePromise2 = new MyPromise((resolve) => {
	let resolvedPromise = new MyPromise((resolve) => {
		resolve();
	});
	resolve(resolvedPromise);
});
resolvePromise2.then((value) => {
	console.log(value);
	console.log('resolvePromise2 resolved');
});
let resolvedPromiseThen = new MyPromise((resolve) => {
	resolve();
}).then((res) => {
	console.log('promise1');
});
resolvedPromiseThen
	.then(() => {
		console.log('promise2');
	})
	.then(() => {
		console.log('promise3');
	});

// let resolvePromise2 = new Promise((resolve) => {
// 	let resolvedPromise = Promise.resolve();
// 	resolve(resolvedPromise);
// });
// resolvePromise2.then((value) => {
// 	console.log(value);
// 	console.log('resolvePromise2 resolved');
// });
// let resolvedPromiseThen = Promise.resolve().then((res) => {
// 	console.log('promise1');
// });
// resolvedPromiseThen
// 	.then(() => {
// 		console.log('promise2');
// 	})
// 	.then(() => {
// 		console.log('promise3');
// 	});
