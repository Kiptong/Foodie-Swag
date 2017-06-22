var products = [
  {id: 'tee', name: 'Tee', images: 'product-images/tee.jpg', description: ['100% Cotton', 'Made in US', 'Durable rib neckband', 'Made of 3 unique yarns'], price: '$19.99', color: ['Black/White', 'White/Black'], size: ['S', 'M', 'L', 'XL']},
  {id: 'hoodie', name: 'Hoodie', images: 'product-images/hoodie.jpg', description: ['100% Cotton', 'Made in US', 'Hooded with matching finished polyester draw cord', 'Kangaroo pocket'], price: '$19.99', color: ['Black/White', 'White/Black'], size: ['S', 'M', 'L', 'XL']},
  {id: 'hat', name: 'Hat', images: 'product-images/hat.jpg', description: ['Made in US', 'Poly-foam Front Two-toned Cap', 'Mesh Back Trucker Cap', 'Plastic Adjustable Snap Closure'], price: '$19.99', color: ['Black/White'], size: ['One Size Fits All']},
  {id: 'sticker', name: 'Sticker', images: 'product-images/sticker.jpg', description: ['Made in US', 'Decal is great for Walls, Doors, Cars, Windows, Desks, ETC', 'Sticker is Vinyl and can withstand outdoor weather', 'Strong Adhesive'], price: '$19.99', color: ['N/A'], size: ['S', 'M', 'L']}
]

var cart = [
]

function createProduct(product) {
  var $product = document.createElement('div')
  var $images = document.createElement('img')
  var $name = document.createElement('h3')
  $images.setAttribute('src', product.images)
  $images.setAttribute('class', 'img-responsive')
  $product.setAttribute('class', 'col-xs-3')
  $images.setAttribute('id', product.id)
  $name.setAttribute('class', 'text-center')
  $name.textContent = product.name
  $product.appendChild($images)
  $product.appendChild($name)

  return $product
}

var $products = document.getElementById('products')
for (var b = 0; b < products.length; b++) {
  $products.appendChild(createProduct(products[b]))
}

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
  $productName.setAttribute('id', 'productName')
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
  $image.setAttribute('id', 'productImage')
  $image.setAttribute('src', product.images)
  $imgDiv.appendChild($image)
  $panelBodyRow.appendChild($imgDiv)

  var $description = document.createElement('div')
  $description.setAttribute('class', 'col-xs-6')
  var $descripTitle = document.createElement('h4')
  $descripTitle.textContent = 'Description'
  var $descripList = document.createElement('ul')
  for (var c = 0; c < product.description.length; c++) {
    var bullet = product.description[c]
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
  $price.setAttribute('id', 'productPrice')
  $price.textContent = 'Price: ' + product.price
  var $priceHr = document.createElement('hr')
  $priceDiv.appendChild($price)
  $priceDiv.appendChild($priceHr)
  $panelBodyRow.appendChild($priceDiv)

  var $sizeDiv = document.createElement('div')
  $sizeDiv.setAttribute('class', 'col-xs-6')

  var $sizeFormGroup = document.createElement('div')
  $sizeFormGroup.setAttribute('class', 'form-group')

  var $sizeSelect = document.createElement('select')
  for (var x = 0; x < product.size.length; x++) {
    var sizeOption = product.size[x]
    var $sizeOption = document.createElement('option')
    $sizeOption.textContent = sizeOption
    $sizeSelect.appendChild($sizeOption)
  }

  $sizeSelect.setAttribute('class', 'form-control')

  $sizeFormGroup.appendChild($sizeSelect)
  $sizeDiv.appendChild($sizeFormGroup)
  $panelBodyRow.appendChild($sizeDiv)

  var $colorDiv = document.createElement('div')
  $colorDiv.setAttribute('class', 'col-xs-6')

  var $colorFormGroup = document.createElement('div')
  $colorFormGroup.setAttribute('class', 'form-group')

  var $colorSelect = document.createElement('select')
  for (var y = 0; y < product.color.length; y++) {
    var colorOption = product.color[y]
    var $colorOption = document.createElement('option')
    $colorOption.textContent = colorOption
    $colorSelect.appendChild($colorOption)
  }

  $colorSelect.setAttribute('class', 'form-control')

  $colorFormGroup.appendChild($colorSelect)
  $colorDiv.appendChild($colorFormGroup)
  $panelBodyRow.appendChild($colorDiv)

  var $addCartDiv = document.createElement('div')
  $addCartDiv.setAttribute('class', 'col-xs-6')

  var $colorButtonHr = document.createElement('hr')
  $addCartDiv.appendChild($colorButtonHr)

  var $addCartButton = document.createElement('button')
  $addCartButton.setAttribute('class', 'btn btn-primary btn-lg btn-block')
  $addCartButton.setAttribute('type', 'button')
  $addCartButton.setAttribute('id', product.id)
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

  $addCartButton.addEventListener('click', addToCart)
  $btpButton.addEventListener('click', backToProducts)

  return $row
}

