# srScrambler
Javascript class to generate scrambles for any size nxn Rubik's cube. Scrambles can be generated to display on html pages. The scrambler efficiently generates sequences. For example F and F' will not appear next to eachother in scramble.
This script was made to power the cube scrambler for http://www.solvingrubik.com/timer

## Instalation
Download the scrambler.js file and put it in your web directory.

OR

Install the package using bower
```
bower install --save srScrambler
```

## Usage

Include scrambler.js in your web page.
```html
<script type="text/javascript" src="./path/to/scrambler.js" />
```

Generate a scramble by calling the generateScramble method, passing in the number of layers in the cube and the number of turns you want in the scramble. This returns an array of turns which may or may not be helpful to you.

```javascript
var scramble = SRModules.scrambler.generateScramble(3, 30);
```

HTML friendly scrambles can also be generated so the scramble can be displayed on a web page.
```javascript
var scramble = SRModules.scrambler.generateHtmlScramble(3, 30);
```
