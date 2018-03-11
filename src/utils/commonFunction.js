/**
 * Created by mapbar_front on 2018/3/11.
 */
function getType(value) {
    if(arguments.length !== 1){
        throw new TypeError("参数必须仅仅一个!");
    }
    if(Object.prototype.toString.call(value) == "[object Object]"){
        return "object";
    } else if(Object.prototype.toString.call(value) == "[object Array]"){
        return "array";
    } else if(Object.prototype.toString.call(value) == "[object Number]"){
        return "number";
    } else if(Object.prototype.toString.call(value) == "[object String]"){
        return "string";
    } else if(Object.prototype.toString.call(value) == "[object Function]"){
        return "function";
    } else if(Object.prototype.toString.call(value) == "[object Boolean]"){
        return "boolean";
    } else if(Object.prototype.toString.call(value) == "[object Null]"){
        return "null";
    } else if(Object.prototype.toString.call(value) == "[object Undefined]"){
        return "undefined";
    } else {
        throw new Error("这是一个未知的类型!");
    }

}

function isEqual(value1, value2) {
    var isequal = true;
    if (getType(value1) !== getType(value2)){
        return false;
    }
    if(typeof value1 != "object"){
        return value1 === value2;
    } else {

        for(var i in value1) {
            if(!arguments.callee(value1[i], value2[i])){
                isequal = false;
            }
        }
        for(var j in value2){
            if (!arguments.callee(value1[j], value2[j])){
                isequal = false;
            }
        }
        return isequal;
    }
}

function clone(obj) {
    if(arguments.length !== 1){
        throw new Error("parameter is undefined");
    }
    //如果是值类型，直接返回
    if(typeof obj !== "object"){
        return obj;
    }
    //如果是Array类型
    if(obj instanceof Array){
        var arr = new Array();

        for(var i = 0, len = obj.length; i < len; i++){
            if(typeof obj[i] === "object"){
                arr.push(clone(obj[i]));
            } else {
                arr.push(obj[i]);
            }
        }
        return arr;
    }
    //如果是Object类型
    if(obj instanceof Object){
        var current = new Object();
        for(var i in obj){
            if(typeof obj[i] === "object"){
                current[i] = clone(obj[i]);
            } else {
                current[i] = obj[i];
            }
        }
        return current;
    }
    //如果是Null
    if(obj === null){
        return null;
    }
    //如果是自己未知的类型
    throw new Error("not supported this type data!");
}

export default {
    isEqual,
    getType,
    clone
}