// Function for background images (sky & grass)
function bgImage(source, left, bottom, width, height) {
    for (let h=0; h<height; h++) {
        for (let w=0; w<width; w++) {
            newImage(source, left + w*100, bottom + h*100)
        }
    }
}
// Function for adding an image to the web page
function newImage(source, left, bottom) {
    let image = document.createElement('img')
    image.src = source
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
    return image
}
// Function for adding a new item that can be moved/removed
function newItem(source, left, bottom) {
    let item = newImage(source, left, bottom)

    item.addEventListener('dblclick', function() {
        item.remove()
    })
}
///////////////// BACKGROUND //////////////////
// variables for the background images
let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight - horizon
let heightOfGrass = horizon

// Add the sky & grass to the background
bgImage('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
bgImage('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

///////////////// ADD IMAGES //////////////////
// Add the green character
newImage('assets/green-character.gif', '100px', '100px')
// Add the pine tree 
newImage('assets/pine-tree.png', '450px', '200px')
// Add the regular tree 
newImage('assets/tree.png', '200px', '300px')
// Add the pillar 
newImage('assets/pillar.png', '350px', '100px')
// Add the crate
newImage('assets/crate.png', '150px', '200px')
// Add the well
newImage('assets/well.png', '500px', '425px')

///////////////// ADD ITEMS ///////////////////
// Add the sword
newItem('assets/sword.png', '500px', '405px')
// Add the shield
newItem('assets/shield.png', '165px', '185px')
// Add the staff
newItem('assets/staff.png', '600px', '100px')