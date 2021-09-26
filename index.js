const drivers = 
    [   "Sally",
        "Bob",
        "Freddy",
        "Claudia",
    ];
const returnFirstTwoDrivers = (function(drivers) {
    return drivers.slice(0,2);
});

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
]

const createFareMultiplier = function(multiplier) {
    return function(cost) {
        return (cost * multiplier)};
}

const fareDoubler = function(x) {
    const double = createFareMultiplier(x);
        return double(2);
}

const fareTripler = function(x) {
    const triple = createFareMultiplier(x);
        return triple(3);
}

const selectDifferentDrivers = function(drivers, order) {
    if (order === returnFirstTwoDrivers)
        return drivers.slice(0,2);
    if (order === returnLastTwoDrivers);
        return drivers.slice(2)
};