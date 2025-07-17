let a = 1;
for (let i = 1; i <= 5; i++) {
  a = a + i;
}
console.log("sum of the first 5 number is :", a);

setTimeout(() => {
  console.log("this is the set time out function");
}, 2000);
