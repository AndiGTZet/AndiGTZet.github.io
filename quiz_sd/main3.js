////////////////Soal////////////////
var soal	= document.getElementsByClassName('tengah1');
var a_nya	= [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
var a_nya2	= ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'];
var soalnya	=
[
"Luas bangun persegi panjang dengan panjang 4 cm & lebar 2 cm adalah ... cm2.",
"Kebun Ayah berbentuk persegi dengan luas 81 m2. Panjang sisi kebun tersebut adalah ... cm.",
"Kolam Pak Usman berbentuk persegi panjang. Panjangnya 12 m dan lebar 8 m. Luas kolam Pak Usman adalah ... m2.",
"Ibu membuat kue bolu. Kue itu dibagi menjadi 6 bagian yang sama besar. Kemudian 2/6 bagian di makan Andi dan 1/6 bagian di makan Mita. Sisa kue bolu Ibu sekarang adalah .../6 bagian.",
"Panjang buku gambar adik 22 cm dan 10 cm. Kelilingnya adalah ... cm.",
"Keliling bangun persegi yang memiliki sisi 17 cm adalah ... cm.",
"Bu Mirna membeli pita sepanjang 10/5 meter. Diberikan kepada 2 anaknya masing-masing 4/5 meter. Berapa .../10 meter sisa pita Bu Mirna sekarang?",
"Permukaan papan tulis di kelas 3 mempunyai ... sudut.",
"Jam 03.00 membentuk sudut ... derajat.",
"Jam 06.00 membentuk sudut ... derajat."
];

	for(var i = 0; i < a_nya.length; i++)
	{a_nya[i] = soal[i]; document.getElementById(a_nya2[i]).innerHTML = soalnya[i];}

////////////////Jawaban////////////////
var b = 0, s = 0;
var Jawaban		= [8, 900, 96, 3, 64, 68, 4, 4, 90, 180];

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