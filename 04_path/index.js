import { log } from 'console';
import path from 'path'

// join two or more files 
const fullpath = path.join('/path','file.java')
console.log(fullpath);

// absolute path 
const abspath = path.resolve('folder','file.txt')
console.log(abspath);


// check file directory 
const dirname = path.dirname('/path/to/main.java')
console.log(dirname);

// base path or current path
const basepath = path.basename('/public/java/constructor.java')
console.log(basepath);

// extension name
const extname = path.extname('myvideo.mp3')
console.log(extname);
