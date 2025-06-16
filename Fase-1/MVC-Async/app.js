"use strict"
import Controler from './controlers/controlers.js'

let command = process.argv[2]
let input = process.argv.slice(3)

if (command === 'read') Controler.requestRead()
if (command === 'info')  Controler.requestInfo()
if (command === 'add') Controler.requestAdd(input);
if (command === 'update')  Controler.requestUpdate(input)
if (command === 'delete')  Controler.requestDelete(input)
