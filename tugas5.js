/*Perulangan/Looping
=> Instruksi suatu program yang bertujuan untuk mengulang suatu baris perintah dengan nilai yang berbeda.
*/

console.log("-----Tugas 5-----");
/* Perulangan For*/
console.log("-Perulangan For-");
for(let i = 1; i < 4; i++){
    console.log(i);
}

/* Perulangan For Of*/
console.log("-Perulangan For Of-");
const buah = ("Pisang","Semangka","Pepaya"); 

for (const b of buah){
  console.log(b);
}

/* Perulangan For In*/
console.log("-Perulangan For In-");
const data = {
  nama:'Wiradi Nur Khaliq',
  umur:21,
  alamat:'Baturaja'
}
for (d in data){
  console.log(data[d]);
}

/* Perulangan While*/
console.log("-Perulangan For While-");
let nilai=1;
while (nilai <= 5 ){
    console.log("Nomor "+ nilai);
  nilai++;
}

/* Perulangan Do While*/
console.log("-Perulangan For Do While-");
let nomor = 1;
do{
  console.log("No. "+ nomor);
  nomor=nomor+2;
}
  while (nomor <= 7);


/*Soal 2*/
function no(num){
  let pilihno = 0;
  for (let j = 0; j < num.options.length;j++)
    {
      if(num.options[j].selected){
        pilihno++;
      }
    }
  return pilihno;
}

/*Soal 3*/
