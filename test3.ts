export class MyClass3 {
    height: number;
    weight: number;

    constructor(height: number, weight: number) {
        this.height = height || 0;
        this.weight = weight || 0;
    }

    calcArea() {
        return Math.round((this.height * this.weight) / 2);
    }
}


//What do the keyword "export" ? export use for export function and objects from module
//Which is difference between INT32, INT64 and NUMBER ? Typescript support only number
//Write below line of code to round the result of "calcArea()" to 2 decimal digits
calcAreaResult = Math.round(calcAreaResult * 100) / 100;
//Can you explain line 6 and 7 ? set default value (better use ??)
//Can you write below a line of code to call the method "calcArea()"
new MyClass3(height, weight).calcArea()
//Can you write same class above (add lines of code here below) but without make it instantiable ?
export class NotInstantiableMyClass3 {
    height: number;
    weight: number;

    private constructor(height: number, weight: number) {
        this.height = height || 0;
        this.weight = weight || 0;
    }

    calcArea() {
        return Math.round((this.height * this.weight) / 2);
    }
}