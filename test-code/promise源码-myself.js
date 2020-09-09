/* 
1.Promise 有三个状态 pedinged fulfilled rejected  每个状态只能从pedinged 转换成fulfilled 或 rejected 只能转换一次
2. Promise 接受executor函数，executor 函数接受 resolve reject 两个函数为参数
3. Promise 有onFulfilled 和 onRejected 两个数组，保存resolve完成后执行的函数，以及保存reject完成后执行的函数

*/
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function MyPromise(executor) {
	let self = this;
	self.status = PENDING;
	self.onFulfilled = [];
	self.onRejected = [];
	function resolve(value) {
		if (self.status === PENDING) {
			self.status = FULFILLED;
			self.value = value;
			self.onFulfilled.forEach((fn) => fn());
		}
	}
	function reject(reason) {
		if (self.status === PENDING) {
			self.status = REJECTED;
			self.reason = reason;
			self.onRejected.forEach((fn) => fn());
		}
	}
	try {
		executor(resolve, reject);
	} catch (error) {
		reject(error);
	}
}

/* 
    then方法挂在 Promise的原型上面,
    then方法接受两个参数，onFulfilled 以及 onRejected 两个函数
    如果onFulfilled 以及 onRejected，如果不是函数，则重写成返回value或reason的函数
    then方法返回一个Promise2  
    then 方法中如果Promise为Fulfilled状态 则立即执行 onFulfilled 
    then 方法中如果Promise为Rejected状态 则立即执行 onRejected
    then 方法中如果Promise为Pending状态 则将 onFulfilled 和 onRejected 保存在Promise的 onFulfilled数组 和 onRjected数组
    无论onFulfilled 和 onRejected 执行后返回的什么值，都将这个值丢进resolvePromise()方法中，让resolvePromise()方法来处理Promise链式调用
    如果onFulfilled 和onRejected 执行的时候发生异常将异常 通过reject送出去
    
*/
MyPromise.prototype.then = function(onFulfilled, onRejected) {
	onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
	onRejected =
		typeof onRejected === 'function'
			? onRejected
			: (reason) => {
					throw reason;
				};
	let Promise2 = new MyPromise((resolve, reject) => {
		let self = this;
		if (self.status === FULFILLED) {
			try {
				setTimeout(() => {
					let x = onFulfilled(self.value);
					resolvePromise(Promise2, x, resolve, reject);
				});
			} catch (e) {
				reject(e);
			}
		} else if (self.status === REJECTED) {
			try {
				setTimeout(() => {
					let x = onRejected(self.reason);
					resolvePromise(Promise2, x, resolve, reject);
				});
			} catch (e) {
				reject(e);
			}
		} else {
			self.onFulfilled.push(() => {
				try {
					setTimeout(() => {
						let x = onFulfilled(self.value);

						resolvePromise(Promise2, x, resolve, reject);
					});
				} catch (e) {
					reject(e);
				}
			});
			self.onRejected.push(() => {
				try {
					setTimeout(() => {
						let x = onRejected(self.value);
						resolvePromise(Promise2, x, resolve, reject);
					});
				} catch (e) {
					reject(e);
				}
			});
		}
	});
	return Promise2;
};
// 如果x 与promise2 相等说明存在异常
// resolvePromise是为了处理的Promise的链式调用而存在的
// 如果 x 是promise、thenable、function 将提前执行 x.then方法，拿到x.resolve 所传递的值
// 否则 直接resolve到下个 链式的.then方法中
//
function resolvePromise(promise2, x, resolve, reject) {
	if (promise2 === x) [ reject(new TypeError('Chainning cycle')) ];
	if ((x && typeof x === 'object') || typeof x === 'function') {
		try {
			let then = x.then;
			if (then === 'function') {
				then.call(
					x,
					(y) => {
						resolvePromise(promise2, y, resolve, reject);
					},
					(r) => {
						reject(r);
					}
				);
			} else {
				resolve(x);
			}
		} catch (e) {
			reject(e);
		}
	} else {
		resolve(x);
	}
}
