/**
 * planes of rotation
 * for examples a cube rototes on x,y,z axis
 * we don't want to generate two turns in a
 * row on the same axis
 */
export declare type RotationPlane = string;
/**
 * possible faces to rotate on the puzzle
 * (ex, 3x3 has UFLRB)
 */
export declare type Face = string;
/**
 * clockwise, counterclockwise...
 */
export declare type Modifer = string;
export declare type PlaneMapping = {
    [face: string]: RotationPlane;
};
export declare type Turn = {
    face: Face;
    depth: number;
    modifier: Modifer;
};
export declare const generateCubeScramble: (size?: number, numTurns?: number) => Turn[];
/**
 * generates a pochman scramble for the megaminx
 */
export declare const generateMegaminxScramble: (sequenceLength?: number, numSequences?: number) => Turn[][];
export declare const generateSkewbScramble: (numTurns?: number) => Turn[];
export declare const generatePyraminxScramble: (numTurns?: number) => Turn[];
export declare const generateSquare1Scramble: (numTurns?: number) => any;
//# sourceMappingURL=scrambler.d.ts.map