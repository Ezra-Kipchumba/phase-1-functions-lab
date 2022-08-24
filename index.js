// Code your solution in this file!
let distance = 42;
function distanceFromHqInBlocks(distance) {
    if (distance >= 42) {
        return distance - 42;
    } else if (distance < 42) {
        return 42 - distance;
    }
}
function distanceFromHqInFeet(distance) {
    let ride = distanceFromHqInBlocks(distance);
    return ride * 264;

}

function distanceTravelledInFeet(start, destination){
    let distanceWalked = start > destination ? start-destination : destination-start;
    return distanceWalked * 264;
}
function calculatesFarePrice(start, destination){
    let distanceWalked = distanceTravelledInFeet(start, destination);
    if(distanceWalked <= 400){
        return 0;
    }
    else if (distanceWalked > 400 && distanceWalked < 2000){

        return (distanceWalked - 400) * 0.02;
    }
    else if (distanceWalked > 2000 && distanceWalked < 2500){
        return 25;
    }
    else {
        return "cannot travel that far"
    }
}
