var stores = [
	{
		id: 1,
		src: 'https://yt3.ggpht.com/a/AGF-l79LRUf758uxDCycrzeozpV85Fp7bKVokbMq3w=s900-c-k-c0xffffffff-no-rj-mo'
	},

	{
		id: 2,
		src: 'http://nyocommercialobserver.files.wordpress.com/2013/08/hm.gif'
	},

	{
		id: 3,
		src: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-giorgio-armani-logo-edit-voros.jpg'
	},

	{
		id: 4,
		src: 'https://capitolmall.mk/re/wp-content/uploads/2015/03/koton-logo.jpg'
	},

	{
		id: 5,
		src: 'http://www.expobel.by/uploads/1bb0ae9ab862cfedf8b65f8a836b15396d10d6ec.jpeg'
	},

	{
		id: 6,
		src: 'http://lofrev.net/wp-content/photos/2016/05/ralph-lauren-polo-logo.jpg'
	},

	{
		id: 7,
		src: 'https://catalogo.tienda/wp-content/uploads/2017/11/pullbear.png'
	},

	{
		id: 8,
		src: 'https://findlogovector.com/wp-content/uploads/2018/12/bershka-logo-vector.png'
	},

]; //id, src
var cart = []
var products = [
	{
		name: 'PajamaGram Fleece Pajamas Women Soft - Winter Pajamas',
		price: '$29.99',
		cat: 'women',
		size: 'M',
		src: 'https://images-na.ssl-images-amazon.com/images/I/61qyubA6SkL._UY879_.jpg'
	},
		{
		name: 'PajamaGram Fleece Pajamas Women Soft - Winter Pajamas',
		price: '$49.99',
		cat: 'women',
		size: 'S',
		src: 'https://images-na.ssl-images-amazon.com/images/I/61K7WodBFgL._SY879._SX._UX._SY._UY_.jpg'
	},
		{
		name: 'Hanes Men\'s Micro Fleece Pant Set with Waffle Top',
		price: '$23.03',
		cat: 'men',
		size: 'L',
		src: 'https://images-na.ssl-images-amazon.com/images/I/51quRSwZw%2BL._UX679_.jpg'
	}
];

for (var i = 0; i < stores.length; i++) {
	$('<a id="storeLink"></a>').appendTo('#storesDiv').append($('<img>').attr('src', stores[i].src))
}

$('#storeLink').click(function() {
	$('body').html('<header id="header"></header><div id="navDiv"><ul><li id="name"><a href="#index.html"> MY PAJAMAS </a></li><li><a href="#ourServices"> our services </a></li><li><a href="#aboutUs"> about us </a> </li> <li> <a href="#stores"> stores </a> </li> </ul></div>  <div id="productDiv"></div>');
for (var i = 0; i < products.length; i++) {
	$('body').append($('<a id="productLink"></a>').appendTo('#productDiv')
		.append($('<img>').attr('src', products[i].src))).append(products[i].name + '\n' + products[i].price + '\n' +products[i].size)
	.append($('<input type="checkbox" onclick="myFunction()">').attr('id',i));
	}
	$('body').append('<input type ="button" value="Add to Cart" onclick="cartAdd()">').append('<input type ="button" value="men" onclick="displayMen()">','<input type ="button" value="women" onclick="displayWomen()">','<input type ="button" value="kids" onclick="displayKids()">')
});

function myFunction() {

}

function cartAdd() {
	for (var i = 0; i < products.length; i++) {	
		if(document.getElementById(i).checked) {	
			cart.push(products[i])
		}
	}
}

function displayMen() {
	$('body').html('<header id="header"></header><div id="navDiv"><ul><li id="name"><a href="#index.html"> MY PAJAMAS </a></li><li><a href="#ourServices"> our services </a></li><li><a href="#aboutUs"> about us </a> </li> <li> <a href="#stores"> stores </a> </li> </ul></div>  <div id="productDiv"></div>');
	for (var i = 0; i < products.length; i++) {
		if (products[i].cat === 'men') {
			$('body').append().append($('<a id="productLink"></a>').appendTo('#productDiv')
		.append($('<img>').attr('src', products[i].src))).append(products[i].name + '\n' + products[i].price + '\n' +products[i].size)
	.append($('<input type="checkbox">').attr('id', i)).append('<input type ="button" value="Add to Cart" onclick="cartAdd()">').append('<input type ="button" value="men" onclick="displayMen()">','<input type ="button" value="women" onclick="displayWomen()">','<input type ="button" value="kids" onclick="displayKids()">');
		}
	}
}







$('#storesDiv').css('background-image',
	'url("https://images.cdn2.stockunlimited.net/preview1300/men-s-clothing-and-accessories-with-white-background_1976584.jpg")')
.css('background-repeat', 'no-repeat')
.css('background-size', 'cover');


// <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%">
//   <div class="container">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>
// </div>