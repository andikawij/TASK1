const videoData = [
    {
        name : 'Miss Scarlet',
        present : true,
        rooms: [
            {kitchen: false},
            {balltom: false},
            {conservatory: false},
            {'dining room' :false},
            {'billiard room' :false},
            {library: false}
        ]

    },
    {
        name : 'Mrs. White',
        present : false,
        rooms: [
            {kitchen: false},
            {balltom: false},
            {conservatory: false},
            {'dining room' :false},
            {'billiard room' :false},
            {library: false}
        ]

    },  {
        name : 'Reverend Green',
        present : true,
        rooms: [
            {kitchen: false},
            {balltom: false},
            {conservatory: false},
            {'dining room' :false},
            {'billiard room' :false},
            {library: false}
        ]

    },{
        name : 'Rusty',
        present : false,
        rooms: [
            {kitchen: false},
            {balltom: false},
            {conservatory: false},
            {'dining room' :false},
            {'billiard room' :false},
            {library: false}
        ]

    },{
        name : 'Colonel Mustard',
        present : true,
        rooms: [
            {kitchen: false},
            {balltom: false},
            {conservatory: false},
            {'dining room' :false},
            {'billiard room' :false},
            {library: false}
        ]

    },{
        name : 'Professor Plum',
        present : true,
        rooms: [
            {kitchen: false},
            {balltom: false},
            {conservatory: false},
            {'dining room' :false},
            {'billiard room' :false},
            {library: false}
        ]

    },
];

var tamp = videoData.filter(benar => benar.present )
console.log(tamp)
console.log(tamp.length)
// var benar = [];
// for(let i = 0; i < videoData.length; i++) {
//     if(videoData[i].present){
//         benar.push(videoData[i])
//         // console.log(videoData[i])
//     }
//     // if(videoData[i].present) {
//     //     // console.log(`ini dia index yang true ${i}`)
//     // } else {
//     //     // console.log(`ini dia index yang false ${i}`)
//     // }
// }
// console.log(benar)

// videoData.filter(el => {
//     console.log(el)
// });

// console.log(i)
// var i = 0;
// while(i < 5 ) {
//     console.log(`ini while ${i}`)
//     i++
// }