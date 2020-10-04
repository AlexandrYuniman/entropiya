let fs = require('fs');
let s = fs.readFileSync('input.txt');
s += '';
let alph = new Array();
for (let i = 0; i < s.length; i++) {
	alph[s.charAt(i)] = 0;
}
for (let i = 0; i < s.length; i++) {
	alph[s.charAt(i)]++;
}
let h = 0;
let n = 0;
for (let i in alph) {
	alph[i] /= s.length;
	n++
}
for (let i in alph) {
	h -= alph[i] * Math.log2(alph[i]);
}
if (n == 1) console.log(0);
else {
	h /= Math.log2(n);
	console.log(h);
}


