let keranjang =
JSON.parse(localStorage.getItem("keranjang"))
|| [];

renderKeranjang();

function tambahKeranjang(nama,harga){

keranjang.push({
nama:nama,
harga:harga
});

simpanData();
renderKeranjang();

alert("Produk ditambahkan");
}

function simpanData(){

localStorage.setItem(
"keranjang",
JSON.stringify(keranjang)
);

}

function renderKeranjang(){

let tabel =
document.getElementById("cart-items");

if(!tabel) return;

tabel.innerHTML="";

let total=0;

keranjang.forEach((item,index)=>{

total += item.harga;

tabel.innerHTML += `
<tr>
<td>${item.nama}</td>
<td>Rp${item.harga.toLocaleString()}</td>
<td>
<button
class="hapus"
onclick="hapusItem(${index})">
Hapus
</button>
</td>
</tr>
`;
});

document.getElementById("total")
.innerHTML=
"Total : Rp"+
total.toLocaleString();
}

function hapusItem(index){

keranjang.splice(index,1);

simpanData();
renderKeranjang();
}

function checkoutWA(){

if(keranjang.length===0){

alert("Keranjang kosong");
return;
}

let nomor="6289525038784";

let pesan=
"Halo D'amayanti Fleur,%0A%0ASaya ingin memesan:%0A";

let total=0;

keranjang.forEach(item=>{

pesan+=
`- ${item.nama}%0A`;

total+=item.harga;

});

pesan+=
`%0ATotal : Rp${total.toLocaleString()}`;

window.open(
`https://wa.me/${nomor}?text=${pesan}`
);
}

function cariProduk(){

let input=
document.getElementById("search")
.value.toLowerCase();

let cards=
document.querySelectorAll(".card");

cards.forEach(card=>{

let nama=
card.querySelector("h3")
.innerText.toLowerCase();

if(nama.includes(input)){

card.style.display="block";

}else{

card.style.display="none";

}

});
}

let slideIndex=0;

function slider(){

let slides=
document.querySelectorAll(".slide");

slides.forEach(s=>{

s.classList.remove("active");

});

slideIndex++;

if(slideIndex > slides.length){

slideIndex=1;
}

slides[slideIndex-1]
.classList.add("active");

setTimeout(slider,3000);
}

slider();