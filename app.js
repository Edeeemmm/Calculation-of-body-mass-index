
const inputWeight = document.querySelector('.weight');
const inputGrowth = document.querySelector('.growht');

const calculeteButton = document.querySelector('.calc_btn');
const resultBmi = document.querySelector('.result_BMI');

const resetButton = document.querySelector('.reset_button');

calculeteButton.addEventListener('click', () => {
    processingBmi();
});
const calcBMI = (weight, growth) => {
// calcullete BMI 
// weight: takes the value of a person's weight
// growth: takes the value of human height
// return: the BMI calculation
// If a non-number is entered, it will return - "You entered a non-number"

    if (Number(weight) && Number(growth)) {
        return  Math.round (weight / (growth * growth))
    };
    return 'Вы ввели не числа';
};

const processingBmi = () => {
    const bmi = calcBMI(inputWeight.value, inputGrowth.value);
    resultBmi.value = bmi
};
// button_reset
resetButton.addEventListener('click', () => {
    inputWeight.value = null;
    inputGrowth.value = null;
    resultBmi.value = null;
});







