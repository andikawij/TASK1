// var list = [[5,3,2,4,1,6], [1,2,2,3,4],[1,3,5,7,9],[1,3,5,7,9],[1,3,5,7,9],[1,3,5,7,2]]

// console.log(ganjilGenap(list))

// function ganjilGenap(kelas) { 
//     var resultArray = []
//     for(let i= 0; i<kelas.length; i++) {
//         var tamp = 0
//         for(let j = 0; j < kelas[i].length; j++) {
//             tamp += kelas[i][j]   
//         }
//         if(tamp % 2 == 0){
//             resultArray.push(kelas[i])
//         }
//     }

//     return resultArray
// }
 //// assignment 2

//  var udin = {
//     nama: "udin", 
//     tinggi: 170, 
//     usia: 21,
//     bb: 71,
//     kendaraan: [
//       {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
//       {merk: 'toyota', buildedBy: 'japan', price: 550000000, type: 'fortuner'}
//     ],
//     laptop: {
//       merk: 'macbook',
//       warna: 'dark grey',
//       size: '15in'
//     } 
//   }
  
//   var ujang = {
//     nama: "ujang", 
//     tinggi: 170, 
//     usia: 21,
//     bb: 71,
//     kendaraan: [
//       {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
//       {merk: 'toyota', buildedBy: 'japan', price: 120000000, type: 'agya'}
//     ],
//     laptop: {
//       merk: 'macbook',
//       warna: 'dark grey',
//       size: '15in'
//     } 
//   }
  
//   var dadang = {
//     nama: "dadang", 
//     tinggi: 170, 
//     usia: 21,
//     bb: 71,
//     kendaraan: [
//       {merk: 'honda', buildedBy: 'japan', price: 400000000, type: 'civic'},
//       {merk: 'toyota', buildedBy: 'japan', price: 140000000, type: 'agya'}
//     ],
//     laptop: {
//       merk: 'macbook',
//       warna: 'dark grey',
//       size: '15in'
//     } 
//   }
//   console.log(orang(udin, ujang, dadang))
//     function orang(udin, ujang, dadang){
//         var human = [udin, ujang, dadang]
//         var mobil = []
//         var tampHuman = {}
//         var palingMahal = 0
//         for(let i = 0; i<human.length; i++){
//             for(let j = 0; j < human[i].kendaraan.length; j++) { 
//                    if(human[i].kendaraan[j].price > palingMahal) {
//                        palingMahal = human[i].kendaraan[j].price 
//                         // tampHuman = human[i].kendaraan[j]
//                         tampHuman.nama = human[i].nama 
//                         tampHuman.kendaraan = human[i].kendaraan[j]
//                     }
//                 }
//             }
//             // udin.kendaraan[1]
//         // console.log(orang)

//         // console.log(tampHuman/)
//         return tampHuman
//     }

//assignment 3
// const number1 = [1,5,7,8,2,3,6,4,3]
// const number2 = [9,2,1,6,4,2,5,7,1]  
// const number3 = [] // [8,3,3]

// console.log(nomor(number1, number2))
// function nomor(number1, number2){
//   var cek = false
//   for(let i = 0; i<number1.length; i++){
//     for(let j = 0; j<number2.length; j++){
//       if(number1[i]!= number2[j]){
//         cek = true
//         } else{
//           cek = false
//           break;
//       } 

//     }
//     if(cek == true ){
//       number3.push(number1[i])
//     }
//   }
//   return number3
// }
  
udin = {
  money: 1000000000,
  carPreference: {
    buildBy: 'jpn',
    needed: 2,
    rangePrice: {from: 200000000, to: 450000000},
    type: ['SUV', 'Hatchback']
  },
  carport: [],
}

let showRoom = [
  {buildBy: 'jpn', brand: 'toyota', price: 123000000, model: 'Agya', type: 'City Car'},
  {buildBy: 'jpn', brand: 'toyota', price: 275000000, model: 'honda city', type: 'Hatchback'}, // v
  {buildBy: 'jpn', brand: 'toyota', price: 305000000, model: 'honda city', type: 'sedan'},  
  {buildBy: 'eu', brand: 'chevrolete', price: 350000000, model: 'trax', type: 'SUV'},
  {buildBy: 'jpn', brand: 'toyota', price: 550000000, model: 'fortuner', type: 'SUV'},
  {buildBy: 'jpn', brand: 'honda', price: 375000000, model: 'HRV', type: 'SUV'}, /// v
]
function mobil(orang, listMobil){
    for(let i =0;i<listMobil.length;i++) {
      if(listMobil[i].price >= 200000000 && listMobil[i].price <= 450000000 ) {
          for(let j=0;j<orang.carPreference.type.length; j++) {
              var type =orang.carPreference.type
              if(type[j] == listMobil[i].type && orang.money > listMobil[i].price) {
                  orang.money -=listMobil[i].price
                  orang.carport.push(listMobil[i])

              }
          }
      }
    }
     return udin
}

console.log(mobil(udin,showRoom))

