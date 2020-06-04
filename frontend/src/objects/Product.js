
function Product(
  id,
  name,
  price,
  subCategoryId,
  categoryId,
  rate,
  content,
  review,
  typeVariant,
  colorVariant,
  imageUrl,
) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.subCategoryId = subCategoryId;
  this.categoryId = categoryId;
  this.rate = rate;
  this.content = content;
  this.review = review;
  this.typeVariant = typeVariant;
  this.colorVariant = colorVariant;
  this.imageUrl = imageUrl;
}

export default Product;
