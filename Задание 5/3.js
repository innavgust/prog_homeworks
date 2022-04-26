class CustomerBase {
    constructor() {
      this.customers = [];
    }
  
    addCustumers(customer) {
      this.customers.push(customer);
    }
  }
  
  class Customer {
    constructor(lastName, firstName, partonymic, address, cardNumber, bankNumber) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.partonymic = partonymic;
      this.address = address;
      this.cardNumber = cardNumber;
      this.bankNumber = bankNumber;
    }
  
    changeCustomer () {
      this.lastName = prompt("Введите Фамилию: ");
      this.firstName = prompt("Введите Имя: ");
      this.partonymic = prompt("Введите Отчесвто: ");
      this.address = prompt("Введите адрес: ");
      this.cardNumber = Number(prompt("Введите номер банковской карты: "));
      this.bankNumber = Number(prompt("Введите номер банковского счета: "));
    }
  
    enterSomeCustomer () {
      let k = Number(promt("Выберите номер нужной характеристики:\n 1 - ФИО\n 2 - адрес\n 3 - номер карты\n 4 - номер банковского счета\n >>"));
      if (k === 1) {
        console.log("ФИО: " + this.lastName + " " + this.firstName + " " + this.patronymic);
      } else if (k === 2) {
        console.log("Адрес: " + this.address);
      } else if (k === 3) {
        console.log("Номер карты: " + this.cardNumber);
      } else if (k === 4) {
        console.log("Номер банковского счета: " + this.bankNumber);
    }
  }
    
    enterCustomer () {
      console.log("ФИО: " + this.lastName + " " + this.firstName + " " + this.partonymic + "\nАдрес: " + this.address + "\nНомер карты: " + this.cardNumber + "\nНомер банковского счета: " + this.bankNumber);
    }
}

const customerBase = new CustomerBase ();

const customer1 = new Customer ("Лавров", "Сергей", "Викторович", "улица Варшавская, дом 3", 1234, 4321);
customerBase.addCustumers (customer1);

const customer2 = new Customer ("Жириновский", "Владимир", "Вольфович", "проспект Новоизмайловский, дом 8", 5678, 8765);
customerBase.addCustumers (customer2);

const customer3 = new Customer ("Собянин", "Сергей", "Семенович", "улица Авиационная, дом 11", 9012, 2109);
customerBase.addCustumers (customer3);

const customer4 = new Customer ("Песков", "Дмитрий", "Сергеевич", "улица Гастелло, дом 4", 3456, 6543);
customerBase.addCustumers (customer4);

let sortCustomers = [];

sortCustomers = customerBase.customers.sort(function(a, b) {
  return (b.lastName < a.lastName) - (a.lastName < b.lastName);
});

//console.log(sortCustomers);

function sortCards () {
  let sortCard = [];
  let a = Number(prompt("Введите НИЖНЮЮ границу диапазона номера кредитной карты: "));
  let b = Number(prompt("Введите ВЕРХНЮЮ границу диапазона номера кредитной карты: "));

  for (let i = 0; i < customerBase.customers.length; i++) {
    if ((customerBase.customers[i].cardNumber > a) && (customerBase.customers[i].cardNumber < b)) {
      sortCard.push(customerBase.customers[i]);
    }
  }
  return sortCard;
}

console.log(sortCards()) //1233, 3457 - Лавров(1234) и Песков(3456)