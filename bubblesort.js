const bubbleSort = (arr) => {
    if (!arr.length){return []}


    let sortedArr = []; 

    while (arr.length) {
        for (let i = 0; i < arr.length; i++) {
            let currentIndex = arr[i]; 
            let nextIndex = arr[i+1]
            if (arr[i] > arr[i+1]){
                arr[i] = nextIndex;
                arr[i+1] = currentIndex
            }
        }
        sortedArr.unshift(arr.pop())
        
    }
return sortedArr

}