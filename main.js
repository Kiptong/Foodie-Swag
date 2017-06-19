var products = [
  {name: 'Tee', images: 'product-images/tee.jpg'},
  {name: 'Hoodie', images: 'product-images/hoodie.jpg'},
  {name: 'Hat', images: 'product-images/hat.jpg'},
  {name: 'Sticker', images: 'product-images/sticker.jpg'}
]

function createProduct(product) {
  var $product = document.createElement('div')
  var $images = document.createElement('img')
  var $name = document.createElement('h3')
  $images.setAttribute('src', product.images)
  $images.setAttribute('class', 'img-responsive')
  $product.setAttribute('class', 'col-xs-3')
  $name.setAttribute('class', 'text-center')
  $name.textContent = product.name
  $product.appendChild($images)
  $product.appendChild($name)

  return $product
}

var $products = document.getElementById('products')
for (var i = 0; i < products.length; i++) {
  $products.appendChild(createProduct(products[i]))
}
