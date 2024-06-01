// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2); 
const fare = 10;
const doubledFare = fareDoubler(fare);
console.log(doubledFare);

const fareTripler = createFareMultiplier(3);
const tripledFare = fareTripler(fare);
console.log(tripledFare);

function selectDifferentDrivers( drivers, driversFunction) {
   return driversFunction(drivers);
}
