1D cellular automata where each cell has 2 possible states. Start with an array of cells represented by their state 0 or 1. Consider the neighborhood of a given cell C to be the cells to the left and right of C. Thus, there are 8 possible neighborhoods of cells. Under a given ruleset, each neighborhood maps to a specific state (0 | 1). Thus, there are 256 possible rulesets; each ruleset corresponds to an array of 8 binary digits. The first element of the array maps neighborhood 111, then descends by 1 until the last element maps 000. <br>

> Rule 0 = {0, 0, 0, 0, 0, 0, 0, 0} -> and maps all input neighborhoods to 0. <br>
Rule 1 = {0, 0, 0, 0, 0, 0, 0, 1} -> maps 000 to 1 and all others to 0  <br>
. <br>
. <br>
. <br>
Rule 255 = {1, 1, 1, 1, 1, 1, 1, 1} <br>

Generation 1 typically begins with the cell array where only the middle cell is 1: {0, 0, 1, 0, 0}
Given the cell array in generation n: Cn, C(n+1) is created by applying the rules to each cell in Cn.
This is visualized by embedding the arrays into a 2D grid (Width = # of cells, Height = # of generations).
Row 1 corresponds to generation 1, row 2 corresponds to generation 2, etc...

