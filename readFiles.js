const fs = require("fs")
const path = require("path")

function deepReadDir(directoryOrFileName, reg) {
	try {
		let arr = [];
		const files = fs.readdirSync(directoryOrFileName, {withFileTypes: true});
		files.forEach(item=> {
			if (item.isDirectory()){
				arr = arr.concat(deepReadDir(directoryOrFileName+path.sep+item.name, reg))
			}else if(item.isFile() && (item.name.search(reg)) !== -1) {
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