
def step(previous_step):
    return previous_step

def render_grid(grid):
    for line in grid:
        for cell in line:
            print(cell, end='')
        
        print("")

grid = [ [ "#", ".", "." ], [ ".", "#", "." ], [ ".", ".", "#" ] ]
render_grid(grid)