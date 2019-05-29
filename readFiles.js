const fs = require("fs")
const path = require("path")

function deepReadDir(directoryOrFileName) {
	try {
		let arr = [];
		const files = fs.readdirSync(directoryOrFileName, {withFileTypes: true});
		files.forEach(item=> {
			if (item.isDirectory()){
				arr = arr.concat(deepReadDir(directoryOrFileName+path.sep+item.name))
			}else if(item.isFile() && item.name === process.argv[3]) {
				arr.push(directoryOrFileName+path.sep+item.name)
			}
		})
		return arr;
	}catch(e){
		console.error(e)
		return []
	}
}

exports.deepReadDir = deepReadDir;