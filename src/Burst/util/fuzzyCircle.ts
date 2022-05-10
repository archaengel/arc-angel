import p5Types from 'p5'
export const fuzzyCircle = (
  p5: p5Types,
  initRadius: number
) => {
  p5.strokeWeight(1)
  p5.angleMode(p5.DEGREES)

  let radNoise = p5.random(90)
  let centXNoise = p5.random(90)
  let centYNoise = p5.random(90)
  let thetaNoise = p5.random(90)
  let radius = initRadius
  let centX = 0
  let centY = 0
  let theta = p5.random(360)
  let col = 0
  p5.push()
  for (let idx = 0; idx <= 300; idx ++) {
    p5.stroke(col, 30)
    radNoise += 0.1
    centXNoise += 0.01
    centYNoise += 0.01
    thetaNoise += 0.001
    theta = (theta + (6 * p5.noise(thetaNoise) - 3)) % 360
    centX = 0 + (100 * p5.noise(centXNoise) - 50)
    centY = 0 + (100 * p5.noise(centYNoise) - 50)
    col = (col + 1) % 255
    const currRadius = radius + (p5.noise(radNoise)) * radius
    const x1 = centX + currRadius * p5.cos(theta)
    const y1 = centY + currRadius * p5.sin(theta)
    const oppTheta = 180 + theta
    const x2 = centX + currRadius * p5.cos(oppTheta)
    const y2 = centY + currRadius * p5.sin(oppTheta)
    p5.line(x1, y1, x2, y2)
  }
  p5.pop()
}