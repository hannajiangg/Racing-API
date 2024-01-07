
import fetch from "../include/fetch.js";
import readline from "readline";


//This program uses the F1 API to look at if an F1 driver finishes better than the position he started in a given year.
//First the program will look through the races of the particular driver in the said year (input is driver name and year)
//Then it will check how many races were so where the positions at which the driver ended should be less than or equal to the position they started in
//I.E the output will print the number of races in said year where said driver climbed up


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
async function increasedPosition(year, name) {
    let numberOfRaces = 0;
    await fetch(`https://ergast.com/api/f1/${year}.json`)
        .then(res => (res.ok ? res.json() : Promise.reject(new Error(`Error in response: ${res.statusText}`))))
        .then(data => data.MRData)
        .then(data => (numberOfRaces = data.total));
    let count = 0;
    for (let i = 1; i <= numberOfRaces; ++i) {
        //starting from 1 because races are indexed from one. Will check each race to see if the driver finished better or worse, and if yes, add it to our total
        await fetch(`https://ergast.com/api/f1/${year}/${i}/results.json`)
            .then(res => (res.ok ? res.json() : Promise.reject(new Error(`Error in response: ${res.statusText}`))))
            .then(data => data.MRData.RaceTable.Races[0])
            .then(data => data.Results)
            .then(data => data.filter((x) => x.Driver.givenName === name))
            .then((data) => {
            parseInt(data[0].position) <= parseInt(data[0].grid) ? count++ : count;
        });
    }
    console.log(count);
}
// input should be FIRST NAME + YEAR
//Example, "Mark 2012"
// "Fernando 2014"
r1.question("Enter the drivers name and the year split by a space", input => {
    let name = input.split(" ")[0];
    let year = input.split(" ")[1];
    console.log(`${name} and ${year}`);
    increasedPosition(year, name);
});