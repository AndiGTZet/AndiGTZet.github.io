////////////////Soal////////////////
var soal	= document.getElementsByClassName('tengah1');
var a_nya	= [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
var a_nya2	= ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'];
var soalnya	=
[
"23/100 = ... %",
"1,35 = ... %",
"Ada 10 buku. 6 buku bersampul coklat. Persentase buku bersampul coklat adalah ... %",
"Bentuk desimal dari 3/8 adalah ?",
"20% dari 15.000 adalah ?",
"Harga sebuah baju adalah Rp. 150.000,00. Ternyata ada potongan 15%. Harga baju itu sekarang adalah ?",
"Hasil dari 0,81 x 5,9 = n. n adalah ?",
"Hasil dari 4.2 : 15% = n. n adalah ?",
"Umur Andi : umur Malarangeng adalah 3 : 5. Jika selisih umur keduanya 6 tahun, maka umur Andi adalah ... tahun.",
"Skala sebuah peta 1 : 520.000. Jarak sebenarnya 31,2 km. Maka jarak pada peta adalah . . . cm."
];

	for(var i = 0; i < a_nya.length; i++)
	{a_nya[i] = soal[i]; document.getElementById(a_nya2[i]).innerHTML = soalnya[i];}

////////////////Jawaban////////////////
var b = 0, s = 0;
var Jawaban		= [23, 135, 60, 0.375, 3000, 127500, 4.779, 28, 9, 0.6];

////////////////Keluaran////////////////
var Lihat_Hasil = document.getElementById('END');
var Hasil 		= document.getElementById('keluaran');

Lihat_Hasil.onclick = function()
{
	for(var i = 0; i < a_nya.length; i++)
	{
		if(soal[i].value == Jawaban[i]){b++;}
		else {s++}
	}

	var total_nilai	= b*10;
	var hasilakhir	= "Nilai : "		+ total_nilai + "/100";
	var hasilbenar	= "<br>Benar : "	+ b + " Soal";
	var hasilsalah	= "<br>Salah : "	+ s + " Soal";

	Hasil.innerHTML =
		"Jawaban No 1 : "	+ a_nya[0].value +
		"<br>Jawaban No 2 : " + a_nya[1].value +
		"<br>Jawaban No 3 : " + a_nya[2].value +
		"<br>Jawaban No 4 : " + a_nya[3].value +
		"<br>Jawaban No 5 : " + a_nya[4].value +
		"<br>Jawaban No 6 : " + a_nya[5].value +
		"<br>Jawaban No 7 : " + a_nya[6].value +
		"<br>Jawaban No 8 : " + a_nya[7].value +
		"<br>Jawaban No 9 : " + a_nya[8].value +
		"<br>Jawaban No 10 : " + a_nya[9].value +
		"<br>-------------------------------------------------<br>" +
		hasilakhir + hasilbenar + hasilsalah;

	 b = 0; s = 0;
};