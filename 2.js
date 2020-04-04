//2) Write a program that finds the longest palindromic substring of a given string.
//‘karakis’, ‘baerren’, ‘kajak’, ‘inni’,’sedes’.

"use strict";

class Palindromic {
  constructor(word) {
    this.word = word;
  }

  findPalindromic() {
    const splittedWord = this.word.toLowerCase().split("");
    const sameLetter = [];
    const splittedOryginal = [...splittedWord];
    const sorted = splittedWord.sort();
    // litery posortowane alfabetycznie
    // console.log(sorted);
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] === sorted[i + 1]) {
        sameLetter.push(sorted[i]);
      }
    }
    // sameLetter to tablica, która zawiera te litery, które w sorted wysąpiły 2 razy na kolejnych indeksach
    // console.log(sameLetter);
    if (sameLetter.length < 1) {
      console.log(`Word "${this.word}" doesn't have palindromic substring.`);
      return;
    } else {
      const almostPalindromic = [];
      for (let i = 0; i < splittedOryginal.length; i++) {
        for (let j = 0; j < sameLetter.length; j++) {
          if (splittedOryginal[i] === sameLetter[j]) {
            almostPalindromic.push(splittedOryginal[i]);
          }
        }
      }
      // tablica, która zawiera prawie cały, lub cały palindrom w zależności od jego parzystości lub nie
      // console.log(almostPalindromic);
      if (this.word.includes(almostPalindromic.join(""))) {
        console.log(
          `The longest palindromic substring of ${
          this.word
          } is "${almostPalindromic.join("")}".`
        );
      } else {
        const firstPalindromicLetterIndex = splittedOryginal.indexOf(
          almostPalindromic[0]
        );
        // szukamy indeksu pierwszej litery palindromu ze slowa glownego
        // console.log(firstPalindromicLetter);
        let centralLetter;
        for (let i = 0; i < almostPalindromic.length; i++) {
          if (
            almostPalindromic[i] !==
            splittedOryginal[firstPalindromicLetterIndex - 1 + i]
          ) {
            centralLetter = splittedOryginal[firstPalindromicLetterIndex - 1 + i];
          }
        }
        // w przypadku gdy długość palindromu nie jest parzysta, musimy znalezc litere centralna
        // console.log(centralLetter);
        const centralLetterIndex = almostPalindromic.length / 2;
        // console.log(almostPalindromic);
        // console.log(centralLetterIndex);
        almostPalindromic.splice(centralLetterIndex, 0, centralLetter);
        console.log(
          `The longest palindromic substring of ${
          this.word
          } is "${almostPalindromic.join("")}".`
        );
      }
    }
  }
}

const palindromic = new Palindromic("baerlren").findPalindromic();
const palindromic2 = new Palindromic("karakis").findPalindromic();
const palindromic3 = new Palindromic("kajak").findPalindromic();
const palindromic4 = new Palindromic("lato").findPalindromic();
const palindromic5 = new Palindromic("inni").findPalindromic();
