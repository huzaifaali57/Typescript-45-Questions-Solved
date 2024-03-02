function make_album(artist, title, tracks) {
    return {
        artist: artist,
        title: title,
        tracks: tracks || 0
    };
}
// Creating three albums
var album1 = make_album('Bob Dylan', 'Blonde on Blonde');
console.log(album1);
var album2 = make_album('The Beatles', 'Abbey Road', 17);
console.log(album2);
var album3 = make_album('David Hidalgo', 'Camino Real');
console.log(album3);
