i = 0
edge_reached = False
aliens: List[Sprite] = []
row = 0
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
x = 20
y = 20
alienrow = 5
rows = 3
alienwidth = 16
alienheight = 16
alienvelocity = 20
while row <= rows - 1:
    col = 0
    while col <= alienrow - 1:
        alien = sprites.create(alienpicture, SpriteKind.enemy)
        alien.set_position(x + col * alienwidth, y + row * alienheight)
        aliens.append(alien)
        alien.set_velocity(alienvelocity, 0)
        col += 1
    row += 1

def on_on_update():
    global i
    row_edge_reached = [False] 

    for row_index in range(rows):
        row_has_edge = False
        for col_index in range(alienrow):
            alien_index = row_index * alienrow + col_index
            if alien_index < len(aliens):
                alien2 = aliens[alien_index]
                if alien2.x < 10 or alien2.x > screen.width - 10:
                    row_has_edge = True
        row_edge_reached[row_index] = row_has_edge

    for row_index in range(rows):
        if row_edge_reached[row_index]:
            for col_index in range(alienrow):
                alien_index = row_index * alienrow + col_index
                if alien_index < len(aliens):
                    alien2 = aliens[alien_index]
                    alien2.y += 5
                    pause(100)
                    current_velocity_x = alien2.vx
                    new_velocity_x = current_velocity_x * -1
                    alien2.set_velocity(new_velocity_x, 0)

game.on_update(on_on_update)