var img = ["https://img.pngio.com/homer-simpson-happy-transparent-png-stickpng-homero-simpson-png-634_782.png",
    "http://www.pngall.com/wp-content/uploads/2016/06/Bart-Simpson-Transparent.png", "http://pngimg.com/uploads/simpsons/simpsons_PNG24.png",
    "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
           "http://pluspng.com/img-png/maggie-simpson-hd-png-maggie-simpson-icon-png-256.png "];
var names = ["Homer Simpson",
         "Bart Simpson",
         "Marge Simpson",
         "Lisa Simpson",
         "Maggie Simpson"];


var i = -1;

function next() {

    i = i + 1;
    if (i == 5) {
        i = 0;
    }
    document.getElementById("img").src = img[i];
    document.getElementById("name").innerHTML = names[i];
}
