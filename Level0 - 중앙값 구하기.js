function solution(array) {
  const mid = (array.length - 1) / 2;
  // 삽입 정렬
  // for (let i=0; i<array.length; i++) {
  //     for (let j=i+1; j<array.length; j++) {
  //         if (array[i] > array[j]) {
  //             [array[i], array[j]] = [array[j], array[i]];
  //         }
  //     }
  // }
  array = array.sort((a, b) => a - b);
  return array[mid];
}
