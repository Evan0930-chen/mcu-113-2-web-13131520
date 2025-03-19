import { Product } from "./product";

let product = [
  new Product(1, "圖像 Angular 開發入門 第二版", "博碩文化", 500, true, new Date("2024-4-10")),
  new Product(2, "金魚都能懂的 CSS 必學屬性", "博碩文化", 500, true, new Date("2024-4-10")),
];

console.table(product);

setProductDisplay(product[0], false);

console.table(product);

function setProductDisplay(product: Product, isShow: boolean) {
  product.isShow = isShow;
}
