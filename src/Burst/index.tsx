import React from 'react';
import Sketch from "react-p5";
import {draw, setup } from './draw'


export const Burst = () => {
  return (
    <Sketch setup={setup} draw={draw} />
  )
}