"strict use";

//1. Создать функцию, которая принимает массив в качестве аргумента и возвращает среднюю цену автомобилей с пробегом < 50000. А также вторую функцию, которая возвращает массив с марками этих авто
let cars = [
    { model: "Jeep", price: 50000, carMileage: 40000 },
    { model: "Audi", price: 46000, carMileage: 80000 },
    { model: "BMW", price: 32000, carMileage: 340000 },
    { model: "Kia", price: 67500, carMileage: 70000 },
    { model: "Geely", price: 22000, carMileage: 49000 },
]

//1 через forEach

function showAveragePrice(arr) {
    let getPrice = [];
    let sum = 0;

    arr.forEach((item) => {
        if (item.carMileage < 50000) {
            getPrice.push(item.price)
            sum += item.price;
        }

    });

    return sum / getPrice.length;
};
let result = showAveragePrice(cars);
console.log(result);



//2    через REDUCE    //не получилось 
function getAverageCarPrice(arr) {
    let sumFilteredCars = arr.reduce((acc, item) => {
            if (item.carMileage < 50000) {
                return acc + item.price;
            };
            return acc;
        },
        0);
    console.log(sumFilteredCars);
    return sum / sumFilteredCars.length;
};
console.log(getAverageCarPrice(cars));




function getCarModels(arr) {
    let showCars = [];
    arr.forEach((item) => {
        showCars.push(item.model)
    });
    return showCars;
}
result = getCarModels(cars);
console.log(result);