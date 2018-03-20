
const isAdult = (age) => {
  if (age > 17){
    return true
  } else {
    return false
  }

}

const canDrink = (age) => {
  if (age > 18){
    return true
  }
  return false
}

export { isAdult, canDrink }
