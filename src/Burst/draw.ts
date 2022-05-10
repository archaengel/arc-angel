import p5Types from 'p5'
import { fadedCircle, fuzzyCircle } from './util'

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
  const width = p5.windowWidth
  const height = p5.windowHeight
  const red = p5.color(180, 70, 80, 30)
  p5.noFill()
  p5.push()
  p5.translate(width / 2, height / 2)
  fadedCircle(p5)
  fuzzyCircle(p5, p5.max(height, width))
  p5.pop()
  p5.noLoop()
}