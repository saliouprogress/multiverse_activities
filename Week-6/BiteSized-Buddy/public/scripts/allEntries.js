console.log('Reading Script')
const meal = {"id": 1};
let x = 0;
function deleteHandler(node) {
    // console.log('handler works')
    // console.log('Here is the node', node)
    node.addEventListener('click', async (e) => {
        console.log("Triggered", e.target.getAttribute('data'))
        let id = e.target.getAttribute('data')
        const res = await fetch("/meals/" + id, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(meal),
        })
        console.log('My meal', meal);
        console.log('My node', node);
        console.log('Here is the meal', res);
        window.location.reload()
    })
}

function deleteImage() {
    console.log('function called')
    //finds all elements/node images puts them in an array
    let deleteImages = document.querySelectorAll('.deleteImage')
    //creates event handler for each image
    for (image of deleteImages) {
    // for (let i = 0; i < deleteImages.length; i++) {
        // x++
        deleteHandler(image)
    }
}

deleteImage();