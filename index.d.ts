declare namespace SRScrambler {
  export function generateScramble(size: number, numTurns: number): Turn[];
  export function generateHtmlScramble(size: number, numTurns: number): string;
  export function convertScrambleToHtml(turns: Turn[]): string; 

  export class Turn {
    cubeSize: number;
    face: Side;
    depth: number;
    modifier: Modifier;

    toHtml(): string
  }

  export enum CubePlane {
    X = 'x',
    Y = 'y',
    Z = 'z'
  }
  
  export enum Side {
    L = 'L',
    R = 'R',
    U = 'U',
    D = 'D',
    F = 'F',
    B = 'B'
  }
  
  export enum Modifier {
    Double = '2',
    CounterClockwise = '\'',
    Clockwise = ''
  }
}

export = SRScrambler