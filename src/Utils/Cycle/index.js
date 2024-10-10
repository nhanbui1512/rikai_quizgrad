function cycle(...props) {
  let index = 0;
  return function () {
    const result = props[index];
    index = (index + 1) % props.length;
    return result;
  };
}

const onOffFn = cycle("on", "off");
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
