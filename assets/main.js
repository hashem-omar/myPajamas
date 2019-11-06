var cart = [];
var billNo = 1;
var bill = [];
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

];

var products = [
	{
		name: 'PajamaGram Fleece Pajamas Women Soft - Winter Pajamas',
		price: 29.99,
		cat: 'kids',
		size: 'M',
		src: 'https://images-na.ssl-images-amazon.com/images/I/61qyubA6SkL._UY879_.jpg'
	},
		{
		name: 'PajamaGram Fleece Pajamas Women Soft - Winter Pajamas',
		price: 49.99,
		cat: 'women',
		size: 'S',
		src: 'https://images-na.ssl-images-amazon.com/images/I/61K7WodBFgL._SY879._SX._UX._SY._UY_.jpg'
	},
		{
		name: 'Hanes Men\'s Micro Fleece Pant Set with Waffle Top',
		price: 23.03,
		cat: 'men',
		size: 'L',
		src: 'https://images-na.ssl-images-amazon.com/images/I/51quRSwZw%2BL._UX679_.jpg'
	}
];

var newPage = function() {
	$('#mainDiv').html('');
	$('#main').html('');
}
var buttons = function() {
	$('#mainDiv').append
		('<input id="cartButton" type ="button" value="Add to Cart" onclick="cartAdd()">',
		 '<input id="menButton" type ="button" value="men" onclick="display.displayMen()">',
		 '<input id="womenButton" type ="button" value="women" onclick="display.displayWomen()">', 
		 '<input id="kidsButton" type ="button" value="kids" onclick="display.displayKids()">'
		);	
}

function display() {
	return {
		displayStores: function() {
			for (var i = 0; i < stores.length; i++) {
				$('<a class="storeLink"></a>').appendTo('#mainDiv').append($('<img>').attr('src', stores[i].src).attr('id', 'imgg'))
			}

			$('.storeLink').click(function() {
				newPage();
					for (var i = 0; i < products.length; i++) {
						$('#main').append($('<div id="productLink"></cdiv>')
						.append($('<img>').attr('src', products[i].src))
						.append($('<div></div>')
							.append($('<h3></h3>')
								.append(products[i].name), $('<p></p>')
								.append('<b> Price: </b>$', products[i].price), $('<p></p>')
								.append('<b> Size: </b>', products[i].size), '<b> select: </b>', $('<input type="checkbox">').attr('id',i))))
					}

				$('#mainDiv').append(
				 buttons()
				)
			});
		},

		displayMen: function() {
			newPage();
			for (var i = 0; i < products.length; i++) {
				if (products[i].cat === 'men') {
						$('#main').append($('<div id="productLink"></cdiv>')
						.append($('<img>').attr('src', products[i].src))
						.append($('<div></div>')
							.append($('<h3></h3>')
								.append(products[i].name), $('<p></p>')
								.append('<b> Price: </b>$',products[i].price), $('<p></p>')
								.append('<b> Size: </b>',products[i].size), '<b> select: </b>', $('<input type="checkbox">').attr('id',i))))
								.append(buttons());
				}
			}
		},

		displayWomen: function() {
			newPage();
			for (var i = 0; i < products.length; i++) {
				if (products[i].cat === 'women') {
						$('#main').append($('<div id="productLink"></cdiv>')
						.append($('<img>').attr('src', products[i].src))
						.append($('<div></div>')
							.append($('<h3></h3>')
								.append(products[i].name), $('<p></p>')
								.append('<b> Price: </b>$',products[i].price), $('<p></p>')
								.append('<b> Size: </b>',products[i].size), '<b> select: </b>', $('<input type="checkbox">').attr('id',i))))
								.append(buttons());
				}
			}
		},

		displayKids: function() {
			newPage();
			for (var i = 0; i < products.length; i++) {
				if (products[i].cat === 'kids') {
						$('#main').append($('<div id="productLink"></cdiv>')
						.append($('<img>').attr('src', products[i].src))
						.append($('<div></div>')
							.append($('<h3></h3>')
								.append(products[i].name), $('<p></p>')
								.append('<b> Price: </b>$',products[i].price), $('<p></p>')
								.append('<b> Size: </b>',products[i].size), '<b> select: </b>', $('<input type="checkbox">').attr('id',i))))
								.append(buttons());
				}
			}
		}
	}
}
var display = display();
$('#mainDiv').html(display.displayStores());


function cartAdd() {
	for (var i = 0; i < products.length; i++) {	
		if(document.getElementById(i).checked) {	
			cart.push(products[i])
		}
	}
}



$('#cart').click(function() {
	newPage();
	var totalPrice = 0;
	for (var i = 0; i < cart.length; i++) {
		$('#main').append($('<div id="productLink"></cdiv>')
		.append($('<img>').attr('src', cart[i].src))
		.append($('<div></div>')
			.append($('<h3></h3>')
				.append(cart[i].name), $('<p></p>')
				.append('<b> Price: </b>$', cart[i].price), $('<p></p>')
				.append('<b> Size: </b>', cart[i].size), $('<input type="checkbox">').attr('id',i))))
		totalPrice += cart[i].price;
	}
	$('#mainDiv').append(totalPrice, '<button id="submitPayment">Submit Payment</button>').click(function() {
		newPage();
		$('#mainDiv').append($('<p></p>').append('Thank You For Shopping From PAJAMAS, Have a Comfort Night'));
		bill.push(cart);
		bill.push(totalPrice);
		bill.push(billNo++);
	})
});









$('body').css('background-image',
	'url("https://dexorate.com/12-minimalist-bedroom-design-ideas-for-cozy-bedroom-inspiration/amazing-minimalist-bedroom-ideas/")')
.css('background-repeat', 'no-repeat')
.css('background-size', 'cover');

