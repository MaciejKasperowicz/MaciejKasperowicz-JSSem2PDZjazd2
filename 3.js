//3) Given two strings, write a program that efficiently finds
//the longest common subsequence. ‘karol rolki’

"use strict";
const _ = require("lodash");
class Subsequence {
    constructor(firstString, secondString) {
        this.firstString = firstString;
        this.secondString = secondString;
    }
    findSubsequence() {
        const firstStringSplitted = this.firstString.toLowerCase().split("");
        const secondStringSplitted = this.secondString.toLowerCase().split("");

        const firstStringDiff = _.difference(firstStringSplitted, secondStringSplitted);
        // console.log("firstStringDiff: ", firstStringDiff)
        const secondStringDiff = _.difference(secondStringSplitted, firstStringSplitted);
        // console.log("secondStringDiff: ", secondStringDiff)
        const diff = firstStringDiff.concat(secondStringDiff);
        // console.log("diff: ", diff);
        const firstStringWithoutDiff = _.difference(firstStringSplitted, diff);
        const secondStringWithoutDiff = _.difference(secondStringSplitted, diff);
        // console.log("firstWD", firstStringWithoutDiff, "secondWD", secondStringWithoutDiff);

        let indexes = [];



        if (firstStringWithoutDiff.join("") === secondStringWithoutDiff.join("")) {
            console.log(`Longest common subsequence of ${this.firstString} and ${this.secondString} is ${firstStringWithoutDiff.join("")}.`);
            return
        } else {
            //Wyszukujemy indeksy liter z pierwszego slowa w drugim slowie
            for (let i = 0; i < firstStringWithoutDiff.length; i++) {
                indexes.push(secondStringWithoutDiff.indexOf(firstStringWithoutDiff[i]));
            }
            // console.log("indexes first", indexes);
            const uniqIndexes = [...new Set(indexes)];
            // console.log("uniqIndexes: ", uniqIndexes);

            // jezeli litery wystepuja w slowie wiecej niz jeden raz, indexOf zworci pierwszy znaleziony index
            // ilosc indeksow w tablicy indexes bedzie inna niz ilosc indeksow w tablicy unikalnych indeksow (uniqIndexes)
            // wtedy tez czyscimy tablice indexes i wrzucamy nowe indeksy z wykorzystaniem indexOf i drugiego argumentu po ktorym iterujemy
            // ktory zawsze bedzie rozpoczynal od miejsca w ktorym jestesmy podczas iteracji i wtedy nie będzie zdublowanych indeksow
            if (indexes.length !== uniqIndexes.length) {
                indexes = [];
                for (let i = 0; i < firstStringWithoutDiff.length; i++) {
                    indexes.push(secondStringWithoutDiff.indexOf(firstStringWithoutDiff[i], i));
                }
            }
            // console.log("indexes later", indexes);
        }

        const subsequence = [];
        for (let i = 0; i <= indexes.length; i++) {
            //sprawdzamy czy indeksy liter następują od razu po sobie, jeżeli tak to wrzucamy je do tablicy
            if (indexes[i + 1] - indexes[i] === 1) {
                subsequence.push(secondStringWithoutDiff[indexes[i]]);
                // tutaj sprawdzamy też, czy możemy wrzucic do tablicy poprzedającą litere
            } else if (indexes[i + 1] - indexes[i] !== 1 && ((indexes[i] - indexes[i - 1]) === 1)) {
                subsequence.push(secondStringWithoutDiff[indexes[i]]);
                break;
            }
        }

        console.log(`Longest common subsequence of ${this.firstString} and ${this.secondString} is "${subsequence.join("")}".`);
    }
}
const subsequence = new Subsequence("Karol", "rolki").findSubsequence();
const subsequence2 = new Subsequence("Karoly", "yrolki").findSubsequence();
const subsequence3 = new Subsequence("Wannable", "annabele").findSubsequence();
const subsequence4 = new Subsequence("Wrannable", "ananabbele").findSubsequence();
