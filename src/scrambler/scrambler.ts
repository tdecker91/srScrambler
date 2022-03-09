import { CubePlane, Modifier, Side } from "../enums";
import { randomElement, shuffle } from "../util";

/**
 * planes of rotation
 * for examples a cube rototes on x,y,z axis
 * we don't want to generate two turns in a 
 * row on the same axis
 */
export type RotationPlane = string;

/**
 * possible faces to rotate on the puzzle
 * (ex, 3x3 has UFLRB)
 */
export type Face = string;

/**
 * clockwise, counterclockwise...
 */
export type Modifer = string;

export type PlaneMapping = { [face: string]: RotationPlane };

export type Turn = {
  face: Face;
  depth: number;
  modifier: Modifer;
}

const generateScramble = (
  faces: Face[],
  planeMapping: PlaneMapping,
  modifiers: Modifer[],
  maxDepth: number,
  numTurns: number): Turn[] => {

  let turns = [];
  let previousTurn: Face;
  let newTurn: Face;

  for (var i = 0; i < numTurns; i++) {
    do {
      newTurn = randomElement<Face>(faces);
    } while (planeMapping[previousTurn] === planeMapping[newTurn]);

    turns.push({
      face: newTurn,
      depth: Math.floor(Math.random() * maxDepth) + 1,
      modifier: randomElement(modifiers)
    });
    previousTurn = newTurn;
  }

  return turns;
}

export const generateCubeScramble = (size: number = 3, numTurns: number = 21) => {
  return generateScramble(
    [Side.L, Side.R, Side.U, Side.D, Side.F, Side.B],
    {
      [Side.L]: CubePlane.X,
      [Side.R]: CubePlane.X,
      [Side.U]: CubePlane.Y,
      [Side.D]: CubePlane.Y,
      [Side.F]: CubePlane.Z,
      [Side.B]: CubePlane.Z
    },
    [
      Modifier.Double,
      Modifier.CounterClockwise,
      Modifier.Clockwise
    ],
    Math.floor(size / 2), numTurns);
}

const pochmanFaces = ['D', 'R'];
const pochmanModifiers = ['++', '--'];

/**
 * generates a pochman scramble for the megaminx
 */
export const generateMegaminxScramble = (sequenceLength: number = 10, numSequences: number = 6): Turn[][] => {
  let turns: Turn[][] = [];

  for (let i = 0; i < numSequences; i++) {
    turns[i] = [];
    for (let j = 0; j < sequenceLength; j++) {
      turns[i].push({
        face: pochmanFaces[j % pochmanFaces.length],
        modifier: randomElement(pochmanModifiers),
        depth: 1
      });
    }
    turns[i].push({
      face: 'U',
      modifier: randomElement(['', '\'']),
      depth: 1
    })
  }

  return turns;
}

export const generateSkewbScramble = (numTurns: number = 9) => {
  return generateScramble(
    [Side.L, Side.R, Side.U, Side.B],
    {
      [Side.L]: 'L',
      [Side.R]: 'R',
      [Side.U]: 'U',
      [Side.B]: 'B'
    },
    [
      Modifier.CounterClockwise,
      Modifier.Clockwise
    ],
    1, numTurns);
}

export const generatePyraminxScramble = (numTurns: number = 10) => {
  let turns = generateScramble(
    [Side.L, Side.R, Side.U, Side.B],
    {
      [Side.L]: 'L',
      [Side.R]: 'R',
      [Side.U]: 'U',
      [Side.B]: 'B'
    },
    [
      Modifier.CounterClockwise,
      Modifier.Clockwise
    ],
    1, numTurns);

  shuffle(['l', 'r', 'u', 'b'])
    .forEach(point => {
      let modifier = randomElement([Modifier.Clockwise, Modifier.CounterClockwise, null]);

      if (modifier != null) {
        turns.push({
          face: point,
          modifier: modifier,
          depth: 1
        });
      }
    });

  return turns;
}

export const generateSquare1Scramble = (numTurns: number = 12) => {
  let tops = [2, 1, 2, 1, 2, 1, 2, 1];
  let bottom = [1, 2, 1, 2, 1, 2, 1, 2];

  const turnTop = (turns: number) => {
    while (turns != 0) {
      if (turns < 0) {
        let piece = tops.shift();
        turns += piece;
        tops.push(piece);
      } else if (turns > 0) {
        let piece = tops.pop();
        turns -= piece;
        tops.unshift(piece);
      }
    }
  }

  const turnBottom = (turns: number) => {
    while (turns != 0) {
      if (turns < 0) {
        let piece = bottom.shift();
        turns += piece;
        bottom.push(piece);
      } else if (turns > 0) {
        let piece = bottom.pop();
        turns -= piece;
        bottom.unshift(piece);
      }
    }
  }

  const slice = () => {
    let topNum = 0;
    let bottomNum = 0;

    let value = 0;

    for (let i = tops.length; i > 0 && value < 6; i--) {
      value += tops[i - 1];
      topNum++;
    }

    value = 0;
    for (let i = 0; i < bottom.length && value < 6; i++) {
      value += bottom[i];
      bottomNum++;
    }

    const topSlice = tops.splice(
      tops.length - topNum,
      tops.length
    );
    const bottomSlice = bottom.splice(
      0,
      bottomNum
    );

    tops = tops.concat(bottomSlice);
    bottom = topSlice.concat(bottom);
  }

  const isLayerAligned = (layer: number[]): boolean => {
    let value = 0;
    for (let i = 0; i < layer.length && value < 6; i++) {
      value += layer[i];
      if (value > 6) {
        return false;
      }
    }

    return true
  }

  const isMovePossible = (layer: number[], turns: number): boolean => {
    if (turns < 0) {
      // Take off front, put on end
      while (turns < 0) {
        let piece = layer.shift();
        if (piece > Math.abs(turns)) {
          return false;
        }
        turns += piece;
        layer.push(piece);
      }
      return isLayerAligned(layer);
    } else if (turns > 0) {
      // Take off end, put on front
      while (turns > 0) {
        let piece = layer.pop();
        if (turns < piece) {
          return false;
        }
        turns -= piece;
        layer.unshift(piece);
      }
      return isLayerAligned(layer);
    } else {
      // Turns = 0, should be possible
      return true;
    }
  }

  const possibleMoves = () => {
    let possibleTop = [];
    let possibleBottom = [];

    for (let i = -6; i <= 6; i++) {
      if (isMovePossible([...tops], i)) {
        possibleTop.push(i);
      }
      if (isMovePossible([...bottom], i)) {
        possibleBottom.push(i);
      }
    }

    return {
      possibleTop,
      possibleBottom
    }
  }

  let turns: any = [];
  for (let i = 0; i < numTurns; i++) {
    let moves = possibleMoves();
    let topMove = 0;
    let bottomMove = 0;

    do {
      topMove = randomElement(moves.possibleTop)
      bottomMove = randomElement(moves.possibleBottom)
    } while (topMove === 0 && bottomMove === 0)

    turns.push({
      top: topMove,
      bottom: bottomMove
    })

    turnTop(topMove);
    turnBottom(bottomMove);
    slice();
  }

  return turns;
}