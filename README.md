# srScrambler
Tool to generate scrambles for various twisty puzzles. ***This is not an official WCA scrambler.*** srScrambler won't generate scrambles with canceling moves, but it is still a naive scramble implemenation. But good enough for casual use. 

- Rubiks Cube (NxN)
- Skewb
- Pyraminx
- Megaminx
- Square1

## Instalation
Install the package using npm
```bash
npm install --save sr-scrambler
```

## Usage

Import the module
```javascript
import * as Scrambler from 'sr-scrambler'
```

Generate a scramble by invoking the method for the puzzle you want;
```javascript
// U' B L2 F L2 D2 B D' B' ...
let cubeScramble = Scrambler.cube();

// D++ R++ D-- R++ D++ R++ ...
let megaminxScramble = Scrambler.megaminx();

// U R' U R' L R' L U' R' U r' l' b
let pyraminxScramble = Scrambler.pyraminx();

// U' B L' R L B L' B' U
let skewbScramble = Scrambler.skewb();

// (0, -1) / (3, 4) / (-3, 0) / (3, -3) ...
let square1Scramble = Scrambler.square1();
```

Cube scrambles can be generated for larger puzzles
```javascript
let cubeSize = 5 // 5x5
let scrambleSize = 30
let cubeScramble = Scrambler.cube(cubeSize, scrambleSize);
```

Other scrambles can be generated longer or smaller by providing a scramble size
```javascript
// U' B R' B U' B' R' B' R' B R' L U B R'
let skewbScramble = Scrambler.skewb(15);
```