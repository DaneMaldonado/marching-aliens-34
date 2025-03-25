newvelocityx = 0
alienindex = 0
columnindex = 0
rowedge = False
rowindex = 0
rowedgereached: List[bool] = []
aliens: List[Sprite] = []
column = 0
row = 0
alienSprite = None
alienpicture = img("""
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    """)
x = 12
y = 12
alienrow = 5
rows = 3
alienwidth = 15
alienheight = 15
alienvelocity = 25
while row <= rows - 1:
    column = 0
    while column <= alienrow - 1:
        alien = sprites.create(alienpicture, SpriteKind.enemy)
        alien.set_position(x + column * alienwidth, y + row * alienheight)
        aliens.append(alien)
        alien.set_velocity(alienvelocity, 0)
        column += 1
    row += 1

def on_on_update():
    global rowedgereached, rowedge, columnindex, alienindex, rowindex, newvelocityx
    rowedgereached = [False]
    while rowindex < rows:
        rowedge = False
        columnindex = 0
        while columnindex < alienrow:
            alienindex = rowindex * alienrow + columnindex
            if alienindex < len(aliens):
                alien2 = aliens[alienindex]
                if alien2.x < 10 or alien2.x > screen.width - 10:
                    rowedge = True
            columnindex += 1
        rowedgereached[rowindex] = rowedge
        rowindex += 1
    rowindex = 0
    while rowindex < rows:
        if rowedgereached[rowindex]:
            columnindex = 0
            while columnindex < alienrow:
                alienindex = rowindex * alienrow + columnindex
                if alienindex < len(aliens):
                    alien2 = aliens[alienindex]
                    alien2.y += 5
                    pause(100)
                    newvelocityx = 0 * -1
                    alien2.set_velocity(newvelocityx, 0)
                columnindex += 1
        rowindex += 1
game.on_update(on_on_update)
