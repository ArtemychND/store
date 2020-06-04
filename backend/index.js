const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const paginate = require('jw-paginate');
const cors = require('cors');

const app = express();

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

router.get('/products', (req, res) => {
  const { type, sort, sortBrand } = req.query;
  const productsStream = fs.readFileSync('./db.json', 'utf8');
  const products = JSON.parse(productsStream);
  let filteredProducts = [];

  if (type === 'promotion') {
    filteredProducts = products.filter(i => i.promotion === true);
    return res.json(filteredProducts);
  }

  if (type === 'new') {
    filteredProducts = products.filter(i => i.new === true);
    return res.json(filteredProducts);
  }

  if (type === 'featured') {
    filteredProducts = products.filter(i => i.featured === true);
    return res.json(filteredProducts);
  }

  let sortBrandProducts = products;

  if (sortBrand.length) {
      sortBrandProducts = products.filter(i => {
        for (key of sortBrand) {
          if (i.typeVariant === key) {
            return i
          } continue
        }
      })
  }

  // switch(sortBrand) {
  //   case 'A':
  //     sortBrandProducts = products.filter(i => i.typeVariant === 'A');
  //     break;
  //   case 'B':
  //     sortBrandProducts = products.filter(i => i.typeVariant === 'B');
  //     break;
  //   case 'C':
  //     sortBrandProducts = products.filter(i => i.typeVariant === 'C');
  //     break;
  //   case 'D':
  //     sortBrandProducts = products.filter(i => i.typeVariant === 'D');
  //     break;
  //   case 'E':
  //     sortBrandProducts = products.filter(i => i.typeVariant === 'E');
  //     break;
  // }

  let sortedProducts = sortBrandProducts;

  // if (sort === 'name_desc') {
  //   console.log('nd');
  //   sortedProducts = products.sort((a, b) => {
  //     if (a.name > b.name) return 1;
  //     if (a.name < b.name) return -1;
  //     return 0;
  //   });
  // }
  // if (sort === 'name_asc') {
  //   console.log('na');
  //   sortedProducts = products.sort((a, b) => {
  //     if (a.name < b.name) return 1;
  //     if (a.name > b.name) return -1;
  //     return 0;
  //   });
  // }
  // if (sort === 'price_desc') {
  //   console.log('pd');
  //   sortedProducts = products.sort((a, b) => a.price - b.price);
  // }
  // if (sort === 'price_asc') {
  //   console.log('pa');
  //   sortedProducts = products.sort((a, b) => b.price - a.price);
  // }

  switch(sort) {
    case 'name_desc':
      console.log('nd');
      sortedProducts = sortBrandProducts.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      break;
    case 'name_asc':
      console.log('na');
      sortedProducts = sortBrandProducts.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      });
      break;
    case 'price_desc':
      console.log('pd');
      sortedProducts = sortBrandProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price_asc':
      console.log('pa');
      sortedProducts = sortBrandProducts.sort((a, b) => b.price - a.price);
      break;
  }

  const page = parseInt(req.query.page) || 1; 
  const pageSize = parseInt(req.query.limit) || 24;
  const pager = paginate(sortedProducts.length, page, pageSize);
  // pager.brand = [];
  const pageOfItems = sortedProducts.slice(pager.startIndex, pager.endIndex + 1); // pager.startIndex, pager.endIndex + 1

  return res.json({
    pager,
    pageOfItems,
  });
});

app.use('/', router);

app.set('port', 4000);

app.listen(app.get('port'), () => {
  console.log('Server is up and running');
});