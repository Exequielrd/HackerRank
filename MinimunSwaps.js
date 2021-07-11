function minimumSwaps(arr) {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i],
      index = arr.indexOf(value) + 1
    if (value != index) {
      let newValue = arr[value - 1]
      arr.splice(value - 1, 1, value)
      arr.splice(index - 1, 1, newValue)

      count++
      i--
    }
  }

  return count
}

const result = minimumSwaps([1, 3, 5, 2, 4, 6, 7])
