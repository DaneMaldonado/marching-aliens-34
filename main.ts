let newvelocityx = 0
let alienindex = 0
let columnindex = 0
let rowedge = false
let rowindex = 0
let rowedgereached: boolean[] = []
let aliens: Sprite[] = []
let column = 0
let row = 0
let alienSprite = null
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
let x = 12
let y = 12
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
let col_index: number;
let alien_index: number;
let alien2: Sprite;
let current_velocity_x: number;
let new_velocity_x: number;
rowedgereached = [false]
    while (rowindex < rows) {
        rowedge = false
        columnindex = 0
        while (columnindex < alienrow) {
            alienindex = rowindex * alienrow + columnindex
            if (alienindex < aliens.length) {
                alien2 = aliens[alienindex]
                if (alien2.x < 10 || alien2.x > screen.width - 10) {
                    rowedge = true
                }
            }
            columnindex += 1
        }
        rowedgereached[rowindex] = rowedge
        rowindex += 1
    }
    rowindex = 0
    while (rowindex < rows) {
        if (rowedgereached[rowindex]) {
            columnindex = 0
            while (columnindex < alienrow) {
                alienindex = rowindex * alienrow + columnindex
                if (alienindex < aliens.length) {
                    alien2 = aliens[alienindex]
                    alien2.y += 5
                    pause(100)
                    newvelocityx = 0 * -1
                    alien2.setVelocity(newvelocityx, 0)
                }
                columnindex += 1
            }
        }
        rowindex += 1
    }
})
