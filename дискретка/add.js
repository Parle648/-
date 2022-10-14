let inputs = document.querySelectorAll('.input-plenty'),
    inputOne = inputs[0].value,
    inputTwo = inputs[1].value;

const resultBtn = document.querySelector('.button-result');

const wrapper = document.querySelector('.wrapper');

resultBtn.onclick = function(){
    let onePlenty = [...inputs[0].value],
        twoPlenty = [...inputs[1].value];

    const arr = [];
    const arr2 = [];

    createArray(onePlenty, arr);
    createArray(twoPlenty, arr2);

    const UnitedArray = arr.concat(arr2);

    Sortarray(UnitedArray);

    if(select.value === '1'){
        let returnArray = Array.from(new Set(UnitedArray));

        createResultBlock(returnArray);
    }

    if(select.value === '2'){
        const resultArrayAcross = [];
        let g = [];

        for(let i =0; i <= arr.length; i++){
            for(let j =0; j <= arr2.length; j++){
                if(arr[i] === arr2[j]){
                    resultArrayAcross.push(arr2[j])
                }
            }
        }

        Sortarray(resultArrayAcross);

        g = Array.from(new Set(resultArrayAcross));

        createResultBlock(g);
    }

    if(select.value === '3'){
        const resultArrayMinus = [];
        let r = [];

        for(let i =0; i <= arr.length; i++){
            if(!(arr2.includes(arr[i]))){
                r.push(arr[i]);            
            }
        }

        createResultBlock(r);
    }

    if(select.value === '4'){
        const resultSimetr = [];

        for(let i =0; i <= arr.length; i++){
            for(let j =0; j <= arr2.length; j++){
                if(arr[i] === arr2[j]){
                    resultSimetr.push(arr2[j])
                }
            }
        }
        
        const endArray = [];

        for(let i =0; i <= UnitedArray.length; i++){
            if(!(resultSimetr.includes(UnitedArray[i]))){
                endArray.push(UnitedArray[i])
            }
        }

        createResultBlock(endArray);
    }
};

const select = document.querySelector('.select');

function createArray(needArray, pushedArray){
    let newNumber = '';

    for(let key in needArray){

        if(needArray[key] === ' '){

            pushedArray.push(newNumber);
            newNumber = ''; 
        }
        else if(needArray[Number(key) + 1] === undefined){
            newNumber += needArray[key];

            pushedArray.push(newNumber);
            newNumber = '';
        }
        else{
            newNumber += needArray[key];
        }
    }

    pushedArray = pushedArray.reduce((accumulator, currentValue) => {
        const item = currentValue.trim()
    
        if (item !== '') {
            accumulator.push(item);
        }
    
        return accumulator;
    }, []);

}

function Sortarray(array){
    array.sort((a,b) => {
        return a - b
    })
}

function createResultBlock(elem){
    let block = document.createElement('div');
    block.textContent = elem;
    block.classList.add('forResult');

    wrapper.appendChild(block)
}