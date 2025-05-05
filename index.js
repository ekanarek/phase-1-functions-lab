function distanceFromHqInBlocks(street) {
    if (street >= 42) {
        return street - 42;
    } else {
        return 42 - street;
    }
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}