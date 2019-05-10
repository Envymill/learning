var money = prompt("Ваш бюджет на месяц?", '');
var time = prompt("Введите дату в формате YYYY-MM-DD", '');

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

let q1 = "Введите обязательную статью расходов в этом месяце:",
    q2 = "Во сколько обойдется?",
    q3 = "Введите обязательную статью расходов в этом месяце:",
    q4 = "Во сколько обойдется?";

appData.expenses.q1 = q2;
appData.expenses.q3 = q4;

alert(appData.budget / 30);