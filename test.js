const path = require("path");
const { deepReadDir } = require("./readFiles.js");

(function (){
	if (!!process.argv[2] && !!process.argv[3]){
		if (path.isAbsolute(process.argv[2])){
			console.log(deepReadDir(path.normalize(process.argv[2])))
		}else {
			const _path = path.resolve(); 
			const name = path.resolve(_path, process.argv[2])
			console.log(deepReadDir(name))
		}
	}else {
		console.error('place input directory name and file name')
	}
})()