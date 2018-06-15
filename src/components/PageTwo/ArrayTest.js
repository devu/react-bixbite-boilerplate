/* eslint no-console:0 */
function testAll() {
  const isBigEnough = value => {
    return value >= 10
  }

  const iterations = 1000
  const elements = 10000

  const array = []
  for (var a = 0; a < elements; a++) {
    array.push(parseInt(Math.random() * 100))
  }

  let filteredA = []
  let filteredB = []
  let filteredC = []

  let t0 = performance.now()
  for (let p1 = 0; p1 < iterations; p1++) {
    filteredA = array.filter(isBigEnough)
  }

  let t1 = performance.now()
  console.log('Took: ' + (t1 - t0) + 'msecs', filteredA.length)

  let t2 = performance.now()
  for (let p2 = 0; p2 < iterations; p2++) {
    filteredB = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      if (isBigEnough(item)) {
        filteredB.push(item)
      }
    }
  }

  let t3 = performance.now()
  console.log('Took: ' + (t3 - t2) + 'msecs', filteredB.length)

  let t4 = performance.now()
  for (let p3 = 0; p3 < iterations; p3++) {
    filteredC = []
    array.map(item => {
      if (isBigEnough(item)) {
        filteredC.push(item)
      }
    })
  }

  let t5 = performance.now()
  console.log('Took: ' + (t5 - t4) + 'msecs', filteredC.length)

  const arrayI8 = new Int8Array(10000);
  for (var b = 0; b < 10000; b++) {
      arrayI8[b] = (parseInt(Math.random() * 100))
  }

  let start = performance.now()
  let filtered
  for (let p2 = 0; p2 < 1000; p2++) {
      filtered = new Int8Array(10000);
      for (let i = 0; i < 10000; i++) {
      const item = arrayI8[i]
      if (isBigEnough(item)) {
              filtered[i] = item
          }
      }
  }

  let end = performance.now()
  console.log('Took: ' + (end - start) + 'msecs')
}

testAll()