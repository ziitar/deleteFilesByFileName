const fs = require("fs")
const path = require("path")
const Async = require("async")
const { deepReadDir } = require("./readFiles.js")


function unlinkFiles(name){
	const files = deepReadDir(name);
	Asnyc.each(files, (item, callback)=>{
		fs.unlink(item, (err)=> {
			if (err)  callback(err, null);
			callback(null, item+' was deleted')
		})
	}, (err, result)=> {
		if (err) console.log(err);
		console.log(result)
	})
}

(function (){
	if (!!process.argv[2] && !!process.argv[3]){
		if (path.isAbsolute(process.argv[2])){
			unlinkFiles(path.normalize(process.argv[2]))
		}else {
			const _path = path.resolve(); 
			const name = path.resolve(_path, process.argv[2])
			unlinkFiles(name)
		}
	}else {
		console.error('place input directory name and file name')
	}
})()
