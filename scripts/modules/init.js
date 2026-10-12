// const iceCreamsSrc = ['./assets/Ice-Cream-1.svg', './assets/Ice-Cream-2.svg', './assets/Ice-Cream-3.svg','./assets/Ice-Cream-1.svg', './assets/Ice-Cream-2.svg']
iceCreamsId = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7']
iceCreamsObjs = [['5', '1', '4', '2', '3'], ['5', '4', '3', '1', '6'], ['4', '3', '1', '6', '5'], ['6', '5', '2', '3', '4'], ['5', '6', '2', '4', '1'], ['3', '4', '6', '5', '2'], ['1', '3', '4', '5', '6'],]
//ורוד,כתום,ירוק,תכלת,צהוב,סגול
ices = []
for (let i = 0; i < 7; i++) {
    ices.push(picture = new IceCream(iceCreamsId[i], iceCreamsObjs[i]))
}

function init() {
    let indexes = []
    iceCreams = []
    for (let i = 0; i < iceCreamsObjs.length; i++) {
        let index = Math.trunc(Math.random() * iceCreamsObjs.length)
        if (indexes.indexOf(index) === -1) {
            indexes.push(index)
            iceCreams.push(ices[index])
        }
        else{
            i--
        }
    }
    //here I try to put the picture in the div with id='large' because that in the canvas it wasn't succeded
    // const image = document.createElement('img')
    // image.setAttribute('src', iceCreams[0].picture)
    // document.querySelector('#large').appendChild(image)
    // console.log(iceCreams)

    return iceCreams
    
}
