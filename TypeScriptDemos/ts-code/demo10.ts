// 函数重载
function hello(name: string): string
function hello(age: number): number

function hello(params: any): any {
    if (typeof params === `string`) {
        return params
    } else if (params === `number`) {
        return params
    }
}

let str: string = `yayxs`;
str!.substring(0, 1)