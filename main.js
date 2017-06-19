var products = [
  {name: 'Tee', images: 'product-images/tee.jpg', description: ['100% Cotton', 'dasijfaiojdf', 'afdijafjda', 'doasdkfaa'], price: '19.99'},
  {name: 'Hoodie', images: 'product-images/hoodie.jpg', description: ['100% Cotton', 'dasijfaiojdf', 'afdijafjda', 'doasdkfaa'], price: '19.99'},
  {name: 'Hat', images: 'product-images/hat.jpg', description: ['100% Cotton', 'dasijfaiojdf', 'afdijafjda', 'doasdkfaa'], price: '19.99'},
  {name: 'Sticker', images: 'product-images/sticker.jpg', description: ['100% Cotton', 'dasijfaiojdf', 'afdijafjda', 'doasdkfaa'], price: '19.99'}
]

// function createProduct(product) {
//   var $product = document.createElement('div')
//   var $images = document.createElement('img')
//   var $name = document.createElement('h3')
//   $images.setAttribute('src', product.images)
//   $images.setAttribute('class', 'img-responsive')
//   $product.setAttribute('class', 'col-xs-3')
//   $name.setAttribute('class', 'text-center')
//   $name.textContent = product.name
//   $product.appendChild($images)
//   $product.appendChild($name)
//
//   return $product
// }
//
// var $products = document.getElementById('products')
// for (var i = 0; i < products.length; i++) {
//   $products.appendChild(createProduct(products[i]))
// }
function productView(product) {

  var $row = document.createElement('div')
  $row.setAttribute('class', 'row')

  var $panel = document.createElement('div')
  $panel.setAttribute('class', 'panel panel-default')

  var $panelBody = document.createElement('div')
  $panelBody.setAttribute('class', 'panel-body')

  var $panelHeader = document.createElement('div')
  $panelHeader.setAttribute('class', 'col-xs-12')

  var $productName = document.createElement('h2')
  $productName.setAttribute('class', 'text-center')
  $productName.textContent = product.name

  $row.appendChild($panel)
  $panel.appendChild($panelBody)
  $panelBody.appendChild($panelHeader)
  $panelHeader.appendChild($productName)

  var $hideRowName = document.createElement('hr')
  $panelHeader.appendChild($hideRowName)

  var $panelBodyRow = document.createElement('row')
  $panelBodyRow.setAttribute('class', 'row')
  $panelBody.appendChild($panelBodyRow)

  var $imgDiv = document.createElement('div')
  $imgDiv.setAttribute('class', 'col-xs-6')

  var $image = document.createElement('img')
  $image.setAttribute('class', 'img-responsive')
  $image.setAttribute('src', product.images)
  $imgDiv.appendChild($image)
  $panelBodyRow.appendChild($imgDiv)

  var $description = document.createElement('div')
  $description.setAttribute('class', 'col-xs-6')
  var $descripTitle = document.createElement('h4')
  $descripTitle.textContent = 'Description'
  var $descripList = document.createElement('ul')
  for (var i = 0; i < product.description.length; i++) {
    var bullet = product.description[i]
    var $bullet = document.createElement('li')
    $bullet.textContent = bullet
    $descripList.appendChild($bullet)
  }
  $panelBodyRow.appendChild($description)
  $description.appendChild($descripTitle)
  $description.appendChild($descripList)

  var $hideRowDes = document.createElement('hr')
  $description.appendChild($hideRowDes)

  var $priceDiv = document.createElement('div')
  $priceDiv.setAttribute('class', 'col-xs-6')
  var $price = document.createElement('h3')
  $price.textContent = product.price
  var $priceHr = document.createElement('hr')
  $panelBodyRow.appendChild($priceDiv)
  $priceDiv.appendChild($price)
  $priceDiv.appendChild($priceHr)

  return $row
}

var $productView = document.getElementById('product-detail')
for (var i = 0; i < products.length; i++) {
  $productView.appendChild(productView(products[i]))
}
