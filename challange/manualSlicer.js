/**
 * 
 * Manual Slicer
 * 
 * diberikan sebuang fungsi dengan parameter, Data, Start, End
 * start = inclusive
 * end = exclusive
 * 
 * example:
 * ['ant', 'bison', 'camel', 'duck', 'elephant']
 * console.log(manualSlicer(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)) // ['camel'.'duck']
 * console.log(manualSlicer(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)) // ['camel'.'duck', 'elephant']
 * 
 */

let dataSet = ['ant', 'bison', 'camel', 'duck', 'elephant']

function manualSlicer (data, start, end) {
    let dataExclude = [];
    let dataInclude = [];
    let messageBox = ""

    if(!data) {
        messageBox = "invalid Data";
        return messageBox;
    } else {
        for (let i = 0; i < data.length; i ++) {
            if (i < start) {
                dataExclude.push(data[i]);
            } else if (i >= end) {
                dataExclude.push(data[i]);
            } else {
                dataInclude.push(data[i]);
            };
        };
    };
    return dataInclude;
};
console.log(manualSlicer(['ant', 'bison', 'camel', 'duck', 'elephant'],2,4));


