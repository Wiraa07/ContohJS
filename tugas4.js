/*Fungsi If/Else
=>  Tambahkan fungsi If buka dan tutup kurung , isi dengan kondisi, selanjutnya buka dan tutup kurung kurawal, isi dengan blok kode yang dieksekusi apabila nilainya benar/True, tambahkan else, buka dan tutup kurung kurawal, isi dengan blok kode yang dieksekusi apabila nilainya salah/False
*/

function cekParameter(x){
  if(x) {
    return ("Ini Parameternya" + x);
  } else {
    return ("Tidak ada parameter yang diberikan!");
  }
}
cekParameter(9);