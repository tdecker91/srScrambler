import {
  Turn,
  generateSquare1Scramble,
  generateCubeScramble,
  generateMegaminxScramble,
  generatePyraminxScramble,
  generateSkewbScramble
} from "./scrambler/scrambler";

const turnToString = (turn: Turn): string => {
  const depthLayer = turn.depth > 2 ? `${turn.depth}` : ''
  const sliceIndicator = turn.depth > 1 ? 'w' : '';
  return `${depthLayer}${turn.face}${sliceIndicator}${turn.modifier}`;
}

const scrambleToString = (turns: Turn[]): String => {
  return turns
    .map(turn => {
      if (Array.isArray(turn)) {
        return scrambleToString(turn) + '\n';
      } else {
        return turnToString(turn);
      }
    })
    .join(' ');
}

export const cube = (size = 3, numTurns = 21) => {
  return scrambleToString(generateCubeScramble(size, numTurns));
}

export const megaminx = () => {
  return scrambleToString(generateMegaminxScramble() as any);
}

export const pyraminx = (numTurns?: number) => {
  return scrambleToString(generatePyraminxScramble(numTurns));
}

export const skewb = (numTurns?: number) => {
  return scrambleToString(generateSkewbScramble(numTurns));
}

export const square1 = (numTurns?: number) => {
  return generateSquare1Scramble(numTurns)
    .map((turn: any) => ` (${turn.top}, ${turn.bottom}) /`)
    .join('')
}