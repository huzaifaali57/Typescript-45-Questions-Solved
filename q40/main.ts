function make_album(artist: string, title: string, tracks?: number) {
    return {
        artist: artist,
        title: title,
        tracks: tracks || 0
    };
}

// Creating three albums
let album1 = make_album('Bob Dylan', 'Blonde on Blonde');
console.log(album1);

let album2 = make_album('The Beatles', 'Abbey Road', 17);
console.log(album2);

let album3 = make_album('David Hidalgo', 'Camino Real');
console.log(album3);