var $viewProducts = document.getElementById('view-products')
$viewProducts.addEventListener('click', backToProducts)

var $viewCartNav = document.getElementById('view-cart')
$viewCartNav.addEventListener('click', viewCart)

function viewCart(event) {
  // nav bar settings
  var $viewCartNav = document.getElementById('view-cart')
  var $viewProductsNav = document.getElementById('view-products')
  $viewCartNav.setAttribute('class', 'active')
  $viewProductsNav.removeAttribute('class', 'active')

  // show Cart
  var $viewCart = document.getElementById('cart')
  var $productView = document.getElementById('product-detail')
  var $products = document.getElementById('products')
  $products.setAttribute('class', 'hidden')
  $productView.innerHTML = ''

  $viewCart.appendChild(cartView(cart))
}

function backToProducts(event) {
  var $productView = document.getElementById('product-detail')
  var $viewCart = document.getElementById('cart')
  $viewCart.innerHTML = ''
  $productView.innerHTML = ''
  $products.removeAttribute('class', 'hidden')
}

function selectProduct(event) {
  var $productView = document.getElementById('product-detail')
  $products.setAttribute('class', 'hidden')

  var product = findItem(event.target.id, products)
  $productView.appendChild(productView(product))
}

var tee = document.getElementById('tee')
tee.addEventListener('click', selectProduct)

var hoodie = document.getElementById('hoodie')
hoodie.addEventListener('click', selectProduct)

var hat = document.getElementById('hat')
hat.addEventListener('click', selectProduct)

var sticker = document.getElementById('sticker')
sticker.addEventListener('click', selectProduct)

function addToCart(event) {
  var item = findItem(event.target.id, products)
  cart.push(item)
}

function findItem(id, allItems) {
  for (var i = 0; i < allItems.length; i++) {
    if (allItems[i].id === id) {
      return allItems[i]
    }
  }
}

