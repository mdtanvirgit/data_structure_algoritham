
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i+1; j < array.length; j++) {
            if(array[j]<array[min]){
                min = j;
            }            
        }
        const temp = array[i];
        array[i] = array[min];
        array[min] = temp;
        
    }
    return array;
}

console.log(selectionSort([20,4,7,6,3,0,-10]))