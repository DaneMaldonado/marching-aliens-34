row_edge_reached: List[bool] = []
row = 0
aliens: List[Sprite] = []
edge_reached = False
i = 0
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
x = 15
y = 15
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
    global row_edge_reached
    row_edge_reached = [False]
    row_index = 0
    while row_index < rows:
        row_has_edge = False
        columnindex = 0
        while columnindex < alienrow:
            alien_index = row_index * alienrow + columnindex
            if alien_index < len(aliens):
                alien2 = aliens[alien_index]
                if alien2.x < 10 or alien2.x > screen.width - 10:
                    row_has_edge = True
                columnindex += 1
        row_edge_reached[row_index] = row_has_edge
        row_index += 1
    row_index = 0
    while row_index < rows:
        if row_edge_reached[row_index]:
            columnindex = 0
            while columnindex < alienrow:
                alien_index = row_index * alienrow + columnindex
                if alien_index < len(aliens):
                    alien2 = aliens[alien_index]
                    alien2.y += 5
                    pause(100)
                    current_velocity_x = alien2.vx
                    new_velocity_x = current_velocity_x * -1
                    alien2.set_velocity(new_velocity_x, 0)
                columnindex += 1
        row_index += 1
game.on_update(on_on_update)
