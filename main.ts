namespace SpriteKind {
    export const yuki = SpriteKind.create()
    export const kosuke = SpriteKind.create()
    export const mama = SpriteKind.create()
    export const yoko = SpriteKind.create()
    export const hiro = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.kosuke, function (sprite, otherSprite) {
    mySprite4.say("Happy Father's Day! Thank you for reading comics with me")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hiro, function (sprite, otherSprite) {
    mySprite2.startEffect(effects.confetti)
    mySprite2.say("happy fathers day! thank you for always helping me code (even though I sometimes get mad). have fun!  ")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.yuki, function (sprite, otherSprite) {
    music.playMelody("A C E F D G E F ", 120)
    mySprite5.startEffect(effects.smiles, 5000)
    mySprite5.say("happy father's day! I’m happy when I get to draw with you. I love you!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.yoko, function (sprite, otherSprite) {
    mySprite3.say("Thank you for all the hard work you do for us every day. I admire your dedication and tenacity in your work and your hobbies. I am excited to continue on this adventure in California and at Pixar with you. Love you! Happy Father’s Day!")
})
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let mySprite5: Sprite = null
let mySprite2: Sprite = null
scene.setBackgroundColor(9)
mySprite2 = sprites.create(img`
f f f f f f f 
f 4 4 4 4 4 f 
4 4 f 4 f 4 4 
4 4 4 4 4 4 4 
4 f 4 4 4 f 4 
4 4 f f f 4 4 
4 4 4 4 4 4 4 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
`, SpriteKind.hiro)
mySprite2.setPosition(15, 19)
mySprite5 = sprites.create(img`
. . f f f f f f f f f f . . 
. . f 4 4 4 4 4 4 4 4 f . . 
. . f 4 f f 4 4 f f 4 f . . 
. . f 4 f f 4 4 f f 4 f . . 
f . f 4 4 4 4 4 4 4 4 f . f 
f f f 4 f 4 4 4 4 f 4 f f f 
. . . 4 4 f f f f 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 . . . 
. . . 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 . . . 
. . 3 3 3 3 3 3 3 3 3 3 . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 . 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`, SpriteKind.yuki)
mySprite5.setPosition(116, 25)
mySprite4 = sprites.create(img`
f f f f f f 
f 4 4 4 4 f 
4 f 4 4 f 4 
4 4 4 4 4 4 
f 4 4 4 4 f 
4 f f f f 4 
4 4 4 4 4 4 
f f f f f f 
f f f f f f 
f f f f f f 
f f f f f f 
f f f f f f 
`, SpriteKind.kosuke)
mySprite4.setPosition(45, 100)
mySprite3 = sprites.create(img`
. . f f f f f f f f f f . . 
. . f 4 4 4 4 4 4 4 4 f . . 
. . f 4 f f 4 4 f f 4 f . . 
. . f 4 f f 4 4 f f 4 f . . 
. . f 4 4 4 4 4 4 4 4 f . . 
. . f 4 f 4 4 4 4 f 4 f . . 
f . f 4 4 f f f f 4 4 f . f 
f f f 4 4 4 4 4 4 4 4 f f f 
. . . 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 . . . 
`, SpriteKind.yoko)
mySprite3.setPosition(100, 80)
let mySprite = sprites.create(img`
f f f f f f f f f 
f f f f f f f f f 
f f 4 4 4 4 4 f f 
4 4 f f 4 f f 4 4 
4 4 f f 4 f f 4 4 
4 4 4 4 4 4 4 4 4 
4 f 4 4 4 4 4 f 4 
4 4 f f f f f 4 4 
4 4 4 4 4 4 4 4 4 
8 8 8 8 8 8 8 8 8 
8 d 8 8 d 8 8 8 8 
8 8 8 8 8 8 8 d 8 
8 8 8 8 8 8 8 8 8 
d 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 
8 8 8 d 8 8 8 d 8 
8 8 8 8 8 8 8 8 8 
d 8 8 8 8 8 8 8 8 
8 8 8 d 8 8 d 8 8 
8 8 8 8 8 8 8 8 8 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
