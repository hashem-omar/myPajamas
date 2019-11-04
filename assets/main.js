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

for (var i = 0; i < stores.length; i++) {
	$('<a id="storeLink"></a>').appendTo('#storesDiv').append($('<img>').appendTo('#storesDiv').attr('src', stores[i].src)).attr('href', function() {
		if (stores[i].id === 1) {
			$('#storeLink').attr('href', 'zara.html');
		} else if (stores[i].id === 2) {
			$('#storeLink').attr('href', 'index.html');
		}
	});
}

// $('<img id="background">').appendTo('body').attr('src', 'https://images.cdn2.stockunlimited.net/preview1300/men-s-clothing-and-accessories-with-white-background_1976584.jpg')
$('#storesDiv').css('background-image',
	'url("https://images.cdn2.stockunlimited.net/preview1300/men-s-clothing-and-accessories-with-white-background_1976584.jpg")')
.css('background-repeat', 'no-repeat')
.css('background-size', 'cover');