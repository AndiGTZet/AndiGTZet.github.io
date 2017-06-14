////////////////Soal////////////////
var soal	= document.getElementsByClassName('tengah1');
var a_nya	= [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
var a_nya2	= ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'];
var soalnya	=
[
"2 + 3 = ?",
"Nilai tempat puluhan pada bilangan 36 adalah ?",
"Nilai tempat satuan pada bilangan 47 adalah ?",
"21 + 33 = ?",
"63 - 33 = ?",
"20 + 18 = 18 + T, T adalah ?",
"Adik mempunyai 32 kelereng, kakak memberinya 10 kelereng, berapa jumlah kelereng adik seluruhnya?",
"Dikolam ada 75 ekor ikan, diambil sebanyak 15 ekor. Berapa sisa ikan yang ada dikolam?",
"Ibu Maya membuat 50 kue, diberikan pada susi 10 kue. Berapa sisa kue ibu Maya?",
"Lambang bilangan tiga puluh delapan adalah?"
];

	for(var i = 0; i < a_nya.length; i++)
	{a_nya[i] = soal[i]; document.getElementById(a_nya2[i]).innerHTML = soalnya[i];}

////////////////Jawaban////////////////
var b = 0, s = 0;
var Jawaban		= [5, 3, 7, 54, 30, 20, 42, 60, 40, 38];

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