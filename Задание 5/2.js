class Value {
    constructor (a, b) {
      this.a = a;
      this.b = b;
    }
  
    enterValue () {
      console.log ("Значение переменной a: " + this.a);
      console.log ("Значение переменной b: " + this.b);
    }
  
    changeValue () {
      this.a = Number(prompt("Введите значение переменной a: "));
      this.b = Number(prompt("Введите значение переменной b: "));
    }
  
    sumValue () {
      let sum = this.a + this.b;
      console.log("Сумма переменных равна " + sum);
    }
  
    maxValue () {
      let max = 0;
      if (this.a > this.b) {
        max = this.a;
      } else {
        max = this.b;
      }
  
      console.log("Максимальное значение: " + max)
    }
    
  }
  
  const value = new Value (5, 7);
  value.enterValue();
  value.changeValue();
  value.enterValue();
  value.sumValue();
  value.maxValue();