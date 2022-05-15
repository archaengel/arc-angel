import React, { KeyboardEvent } from 'react'
import Sketch from 'react-p5'
import p5Types from 'p5'
import {draw, setup } from './draw'


export const Burst = () => {
  const save = (p5: p5Types) => {
    console.log(p5)
  }
  return (
    <Sketch setup={setup} draw={draw} keyReleased={save} />
  )
}