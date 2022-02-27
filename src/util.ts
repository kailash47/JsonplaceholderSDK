export class Util{
    constructor(){}

    public static isString(str: string | any): boolean {
        return (typeof str === 'string' || str instanceof String);
    };
    
    public static isStringEmpty(str: string | any): boolean {
        if (!Util.isString(str)) return false;
        return (str.length == 0);
    };
    
    public static isDate(date: any): boolean {
        if (Util.isString(date) || Util.isArray(date) || date == undefined || date == null) return false;
        return (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date));
    };
    
    public static isObject(obj: object | any): boolean {
        if (Util.isArray(obj) || Util.isDate(obj)) return false;
        return (obj !== null && typeof obj === 'object');
    };
    
    public static isNumber(num: number | any): boolean {
        return (!isNaN(num) && !isNaN(parseInt(num)));
    };
    
    public static isArray(arr: object | any): boolean {
        return Array.isArray(arr);
    };
}

