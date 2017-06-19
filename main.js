var products = [
  {name: 'Tee', images: 'product-images/tee.jpg', description: ['100% Cotton', 'dasijfaiojdf', 'afdijafjda', 'doasdkfaa'], price: '$19.99', color: ['Black/White', 'White/Black'], size: ['S', 'M', 'L', 'XL']},
  {name: 'Hoodie', images: 'product-images/hoodie.jpg', description: ['100% Cotton', 'dasijfaiojdf', 'afdijafjda', 'doasdkfaa'], price: '$19.99', color: ['Black/White', 'White/Black'], size: ['S', 'M', 'L', 'XL']},
  {name: 'Hat', images: 'product-images/hat.jpg', description: ['100% Cotton', 'dasijfaiojdf', 'afdijafjda', 'doasdkfaa'], price: '$19.99', color: ['Black/White'], size: ['One Size Fits All']},
  {name: 'Sticker', images: 'product-images/sticker.jpg', description: ['100% Cotton', 'dasijfaiojdf', 'afdijafjda', 'doasdkfaa'], price: '$19.99', color: ['N/A'], size: ['S', 'M', 'L']}
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
// for (var b = 0; b < products.length; b++) {
//   $products.appendChild(createProduct(products[b]))
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

  var $panelBodyRow = document.createElement('div')
  $panelBodyRow.setAttribute('class', 'row')
  $panelBody.appendChild($panelBodyRow)

  var $imgDiv = document.createElement('div')
  $imgDiv.setAttribute('class', 'col-xs-6')

  var $image = document.createElement('img')
  $image.setAttribute('class', 'thumbnail img-responsive')
  $image.setAttribute('src', product.images)
  $imgDiv.appendChild($image)
  $panelBodyRow.appendChild($imgDiv)

  var $description = document.createElement('div')
  $description.setAttribute('class', 'col-xs-6')
  var $descripTitle = document.createElement('h4')
  $descripTitle.textContent = 'Description'
  var $descripList = document.createElement('ul')
  for (var x = 0; x < product.description.length; x++) {
    var bullet = product.description[x]
    var $bullet = document.createElement('li')
    $bullet.textContent = bullet
    $descripList.appendChild($bullet)
  }
  $description.appendChild($descripTitle)
  $description.appendChild($descripList)
  $panelBodyRow.appendChild($description)

  var $hideRowDes = document.createElement('hr')
  $description.appendChild($hideRowDes)

  var $priceDiv = document.createElement('div')
  $priceDiv.setAttribute('class', 'col-xs-6')
  var $price = document.createElement('h3')
  $price.textContent = 'Price: ' + product.price
  var $priceHr = document.createElement('hr')
  $priceDiv.appendChild($price)
  $priceDiv.appendChild($priceHr)
  $panelBodyRow.appendChild($priceDiv)

  var $sizeButtonDiv = document.createElement('div')
  $sizeButtonDiv.setAttribute('class', 'col-xs-6 dropdown')

  var $sizeButton = document.createElement('button')
  $sizeButton.setAttribute('class', 'btn btn-default btn-block dropdown-toggle')
  $sizeButton.setAttribute('type', 'button')
  $sizeButton.setAttribute('id', 'size')
  $sizeButton.setAttribute('data-toggle', 'dropdown')
  $sizeButton.setAttribute('aria-haspopup', 'true')
  $sizeButton.setAttribute('aria-expanded', 'true')
  $sizeButton.textContent = 'Size'

  var $sizeButtonSpan = document.createElement('span')
  $sizeButtonSpan.setAttribute('class', 'caret')
  $sizeButton.appendChild($sizeButtonSpan)

  var $sizeDropMenu = document.createElement('ul')
  for (var c = 0; c < product.size.length; c++) {
    var sizeOption = product.size[c]
    var $sizeLi = document.createElement('li')
    var $sizeOption = document.createElement('a')
    $sizeOption.setAttribute('href', '#')
    $sizeOption.textContent = sizeOption
    $sizeLi.appendChild($sizeOption)
    $sizeDropMenu.appendChild($sizeOption)
  }
  $sizeDropMenu.setAttribute('class', 'dropdown-menu')
  $sizeDropMenu.setAttribute('aria-labelledby', 'dropdownMenu1')
  $sizeButtonDiv.appendChild($sizeButton)
  $sizeButtonDiv.appendChild($sizeDropMenu)
  $panelBodyRow.appendChild($sizeButtonDiv)

  var $colorButtonDiv = document.createElement('div')
  $colorButtonDiv.setAttribute('class', 'col-xs-6 dropdown')

  var $colorButton = document.createElement('button')
  $colorButton.setAttribute('class', 'btn btn-default btn-block dropdown-toggle')
  $colorButton.setAttribute('type', 'button')
  $colorButton.setAttribute('id', 'color')
  $colorButton.setAttribute('data-toggle', 'dropdown')
  $colorButton.setAttribute('aria-haspopup', 'true')
  $colorButton.setAttribute('aria-expanded', 'true')
  $colorButton.textContent = 'Color'

  var $colorButtonSpan = document.createElement('span')
  $colorButtonSpan.setAttribute('class', 'caret')
  $colorButton.appendChild($colorButtonSpan)

  var $colorDropMenu = document.createElement('ul')
  for (var z = 0; z < product.color.length; z++) {
    var colorOption = product.color[z]
    var $colorLi = document.createElement('li')
    var $colorOption = document.createElement('a')
    $colorOption.setAttribute('href', '#')
    $colorOption.textContent = colorOption
    $colorLi.appendChild($colorOption)
    $colorDropMenu.appendChild($colorOption)
  }
  $colorDropMenu.setAttribute('class', 'dropdown-menu')
  $colorDropMenu.setAttribute('aria-labelledby', 'dropdownMenu1')
  $colorButtonDiv.appendChild($colorButton)
  $colorButtonDiv.appendChild($colorDropMenu)
  $panelBodyRow.appendChild($colorButtonDiv)

  var $colorButtonHr = document.createElement('hr')
  $colorButtonDiv.appendChild($colorButtonHr)

  var $addCartDiv = document.createElement('div')
  $addCartDiv.setAttribute('class', 'col-xs-6')

  var $addCartButton = document.createElement('button')
  $addCartButton.setAttribute('class', 'btn btn-primary btn-lg btn-block')
  $addCartButton.setAttribute('type', 'button')
  $addCartButton.textContent = 'Add to Cart'

  $addCartDiv.appendChild($addCartButton)
  $panelBodyRow.appendChild($addCartDiv)

  var $btpFooterRow = document.createElement('row')
  $btpFooterRow.setAttribute('class', 'row')

  var $btpButtonDiv = document.createElement('div')
  $btpButtonDiv.setAttribute('class', 'col-xs-12 text-center')

  var $btpButton = document.createElement('button')
  $btpButton.setAttribute('class', 'btn btn-secondary')
  $btpButton.setAttribute('type', 'button')
  $btpButton.textContent = 'Back to Products'

  $btpButtonDiv.appendChild($btpButton)
  $btpFooterRow.appendChild($btpButtonDiv)
  $panelBody.appendChild($btpFooterRow)

  return $row
}

var $productView = document.getElementById('product-detail')
for (var y = 0; y < products.length; y++) {
  $productView.appendChild(productView(products[y]))
}
