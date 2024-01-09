# F1 Driver Performance Analyzer

This program uses the F1 API to analyze if an F1 driver finishes better than their starting position in a given year.

## Overview

The program takes input parameters such as the driver's name and the target year. It then makes requests to the F1 API to retrieve information about the races of the specified driver in the given year.

## Functionality

1. The program first looks through the races of the particular driver in the specified year (input: driver name and year).

2. It then checks how many races the driver finished better than their starting position.

   - If the finishing position is less than or equal to the starting position, it is considered an improvement.

   - The output will display the number of races in the specified year where the driver climbed up.

## Usage

1. Provide the driver's name and the target year as input.

2. Run the program.

3. View the output to see the number of races in the specified year where the driver improved their position.

## Example

```bash
node f1DriverAnalyzer.js --driver "Lewis Hamilton" --year 2022

