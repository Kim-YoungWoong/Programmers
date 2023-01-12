const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

const solution = (s) => {
  for (let i = s.length; i >= 1; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      if (isPalindrome(s.slice(j, i + j))) return i;
    }
  }
  return 1;
};
