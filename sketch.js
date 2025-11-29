let cells = [];
let w = 7;
let y = 0;
let rulevalue = 30;
let ruleset = rulevalue.toString(2);


while (ruleset.length < 8)
{
  ruleset = '0' + ruleset;
}

function setup() {
  createCanvas(2000, 1010);
  let total = width/w;
  for (let i = 0; i < total; i++)
  {
    cells[i] = floor(random(2));
  }
  //For wolframs setup set cells[i] = 0 above and uncomment below
  //cells[floor(total/2)] = 1;
}
function draw() {
  
  for (let i = 0; i < cells.length; i++)
  {
    let x = i * w;
    noStroke();
    fill(255 - cells[i]*255, 0, random(0,255));
    square(x, y, w);
  }

  y += w;
  let len = cells.length;
  let nextCells = [];
  for (let i = 0; i < len; i++)
  {
    let left = cells[(i-1 + len) % len];
    let right = cells[(i+1 + len) % len];
    let state = cells[i];
    let newState = calculateState(left, state, right);
    nextCells[i] = newState;
  }

  cells = nextCells;

}

function calculateState(a, b, c)
{
  //Zeroth place of ruleset corresponds to 111
  //and descends to 000 at index 7
  //makes string of 3 binary digits 
  //then converts it to decimal 0-7
  //then flips so that 0 goes to 7 and 7 goes to 0
  let neighborhood = '' + a + b + c;
  let value = 7 - parseInt(neighborhood, 2);
  return parseInt(ruleset[value]);

}