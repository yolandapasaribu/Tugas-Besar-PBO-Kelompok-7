const prompt = require('prompt-sync')()

//deklarasi
var array = []

var arrayMhs = []

let index 


function Buku(kdBuku,judulBuku, pengarang, tahunTerbit, penerbit){
    this.kdBuku = kdBuku
    this.judulBuku = judulBuku
    this.pengarang = pengarang
    this.tahunTerbit = tahunTerbit
    this.penerbit = penerbit

//function cetak data
    this.cetak = function(){
        console.log('Kode Buku\t\t:', this.kdBuku)
        console.log('Judul Buku\t\t:',  this.judulBuku)
        console.log('Pengarang\t\t:',  this.pengarang)
        console.log('Tahun Terbit\t\t:',  this.tahunTerbit)
        console.log('Penerbit\t\t:', this.penerbit)
    }
}

function tambahBuku(){
    console.log()
    console.log('-----Tambah Data Buku-----')
    let jmlBuku = prompt('Jumlah Buku yang akan ditambahkan\t: ')
    for(let i=1; i <=jmlBuku; i++){
        console.log()
        console.log(`Input Buku ke-${i}: `)
        buku = new Buku(
            prompt(`Input Kode Buku\t\t : `),
            prompt(`Input Judul\t\t : `),
            prompt(`Input Nama Pengarang\t : `),
            prompt(`Input Tahun Terbit\t : `),
            prompt(`Input Penerbit\t : `)
        )
        array.push(buku)
    }
}


function inputan(input){
    return prompt(input)
}

function cariDataBuku(){
    console.log()
    console.log('-----Cari Data Buku-----')
    urutanBuku = inputan('Masukkan Urutan Buku: ')
    index = urutanBuku;

    //cetak data buku sesuai pencarian
    console.log(`Data Buku ke-${index}`)
    array[index-1].cetak()
}

function editDataBuku(){
    console.log()
        console.log('-----Edit Data Buku-----')
        //input urutan buku yang diubah
        urutanBuku = inputan('Masukkan urutan buku yang ingin diubah\t: ')

        Buku.prototype.edit = function(){
            kdBuku = prompt("Input Kode Buku Baru\t\t : ")
            judulBuku = prompt("Input Judul Baru\t\t : ")
            pengarang = prompt("Input Nama Pengarang Baru\t : ")
            tahunTerbit = prompt("Input Tahun Terbit Baru\t : ")
            penerbit = prompt("Input Penerbit Baru\t : ")

            //cetak data setelah di edit
            cetak = this.cetak
            //mengembalikan nilai
            return {
                kdBuku,judulBuku, pengarang, tahunTerbit, penerbit
            }   
        }
        //data di simpan pada array
        var index = urutanBuku-1
        array[index] = array[index].edit()
}

//cetak data
function cetakDataBuku(){
  console.log('-----TAMPIL DATA SEMUA BUKU-----')
//perulangan data
  let indx = 1 
  for(let i in array){
    console.log(`\nBuku ke-${indx}`)
    indx++
    // cetak data sesuai urutan
    console.log(`Kode Buku\t\t: ${array[i].kdBuku}`)
    console.log(`Judul Buku\t\t: ${array[i].judulBuku}`)
    console.log(`Pengarang\t\t: ${array[i].pengarang}`)
    console.log(`Tahun Terbit\t\t: ${array[i].tahunTerbit}`)
    console.log(`Penerbit\t\t: ${array[i].penerbit}`)
  }
}

//tampil menu data buku
function menuBuku(){
    var pilihMenu = true

    while(pilihMenu){
        console.log("======================")
        console.log("  MENU PENDATAAN BUKU   ")
        console.log("======================")
        console.log("1. Tambah Buku")
        console.log("2. Cari Data Buku")
        console.log("3. Edit Data Buku")
        console.log("4. Daftar Buku")
        console.log("5. Keluar")

        //input pilihan menu data buku
        var pilihan = inputan('Masukan pilihan\: ')
        switch(pilihan){
        case '1':
            pilihan = tambahBuku()
            break;
        case '2' :
            pilihan = cariDataBuku()
            break;
        case '3' :
            pilihan = editDataBuku()
            break;
        case '4' :
            pilihan = cetakDataBuku()
            break;
        case '5' :
            console.log('Keluar!')
            pilihMenu = false
            break; 
        default:
            console.log("Pilihan tidak ditemukan")
        }

    }
}

//=======================================================================================================================
//deklarasi
arrayMhs = []

