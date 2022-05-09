import p5Types from 'p5'

const randomRange = (upper: number, floor?: boolean) => {
  const generated = Math.random() * upper
  return floor ? Math.floor(generated) : generated
}

export const setup = (p5: p5Types, canvasParentRef: Element) => {
  const width = p5.windowWidth
  const height = p5.windowHeight
  p5.createCanvas(width, height).parent(canvasParentRef)
}

export const draw = (p5: p5Types) => {
  const randomSign = () => p5.random() > 0.5 ? -1 : 1
  const width = p5.windowWidth
  const height = p5.windowHeight
  const red = p5.color(180, 70, 80)
  p5.stroke(red)
  p5.noFill()
  p5.push()
  p5.translate(
    (width/2) + (0.3 * width) * p5.random() * randomSign(),
    (height/2) + (0.3 * height) * p5.random() * randomSign()
  )
  p5.strokeWeight(2)
  p5.circle(
    0 + (0.1 * width) * (p5.random()) * randomSign(),
    0 + (0.1 * height) * (p5.random()) * randomSign(),
    height * 0.7
  )
  p5.colorMode(p5.RGB)

  const rays = 60 + randomRange(50, true)

  for (let idx = 0; idx < rays; idx++) {
    const start = -p5.PI / 2 + (p5.noise(0.1 * idx) * (p5.PI / 5))
    const end = p5.PI/4 + p5.noise(0.7 * idx) * (p5.PI / 4)
    const angle = (2 * p5.PI / rays)
      + ((p5.PI / rays) * 0.5 * p5.random())
      * randomSign()
    p5.arc(0, height / 4, (height / 4), (height / 2), start, end, p5.OPEN)
    p5.rotate(angle)
  }
  
  p5.pop()
  p5.noLoop()
}