function cartView(event) {
  // panel
  var $panelDiv = document.createElement('div')
  $panelDiv.setAttribute('class', 'panel panel-defualt')

  // panel body
  var $panelBody = document.createElement('div')
  $panelBody.setAttribute('class', 'panel-body')

  // panel header
  var $panelHeader = document.createElement('div')
  $panelHeader.setAttribute('class', 'panel-heading')

  // Cart title
  var $cartTitle = document.createElement('h2')
  $cartTitle.textContent = 'Shopping Cart'
  $cartTitle.setAttribute('class', 'panel text-center')
  $panelHeader.appendChild($cartTitle)

  // Cart Item Row
  var $cartItemRow = document.createElement('div')
  $cartItemRow.setAttribute('class', 'row')

  // Cart Img div
  var $cartImgDiv = document.createElement('div')
  $cartImgDiv.setAttribute('class', 'col-xs-2')

  // Cart Img
  var $cartImg = document.createElement('img')
  $cartImg.setAttribute('class', 'img-responsive')
  $cartImg.setAttribute('src', 'product-images/tee.jpg')
  $cartImgDiv.appendChild($cartImg)

  // Append Img to Row
  $cartItemRow.appendChild($cartImgDiv)

  // Cart Item Title Div
  var $cartItemTitleDiv = document.createElement('div')
  $cartItemTitleDiv.setAttribute('class', 'col-xs-4')

  // Cart Item title
  var $cartItemTitle = document.createElement('h4')
  $cartItemTitle.setAttribute('class', 'product-name')
  var $cartItemPrimary = document.createElement('strong')
  $cartItemPrimary.textContent = 'Tee'
  $cartItemTitle.appendChild($cartItemPrimary)
  $cartItemTitleDiv.appendChild($cartItemTitle)

  // Append Title to Row
  $cartItemRow.appendChild($cartItemTitleDiv)

  // Cart Item Price divs
  var $cartItemPriceDiv = document.createElement('div')
  $cartItemPriceDiv.setAttribute('class', 'col-xs-6')
  var $cartItemPriceTextRight = document.createElement('div')
  $cartItemPriceTextRight.setAttribute('class', 'col-xs-6 text-right')

  // Cart Item Price
  var $cartItemPrice = document.createElement('h6')
  var $cartItemPricePrimary = document.createElement('strong')
  $cartItemPricePrimary.textContent = '19.99'
  var $cartItemPriceSpan = document.createElement('span')
  $cartItemPriceSpan.setAttribute('class', 'text-muted')
  $cartItemPriceSpan.textContent = ' x'
  $cartItemPricePrimary.appendChild($cartItemPriceSpan)
  $cartItemPrice.appendChild($cartItemPricePrimary)
  $cartItemPriceTextRight.appendChild($cartItemPrice)

  // input for multiples of item div
  var $numberOfItemsDiv = document.createElement('div')
  $numberOfItemsDiv.setAttribute('class', 'col-xs-4')

  var $numberOfItems = document.createElement('input')
  $numberOfItems.setAttribute('type', 'text')
  $numberOfItems.setAttribute('class', 'form-control input-sm')
  $numberOfItems.setAttribute('value', '1')
  $numberOfItemsDiv.appendChild($numberOfItems)

  // checkbox to delete items div
  var $itemCheckboxDiv = document.createElement('div')
  $itemCheckboxDiv.setAttribute('class', 'col-xs-2')
  var $itemCheckbox = document.createElement('input')
  $itemCheckbox.setAttribute('type', 'checkbox')
  $itemCheckbox.setAttribute('class', 'btn')
  $itemCheckboxDiv.appendChild($itemCheckbox)

  // Update Cart Button Row
  var $updateCartButtonRow = document.createElement('div')
  $updateCartButtonRow.setAttribute('class', 'row')

  // Update Cart Button div
  var $updateCartButtonDiv = document.createElement('div')
  $updateCartButtonDiv.setAttribute('class', 'text-center')

  // Update Cart Button
  var $updateCartDiv = document.createElement('div')
  $updateCartDiv.setAttribute('class', 'col-xs-9')

  // Need to Update?
  var $updateCart = document.createElement('h6')
  $updateCart.textContent = 'Do you need to update the cart?'
  $updateCart.setAttribute('class', 'text-right')
  $updateCartDiv.appendChild($updateCart)
  $updateCartButtonDiv.appendChild($updateCartDiv)

  // Update Cart Button Actual
  var $clickToUpdate = document.createElement('div')
  $clickToUpdate.setAttribute('class', 'col-xs-3')
  var $updateButton = document.createElement('button')
  $updateButton.setAttribute('type', 'button')
  $updateButton.setAttribute('class', 'btn btn-default btn-sm btn-block')
  $updateButton.textContent = 'Click to Update'
  $clickToUpdate.appendChild($updateButton)
  $updateCartButtonDiv.appendChild($clickToUpdate)

  // Append Update Button
  $updateCartButtonRow.appendChild($updateCartButtonDiv)

  $cartItemPriceDiv.appendChild($cartItemPriceTextRight)
  $cartItemPriceDiv.appendChild($numberOfItemsDiv)
  $cartItemPriceDiv.appendChild($itemCheckboxDiv)

  $cartItemRow.appendChild($cartItemPriceDiv)
  $panelBody.appendChild($cartItemRow)
  $panelBody.appendChild($updateCartButtonRow)
  $panelDiv.appendChild($panelHeader)
  $panelDiv.appendChild($panelBody)

  return $panelDiv
}
