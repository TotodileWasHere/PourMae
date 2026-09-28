const evilButton = document.getElementById('evil-button')
const OFFSET = 65

evilButton.addEventListener('click', () => {
  alert('Bien vu ! (mais nan j\'y avait pensé :P)')
  
})

var lastX = clientInformation.x
var lastY = clientInformation.y

document.addEventListener('mousemove', (e) => {
  const x = e.pageX
  const y = e.pageY
  const buttonBox = evilButton.getBoundingClientRect()
  const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
  const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
  const horizontalOffset = buttonBox.width / 2 + OFFSET
  const verticalOffset = buttonBox.height / 2 + OFFSET
  console.log(lastX-x)
  
  if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
    
    evilButton.style.left = `${buttonBox.x - (lastX-x)}px`
    evilButton.style.top = `${buttonBox.y - (lastY-y)}px`
   
  }
  lastX = x
  lastY = y
})


function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}