function fibonacci(number: number): number {
    if (number == 0) {
        return 0;
    } else if (number == 1) {
        return 1;
    } else {
        return fibonacci(number -1) + fibonacci(number-2);
    }
}

let sum = 0;
console.log(`Day fibonacci:`)
for (let i = 0; i < 20; i++) {
    sum+=fibonacci(i);
    console.log(fibonacci(i))
}
console.log("tong cac so fibonacci:" + sum);