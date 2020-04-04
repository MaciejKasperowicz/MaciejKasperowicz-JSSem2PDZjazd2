// 4) Write a code that multiplies two matrices together.
//Dimension validation required.
// pierwsza macierz ma tyle kolumn, co druga wierszy
"use strict";

const arr1 = [
  [-2, -3, 1, 2],
  [-1, 4, 0, 2],
  [-1, 4, 0, 4],
  [-1, 4, 0, 4]
];

const arr2 = [
  [-2, -1, 2, 5],
  [3, 0, 1, 5],
  [2, 2, -1, 5],
  [2, 2, 2, 5]
];
// const arr2 = "dadad";

class Result {
  constructor(firstArr, secondArr) {
    this.firstArr = firstArr;
    this.secondArr = secondArr;
  }
  calculate() {
    if (!Array.isArray(this.firstArr) || !Array.isArray(this.secondArr)) {
      console.log("You must enter 2 matrices.");
      return;
    }

    if (!this.firstArr.every(element => element.every(item => typeof item === "number")) ||
      !this.secondArr.every(element => element.every(item => typeof item === "number"))) {
      console.log("You can use only numbers in matrice.");
      return;
    }
    if (!this.firstArr.every(element => element.length === this.firstArr[0].length) ||
      !this.secondArr.every(element => element.length === this.secondArr[0].length)) {
      console.log("Each row in matrice must have same length.");
      return;
    }

    const firstArrRows = this.firstArr.length;
    const firstArrCols = this.firstArr[0].length;

    const secondArrRows = this.secondArr.length;
    const secondArrCols = this.secondArr[0].length;

    if (!(firstArrCols === secondArrRows)) {
      console.log("The first matrice must have same number of columns, as second rows.");
      return;
    }
    const arr = []; //tablica pomocnicza
    const reducedArr = []; //tablica ze zsumowanymi wynikami z arr
    const finalResult = []; //macierz zawierajaca tablice(rzedy) z reducedArr
    let i = 0;
    let j = 0;
    let k = 0;
    for (; k < firstArrRows; k++) {
      for (; j < secondArrCols; j++) {
        for (; i < firstArrCols; i++) {
          // console.log("i:", i, "j:", j);
          // console.log(this.firstArr[k][i] * this.secondArr[i][j]);
          ///////////////////////////////dany rzad razy kazda kolumna
          arr.push(this.firstArr[k][i] * this.secondArr[i][j]);

        }
        // console.log("arr", i, arr);
        //////////////odbywa sie sumowanie wartosci z przemnozenia
        /////////////np pierwszego rzedu przez pierwsza kolumne
        ////////////oraz wrzucenie wyniku sumy do reducedArr
        ///////////i tak do momentu, az np pierwszy rzad wymnoży kazda kolumne
        reducedArr.push(arr.reduce((total, num) => total + num));
        //arr jest pomocnicza, magazynuje wartosci, ktore mozna pozniej zsumowac 
        //i wrzucic do reducedArr
        arr.splice(0, i);
        // console.log("red", "k:", k, reducedArr);
        // console.log("arr", arr);
        // i wraca do 0 by mozna bylo od nowa mnozyc
        i = 0;

      }
      finalResult.push(Array.from(reducedArr)); //Wrzucamy reducedArr do finalResult
      // reducedArr.splice(0, firstArrCols)     //(tablice(rzad) do macierzy finalResult)
      reducedArr.splice(0, j);
      i = 0;
      j = 0;
      /////////////////////////////////czyscimy reduced arr
      /////////////////////////////////nastepuje zmiana rzedu!!!! gdy
      //dany rzad wymnoży kazda kolumne (j wyrówna ilość kolumn 2 macierzy)
    }
    // console.log("reducedArr:", reducedArr);
    console.log("finalResult:", finalResult);
  };

}

const wynik = new Result(arr1, arr2).calculate();
