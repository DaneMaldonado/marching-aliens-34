let row_edge_reached: boolean[] = []
let row = 0
let aliens : Sprite[] = []
let edge = false
let value = 0
let col: number;
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
let x = 20
let y = 20
let alienrow = 5
let rows = 3
let alienwidth = 16
let alienheight = 16
let alienvelocity = 20
while (row <= rows - 1) {
    col = 0
    while (col <= alienrow - 1) {
        alien = sprites.create(alienpicture, SpriteKind.Enemy)
        alien.setPosition(x + col * alienwidth, y + row * alienheight)
        aliens.push(alien)
        alien.setVelocity(alienvelocity, 0)
        col += 1
    }
    row += 1
}
game.onUpdate(function () {
    let row_index: number;
let row_has_edge: boolean;
let col_index: number;
let alien_index: number;
let alien2: Sprite;
let current_velocity_x: number;
let new_velocity_x: number;
row_edge_reached = [false]
    for (row_index = 0; row_index < rows; row_index++) {
        row_has_edge = false
        for (col_index = 0; col_index < alienrow; col_index++) {
            alien_index = row_index * alienrow + col_index
            if (alien_index < aliens.length) {
                alien2 = aliens[alien_index]
                if (alien2.x < 10 || alien2.x > screen.width - 10) {
                    row_has_edge = true
                }
                
            }
            
        }
        row_edge_reached[row_index] = row_has_edge
    }
for (row_index = 0; row_index < rows; row_index++) {
        if (row_edge_reached[row_index]) {
            for (col_index = 0; col_index < alienrow; col_index++) {
                alien_index = row_index * alienrow + col_index
                if (alien_index < aliens.length) {
                    alien2 = aliens[alien_index]
                    alien2.y += 5
                    pause(100)
                    current_velocity_x = alien2.vx
                    new_velocity_x = current_velocity_x * -1
                    alien2.setVelocity(new_velocity_x, 0)
                }
                
            }
        }
        
    }
})
