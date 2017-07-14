// Discover The Original Price

/*
We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.

For example:
Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.
*/

function discoverOriginalPrice(discountedPrice, salePercentage) {

	salePercentage /= 100;
	var originalPrice = discountedPrice / (1 - salePercentage);
  var rounded = Math.pow(10, 2);
  originalPrice = Math.round(originalPrice * rounded) / rounded;

  return originalPrice;
}

discoverOriginalPrice(75,25);
