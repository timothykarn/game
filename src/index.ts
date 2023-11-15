export function add(num1: number, num2: number) : number {
    if (isNaN(num1) || isNaN(num2)) return undefined;
    return num1 + num2;
}