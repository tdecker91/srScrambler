/*

	Name: scrambler.js
	Author: Tyson Decker
	Email: tyson.decker@gmail.com

	Description: Generates scrambles for any size nxn cubic twisty puzzle

 */

Array.prototype.randomElement = function()
{
	return this[Math.floor(Math.random() * this.length)];
};

var SRModules = SRModules || {};

SRModules.scrambler = (function(){

	var planeMapping = {

		'L' : 'x',
		'R' : 'x',
		'U' : 'y',
		'D' : 'y',
		'F' : 'z',
		'B' : 'z'

	}

	var sides = ['L','R','U','D','F','B'];
	var modifiers = ['2', '\'', ''];

	var Scrambler = {};

	/**
	 * Generates a scramble for a rubiks cube
	 * @param  {int} size  how big(in layers) of cube to generate a scramble for
	 * @param  {int} numTurns how many turns the scramble should be
	 * @return {Array<Turn>}       Array of turns
	 */
	Scrambler.generateScramble = function(size, numTurns)
	{
		var turns = [];
		var previousTurn = '';
		var newTurn = '';
		var maxDepth = Math.floor(size/2);

		for (var i = 0; i < numTurns; i++)
		{
			do 
			{
				newTurn = sides.randomElement();
			} while (planeMapping[previousTurn] == planeMapping[newTurn])

			var depth = Math.floor(Math.random() * maxDepth) + 1;
			turns.push(new SRModules.turn(size, newTurn, depth, modifiers.randomElement()));
			previousTurn = newTurn;
		}

		return turns;
	}

	/**
	 * Generates a scramble and returns it ready to put on an html page
	 * @param  {int} size     how big(in layers) of cube to generate a scramble for
	 * @param  {int} numTurns how many turns the scramble should be
	 * @return {String}          [description]
	 */
	Scrambler.generateHtmlScramble = function(size, numTurns)
	{
		return this.convertScrambleToHtml(this.generateScramble(size, numTurns));
	}

	/**
	 * Converts an array of turns to an html string
	 * @param  {Array} turns an array of turns
	 * @return {String}
	 */
	Scrambler.convertScrambleToHtml = function(turns)
	{
		return turns.reduce(function(previous, current, index, array)
		{
			if (typeof previous == "object")
			{
				previous = previous.toHtml();
			}

			return previous + ' ' + current.toHtml();
		});
	}


	return Scrambler;

})();

SRModules.turn = (function(){

	var Turn = function(cubeSize, face, depth, modifier)
	{
		this.cubeSize = cubeSize;
		this.face = face;
		this.depth = depth;
		this.modifier = modifier;
	}

	Turn.prototype.toHtml = function()
	{	
		if (this.depth > 1)
		{
			// Cube sizes under 6 have different notation
			if (this.cubeSize > 5)
			{
				return this.face + "<sub>" + this.depth + "</sub>" + this.modifier;
			}
			else
			{
				return this.face.toLowerCase() + this.modifier;
			}
		}
		else
		{
			return this.face + this.modifier;
		}
	}

	return Turn;

})();