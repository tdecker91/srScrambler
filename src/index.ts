import { CubePlane, Side, Modifier } from "./enums";
import { randomElement } from "./util";

const planeMapping: { [side: string]: CubePlane } = {
  [Side.L]: CubePlane.X,
  [Side.R]: CubePlane.X,
  [Side.U]: CubePlane.Y,
  [Side.D]: CubePlane.Y,
  [Side.F]: CubePlane.Z,
  [Side.B]: CubePlane.Z
};

const sides: Side[] = [Side.L, Side.R, Side.U, Side.D, Side.F, Side.B];

const modifiers: Modifier[] = [
  Modifier.Double,
  Modifier.CounterClockwise,
  Modifier.Clockwise
];

export class Turn {
  cubeSize: number;
  face: Side;
  depth: number;
  modifier: Modifier;

  constructor(cubeSize: number, face: Side, depth: number, modifier: Modifier) {
    this.cubeSize = cubeSize;
    this.face = face;
    this.depth = depth;
    this.modifier = modifier;
  }

  toHtml() {
    if (this.depth > 1) {
      // Cube sizes under 6 have different notation
      if (this.cubeSize > 5) {
        return this.face + "<sub>" + this.depth + "</sub>" + this.modifier;
      } else {
        return this.face.toLowerCase() + this.modifier;
      }
    } else {
      return this.face + this.modifier;
    }
  }
}

/**
 * Generates a scramble for an nxn cubic twisty puzzle
 * @param size size of the cube (ex 3 for a 3x3 rubiks cube)
 * @param numTurns number of moves to generate in the sramble
 */
export function generateScramble(size: number, numTurns: number): Turn[] {
  var turns = [];
  var previousTurn: Side;
  var newTurn: Side;
  var maxDepth = Math.floor(size / 2);

  for (var i = 0; i < numTurns; i++) {
    do {
      newTurn = randomElement<Side>(sides);
    } while (planeMapping[previousTurn] === planeMapping[newTurn]);

    var depth = Math.floor(Math.random() * maxDepth) + 1;
    turns.push(
      new Turn(size, newTurn, depth, randomElement(modifiers))
    );
    previousTurn = newTurn;
  }

  return turns;
}

/**
 * Generates a scramble and returns it ready to put on an html page
 * @param  {int} size how big(in layers) of cube to generate a scramble for
 * @param  {int} numTurns how many turns the scramble should be
 * @return {String} html string to display scramble
 */
export function generateHtmlScramble(size: number, numTurns: number): string {
  return convertScrambleToHtml(generateScramble(size, numTurns));
};

/**
 * Converts an array of turns to an html string
 * @param  {Array} turns an array of turns
 * @return {String} html string to display scramble
 */
export function convertScrambleToHtml(turns: Turn[]): string {
  return turns.reduce((previous: string, current: Turn) => {
    return `${previous} ${current.toHtml()}`;
  }, '');
}