////////////////Soal////////////////
var soal	= document.getElementsByClassName('tengah1');
var a_nya	= [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
var a_nya2	= ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'];
var soalnya	=
[
"Hasil dari -375 + (-492) - (-518) adalah ?",
"Hasil pengerjaan dari 6.575 + 9.457 - 8.594 + 7.777 adalah ?",
"Hasil 1.320 - 152 x 7 adalah ?",
"Sebuah kalkulator bila dijual Rp 91.800,00 untung 8%. Harga pembelian kalkulator adalah Rp ... ,00.",
"FPB dari 84 dan 112 adalah ?",
"KPK dari 24 dan 40 adalah ?",
"Debit sebuah pancuran 8 liter/detik. Bila dalam waktu 2.5 jam, maka air yang ditampung sebanyak ... m<sup>3</sup>.",
"Jumlah umur Deni dan Anto 36 tahun, Deni 4 tahun lebih tua daripada Anto. Umur Deni adalah ... tahun.",
"Suhu di Athena saat ini 59&degF. Suhu tersebut sama dengan suhu di puncak Jaya Wijaya. Suhu di puncak Jaya Wijaya saat itu ... &degC.",
"Hasil ulangan rata-rata 8 anak 6,7. Setelah ditambah hasil ulangan Nurul, rata-ratanya menjadi 6,9. Hasil ulangan Nurul adalah ?"
];

	for(var i = 0; i < a_nya.length; i++)
	{a_nya[i] = soal[i]; document.getElementById(a_nya2[i]).innerHTML = soalnya[i];}

////////////////Jawaban////////////////
var b = 0, s = 0;
var Jawaban		= [-349, 15215, 256, 85000, 28, 120, 72, 20, 15, 8.5];

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
