function doit(n) {
	return new MyPromise((resolve) => {
		setTimeout(() => {
			resolve(parseInt(n) + 1000);
		}, n);
	});
}
function step1(n) {
	console.log('step1 with ', n);
	return doit(n);
}

function step2(n) {
	console.log('step2 with', n);
	return doit(n);
}
function step3(n) {
	console.log('step3 with', n);
	return doit(n);
}
function dodo() {
	console.time('dodo');
	const time1 = 200;
	step1(time1).then((time2) => step2(time2)).then((time3) => step3(time3));
	// .then(() => console.log('执行完毕'));
}

dodo();
