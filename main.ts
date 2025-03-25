let row_index = 0
let row_edge_reached: boolean[] = []
let aliens: Sprite[] = []
let row = 0
let i = 0
let edge_reached = false
let column: number;
let alien: Sprite;
let alienpicture = img`
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
    `
let x = 15
let y = 15
let alienrow = 5
let rows = 3
let alienwidth = 15
let alienheight = 15
let alienvelocity = 25
while (row <= rows - 1) {
    column = 0
    while (column <= alienrow - 1) {
        alien = sprites.create(alienpicture, SpriteKind.Enemy)
        alien.setPosition(x + column * alienwidth, y + row * alienheight)
        aliens.push(alien)
        alien.setVelocity(alienvelocity, 0)
        column += 1
    }
    row += 1
}
game.onUpdate(function () {
    let row_has_edge: boolean;
let columnindex: number;
let alien_index: number;
let alien2: Sprite;
let current_velocity_x: number;
let new_velocity_x: number;
row_edge_reached = [false]
    while (row_index < rows) {
        row_has_edge = false
        columnindex = 0
        while (columnindex < alienrow) {
            alien_index = row_index * alienrow + columnindex
            if (alien_index < aliens.length) {
                alien2 = aliens[alien_index]
                if (alien2.x < 10 || alien2.x > screen.width - 10) {
                    row_has_edge = true
                }
                columnindex += 1
            }
        }
        row_edge_reached[row_index] = row_has_edge
        row_index += 1
    }
    row_index = 0
    while (row_index < rows) {
        if (row_edge_reached[row_index]) {
            columnindex = 0
            while (columnindex < alienrow) {
                alien_index = row_index * alienrow + columnindex
                if (alien_index < aliens.length) {
                    alien2 = aliens[alien_index]
                    alien2.y += 5
                    pause(100)
                    current_velocity_x = alien2.vx
                    new_velocity_x = current_velocity_x * -1
                    alien2.setVelocity(new_velocity_x, 0)
                }
                columnindex += 1
            }
        }
        row_index += 1
    }
})
