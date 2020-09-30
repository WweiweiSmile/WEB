const data = { a: 1, b: 'test' };
const tmpl = 'this is a = {{ a }}, this is b = {{ b }}';
console.log(tmpllat(tmpl, data));
function tmpllat(tmpl, data) {
	let tmplXB = [];
	let tmplInfo = [];
	let tmplStr = '';
	// 找到模版字符串，并将相关的信息 保存到tmplInfo数组中
	for (let i = 0; i < tmpl.length; i++) {
		if (tmpl[i] === '{' && i + 1 < tmpl.length && tmpl[i + 1] === '{') {
			tmplXB.push(i);
		}
		if (tmpl[i] === '}' && i + 1 < tmpl.length && tmpl[i + 1] === '}') {
			let start = tmplXB.pop();
			let temp = tmpl.slice(start + 2, i).trim();
			tmplInfo.push({
				str: data[temp],
				start: start,
				end: i + 1
			});
		}
	}
	// 如果没有模版字符串 直接返回
	if (tmplInfo.length === 0) {
		return tmpl;
	}
	// 如果有模版字符串，开始替换
	for (let i = 0, start = 0; i < tmplInfo.length; i++) {
		let temp = tmplInfo[i];
		tmplStr += tmpl.slice(start, temp.start);
		tmplStr += temp.str;
		start = temp.end + 1;
		// 如果这是最后一个模版字符串，将后面的字符串加起来
		if (i + 1 === tmplInfo.length) {
			tmplStr += tmpl.slice(start, tmpl.length);
		}
	}
	return tmplStr;
}
