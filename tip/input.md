### javascript Input/Output

#### 입력 1개
```javascript
// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = 0;

rl.on("line", function(line) {
	input = Number(line);
	rl.close();
}).on("close", function() {
	const result = solution(input);
	console.log(result);
	process.exit();
});
```


#### 한 줄 입력 여러개



#### 여러줄
