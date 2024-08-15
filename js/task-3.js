function getElementWidth(content, padding, border) {
  let res = 0;
  res += Math.round(content.slice(0, -2));
  res += Math.round(padding.slice(0, -2) * 2);
  res += Math.round(border.slice(0, -2) * 2);
  return res;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
