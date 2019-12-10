function split(wholeArray) {
    let halfway= Math.ceil(wholeArray.length/2)
    let firstHalf = wholeArray.slice(0, halfway)
    let secondHalf = wholeArray.slice(halfway)
    return [firstHalf, secondHalf]
  }




  function merge (arr1, arr2) {
      let newArr = arr1.concat(arr2)
    return newArr
  }