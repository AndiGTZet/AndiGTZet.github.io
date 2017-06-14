////////////////Soal////////////////
var soal	= document.getElementsByClassName('tengah1');
var a_nya	= [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
var a_nya2	= ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'];
var soalnya	=
[
"4 x 8 = ?",
"5 x 2 = 10 maka 10 : 2 = ?",
"Nisa membeli buku tulis 2 bungkus setiap bungkus berisi 10 buah buku. Berapa jumlah buku Nisa semuanya?",
"Ibu mempunyai 3 bungkus lilin, masing - masing bungkus berisi 15 batang lilin. Berapa batang jumlah lilin ibu semuanya?",
"10 x 3 : 6 = ?",
"20 x 4 : 2 = ?",
"Tanji mempunyai 35 butir kelereng, di bagikan dengan rata kepada 5 orang temannya. Berapa butir kelereng yang di dapat masing - masing temannya?",
"Ventri mempunyi 5 kantong kelereng, masing - masing kantong berisi 10 butir kelereng, kemudian dia membagi rata kepada temannya Doni dan Tegar. Berapa butir kelereng yang didapat Doni dan Tegar?",
"Jumlah sisi segitiga adalah?",
"Jumlah sudut lancip pada bangun segitiga adalah?"
];

	for(var i = 0; i < a_nya.length; i++)
	{a_nya[i] = soal[i]; document.getElementById(a_nya2[i]).innerHTML = soalnya[i];}

////////////////Jawaban////////////////
var b = 0, s = 0;
var Jawaban		= [32, 5, 20, 45, 5, 40, 7, 25, 3, 3];

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
			"Jawaban No 1 : " + a_nya[0].value +
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