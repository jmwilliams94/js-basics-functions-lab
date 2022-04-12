
function distanceFromHqInBlocks(location) {
    if (location <= 42) {
        return 42-location;
      } else {
        return location-42;
      }
}

console.log(distanceFromHqInBlocks(43))

function distanceFromHqInFeet(blocks) {
    return 264*distanceFromHqInBlocks(blocks)
}

function distanceTravelledInFeet(start, end) {
    if (start <= end) {
        return (end-start)*264
    } else {
        return (start-end)*264
    }
    // start=11, end=22
    // start=11, end=3
}
     
function calculatesFarePrice(start, destination) {
    const fairDistance = distanceTravelledInFeet(start, destination)
    if (fairDistance <= 400) {
        return 0
    } else if (fairDistance >400 && fairDistance <=2000) {
        return 0.02*(fairDistance-400)
    } else if (fairDistance>2000 && fairDistance<=2500) {
        return 25
    } else if (fairDistance>2500) {
        return 'cannot travel that far'
    }

}
  