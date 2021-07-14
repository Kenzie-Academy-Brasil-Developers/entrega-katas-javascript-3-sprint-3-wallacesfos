let a = 1
let b = 10
let c = -119

let delta = (Math.pow(b, 2)) + ((-4 * a) * c)


let px = (-b + Math.sqrt(delta)) / (2 * a);
let sx = (-b - Math.sqrt(delta)) / (2 * a);

console.log(px, sx)