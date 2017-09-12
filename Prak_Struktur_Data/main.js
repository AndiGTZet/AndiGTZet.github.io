////////////////Soal////////////////
var soal	= document.getElementsByClassName('tengah1');
var a_nya	= [a1, a2];
var a_nya2	= ['a1', 'a2'];
var soalnya	=
[
"a.	Pengantar Struktur Data"
+ "<br>b. Array"
+ "<br>c. Record (Rekaman)"
+ "<br>d. Stack (Tumpukan)"
+ "<br>e. Queue (Antrian)"
+ "<br>f. Pointer"
+ "<br>g. Tree"
+ "<br>h. Sort"
+ "<br>i. Searching",
"a.	Pengolahan database."
+ "<br>b. Pengolah kata (word processor)."
+ "<br>c. Berkas-berkas lembar-sebar (spreadsheet)."
+ "<br>d. Citra yang dipampat (dikompres)."
+ "<br>e. Pemampatan berkas dengan teknik tertentu ."
];

	for(var i = 0; i < a_nya.length; i++)
	{a_nya[i] = soal[i]; document.getElementById(a_nya2[i]).innerHTML = soalnya[i];}

////////////////Keluaran////////////////
var Lihat_Hasil = document.getElementById('END');
var Hasil 		= document.getElementById('keluaran');