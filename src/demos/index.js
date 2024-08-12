function testTypeofRet(){
    let targetArr = [undefined , 0 , 10n , true, "foo", Symbol('id'), Math, null, console ]
    let result = []
    for(let i of targetArr){
        // console.log(typeof i )
        result.push(typeof i)
    }
    return result
}

function dataTypeConversion(){
    let targetArr = [1,0,NaN, "1","","0","-1","1.1","01","  1  ","1yayxs",true,false,null,undefined,Symbol('id'), [1],[],{name:'yayxs'},{},()=>{}]

    let toString = []
    let toNumber =[]
    for(let i of targetArr){
         i = String(i)

        toString.push(i)
        toNumber.push(Number(i))
    }
    // console.log(toString)
    console.log(toNumber) //  [1, 0, NaN, 1, 0, 0, -1, 1.1, 1, NaN, NaN, NaN, NaN, NaN, 1, 0, NaN, NaN, NaN]
}