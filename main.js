var stores = ['https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwi9uKje3NDlAhXSKewKHbXxBDAQjRx6BAgBEAQ&url=http%3A%2F%2Fobswhatsinstore.blogspot.com%2F2013%2F12%2Fh-opening-southpark-store.html&psig=AOvVaw2PtLJQnZO__1FO-ImGlA-s&ust=1572962662224205',
'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwic466f3NDlAhWEDuwKHbmGBkEQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.youtube.com%2Fuser%2Fzara&psig=AOvVaw02zrHS54VwUH1sYaI0DAfR&ust=1572962544928876',
'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwiFstz33NDlAhUPKewKHXHfDmAQjRx6BAgBEAQ&url=https%3A%2F%2Fcapitolmall.mk%2Fkoton-logo%2F&psig=AOvVaw2dgtzW8SXrbmaWQVM109kb&ust=1572962730328738'
]; /// name , src

for (var i = 0; i < stores.length; i++) {
	$('#storesDiv').append('<img>')
	$('img').attr('src', stores[i])
}