/**
 * 
 * ! MVC sangat penting, belajar bro!
 * 
 * 
 * fs = file system (node.js)
 * fs.readFileSync(path[,options])
 * 
 * * declare fs
 * ? const  fs = require ('fs')
 *  
 * * return string 
 * ? fs.readFileSync('./<filename>', 'utf-8') 
 * 
 * * return string to original type of data for manipulating/updating purposes with js
 * + let data = fs.readFileSync('./<filename>', 'utf-8')
 * ? JSON.parse (data) 
 * 
 * * send back data to string for store the updated/manipulated data to external file
 * ? data = JSON.stringify(data, null => id replacer, 4 => total {} space from start line = for pretier)
 * 
 * * write/manipulate external file
 * ? fs.writeFileSync('./<create updated filename or replace with the same json file name>', data)
 * 
 */