//class peminjaman
function Peminjaman(nama,nim, prodi,kodeBuku,judulBukuPeminjaman,tglPeminjaman,tglKembali){
    this.nama = nama
    this.nim = nim
    this.prodi = prodi
    this.kodeBuku = kodeBuku
    this.judulBukuPeminjaman = judulBukuPeminjaman
    this.tglPeminjaman = tglPeminjaman
    this.tglKembali = tglKembali

    //mengembalikan nilai
    return {
      nama: this.nama,
      nim: this.nim,
      prodi: this.prodi,
      kodeBuku: this.kodeBuku,
      judulBukuPeminjaman: this.judulBukuPeminjaman,
      tglPeminjaman : this.tglPeminjaman,
      tglKembali : this.tglKembali
    }
}

//input data peminjaman
function inputDataPeminjaman() {
    let nama = prompt("Input Nama\t\t : ")
    let nim = prompt("Input NIM\t\t : ")

    //memilih option prodi
    console.log(" Pilih Prodi")
        console.log(" 1. S1 Software Engineering")
        console.log(" 2. S1 Teknik Informatika")
        console.log(" 3. S1 Sistem Informasi")
        console.log(" 4. S1 Teknik Telekomunikasi")
        console.log(" 5. S1 Teknik Elekro")
    let prodi = prompt("Input Prodi\t\t : ")
    var prodiKalimat = null
    switch (prodi){
        case '1' : 
            prodiKalimat = 'S1 Software Engineering'
            break
        case '2' : 
            prodiKalimat = 'S1 Teknik Informatika'
            break
        case '3' : 
            prodiKalimat = 'S1 Sistem Informasi'
            break
        case '4' : 
            prodiKalimat = 'S1 Teknik Telekomunikasi'
            break
        case '5' : 
            prodiKalimat = 'S1 Teknik Elekro'
            break  
        default :
            prodiKalimat = '-'
    }

    let kodeBuku = prompt('Input Kode Buku\t: ')
    let judulBukuPeminjaman = prompt('Input Judul Buku\t: ')
    let tglPeminjaman = prompt('Input Tanggal Peminjaman\t: ')
    let tglKembali = prompt('Input Tanggal Kembali\t: ')

    //membuat object baru
    let dataMhs = new Peminjaman(nama,nim,prodiKalimat,
        kodeBuku,judulBukuPeminjaman,tglPeminjaman, 
        tglKembali)
    //simpan data peminjam di arrayMhs
    arrayMhs.push(dataMhs)
}

//cetak data peminjam
function cetakDataPeminjam(){
    let index = 1 
    for(let p in arrayMhs){  
        console.log(`\nPeminjaman ke-${index}`)
        index++
        //cetak data sesuai urutan
        console.log(`Nama Mahasiswa         : ${arrayMhs[p].nama}`)
        console.log(`NIM                    : ${arrayMhs[p].nim}`)
        console.log(`Prodi                  : ${arrayMhs[p].prodi}`)
        console.log(`Kode Buku              : ${arrayMhs[p].kodeBuku}`)
        console.log(`Judul Buku             : ${arrayMhs[p].judulBukuPeminjaman}`)
        console.log(`Tanggal Peminjaman     : ${arrayMhs[p].tglPeminjaman}`)
        console.log(`Tanggal Kembali        : ${arrayMhs[p].tglKembali}`)
        console.log()
    } 
}

//menu peminjam
function menuMhs(){
    var pilihMenuMhs = true

    while(pilihMenuMhs){
    console.log("======================")
    console.log("  MENU PEMIINJAMAN    ")
    console.log("======================")
    console.log("1. Tambah Data Peminjaman")
    console.log("2. Cetak Data Peminjaman")
    console.log("3. Keluar")
//input pilihan menu
    var menuPinjam = prompt('Masukan pilihan\: ')
    switch(menuPinjam){
            case'1':
            console.log('== TAMBAH DATA PEMINJAM ==')
            menuPinjam = inputDataPeminjaman()
            break;

            case'2':
            console.log('== DATA PEMINJAM ==')
            menuPinjam = cetakDataPeminjam()
            break

            case'3':
            pilihMenuMhs = false
            break

            default :
            console.log('Nope')
        }
    }
}

//========================================================================================================================
//deklarasi
var pilihMenuAll = true

//Semua menu
while(pilihMenuAll){
    console.log("======================")
    console.log(" MENU PENDATAAN PERPUS  ")
    console.log("======================")
    console.log("1. Data Buku")
    console.log("2. Data Peminjaman")
    console.log("3. Keluar")
//input pilihan menu
    var menu = prompt('Masukan pilihan\: ')
    switch(menu){
            case'1':
            menu = menuBuku()
            break;

            case'2':
            menu = menuMhs()
            break

            case '3':
            pilihMenuAll = false
            break;

            default:
            console.log('ERROR 404 NOT FOUND!')
        }
}

