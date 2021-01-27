const productsLine1 = [
    {
        title: "Test Copac 1",
        price: "300",
        img: "/assets/jonathan-adams-p9vy4WxK7k0-unsplash.png",
    },
    {
        title: "Test Copac 2",
        price: "302",
        img: "/assets/jonathan-adams-p9vy4WxK7k0-unsplash.png",
    },
    {
        title: "Test Copac 3",
        price: "303",
        img: "/assets/jonathan-adams-p9vy4WxK7k0-unsplash.png",
    },
    {
        title: "Test Copac 4",
        price: "304",
        img: "/assets/jonathan-adams-p9vy4WxK7k0-unsplash.png",
    },
];


const productTemplate = ({img, title, price}) => `
  <div class="product-card"> 
    <img class="product-image" src="${img}" alt="product-image" /> 
    <div class="product-imfo">
      <h1>${title}</h1>
      <p>${price}EUR</p> 
      <button class="button2">Buy now</button> 
    </div>
  </div>
`;

let content = productsLine1.map(o => {
    return productTemplate(o);
}).join("");
document.querySelector("#clientSideRender1 .content").innerHTML = content;