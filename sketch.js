let cells = [];
let w = 7;
let y = 0;
let rulevalue = 30;
let b1_color = 255;
let b2_color = 255;
let b3_color = 255;

// Converts decimal rulevalue to binary ruleset (String)
let ruleset = rulevalue.toString(2);

while (ruleset.length < 8)
{
  ruleset = '0' + ruleset;
}

function setup() {
  createCanvas(2000, 1010);

  //Initialize buttons for highlight search. When button
  let button1 = createButton('0/1');
  let button2 = createButton('0/1');
  let button3 = createButton('0/1');

  button1.position(10,40);
  button2.position(40,40);
  button3.position(70,40);

  button1.mousePressed(B_switch_state(1));
  button2.mousePressed(B_switch_state(2));
  button3.mousePressed(B_switch_state(3)); 

  let total = width/w; 
  for (let i = 0; i < total; i++)
  {
    cells[i] = floor(random(2));
  }
  //For wolframs setup set cells[i] = 0 above and uncomment below
  //cells[floor(total/2)] = 1;
}

function draw() {

  //Draw Squares over each Button to represent On/Off for highlight search
  fill(b1_color,0,0);
  square(5,5,30);
  fill(b2_color,0,0);
  square(40,5,30);
  fill(b3_color,0,0);
  square(75,5,30);



  // Calculate nextCells[] from Cells[]
  let len = cells.length;
  let nextCells = [];
  for (let i = 0; i < len; i++)
  {
    let left = cells[(i-1 + len) % len];
    let right = cells[(i+1 + len) % len];
    let identity = cells[i];
    let state = '' + left + identity + right;
    let newIdentity = calculateState(state);
    nextCells[i] = newIdentity;

    // Check for state specific highlights
    let color_value = 0;
  
    color_value = hilite_state(state)


    // Draw Cells (0 is (255,g,b); 1 is (0,g,b))
    let x = i * w;
    noStroke();
    fill(255 - cells[i]*255, color_value, 240);
    square(x, y, w);
  }

  // move down a row after drawing current row
  y += w;

  cells = nextCells;
}

function calculateState(state)
{
  //Zeroth place of ruleset corresponds to 111
  //and descends to 000 at index 7
  let rule_index = 7 - parseInt(state, 2);
  return parseInt(ruleset[rule_index]);
}

function hilite_state(state)
{
  //to disable highlights uncomment line below
  //return 0;

  h1 = '000'
  h2 = '111'
  if (state == h1)
  {
    return 255;
  }
  if (state == h2)
  {
    return 170;
  }
  return 0;
}

function B_switch_state(button_num)
{
  if (button_num = 1)
  {
    b1_color = 255 - b1_color;
  }
  else if (button_num = 2)
  {
    b2_color = 255 - b2_color;
  }
  else if (button_num = 3)
  {
    b3_color = 255 - b3_color;
  }
}
