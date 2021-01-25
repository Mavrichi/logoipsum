const products = {
    product: [{
        title: "Test Copac 1",
        price: "300 EUR",
        img: "./assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
    },
        {
            title: "Test Copac 2",
            price: "302 EUR",
            img: "./assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
        }, {
            title: "Test Copac 3",
            price: "303 EUR",
            img: "./assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
        }, {
            title: "Test Copac 4",
            price: "304 EUR",
            im: "src=",
            age: `"./assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"`
        }
    ]

}
const templateFeaturedSlider = Handlebars.compile('<div class="glide2">\n' +
    '  <div class="glide__track" data-glide-el="track">\n' +
    '    <ul class="glide__slides">' +
    '{{#each product}} <li class="glide__slide"> <div class="product-card"> <img class="product-image" src=`{{img}}` alt="product-image"> <div class="product-imfo"><h1>{{title}}</h1> <p>{{price}}EUR</p> <button class="button2">Buy now</button> </div></div> </li>{{/each}}'
    + ' </ul>\n' +
    '  </div>\n' +
    ' <div class="glide__arrows" data-glide-el="controls">\n' +
    '    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>\n' +
    '    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>\n' +
    '  </div>' +
    '</div>');

const template = Handlebars.compile('{{#each product}} <div class="product-card"> <img class="product-image" src=`{{img}}` alt="product-image"> <div class="product-imfo"><h1>{{title}}</h1> <p>{{price}}EUR</p> <button class="button2">Buy now</button> </div></div> {{/each}}');
var appEl = document.getElementById('app');
var featuredEl = document.getElementById('featured-products');
appEl.innerHTML = template({
    product: [{
        title: "Test Copac 1",
        price: "300",
        img: ""
    },
        {
            title: "Test Copac 2",
            price: "302",
            img: ""
        }, {
            title: "Test Copac 3",
            price: "303",
            img: ""
        }, {
            title: "Test Copac 4",
            price: "304",
            img: ""
        }
    ]

});
featuredEl.innerHTML = templateFeaturedSlider({
    product: [{
        title: "Test Copac 1",
        price: "300",
        img: ""
    },
        {
            title: "Test Copac 2",
            price: "302",
            img: ""
        }, {
            title: "Test Copac 3",
            price: "303",
            img: ""
        }, {
            title: "Test Copac 4",
            price: "304",
            img: ""
        }, {
            title: "Test Copac 5",
            price: "304",
            img: ""
        }, {
            title: "Test Copac 6",
            price: "304",
            img: ""
        }, {
            title: "Test Copac 7",
            price: "304",
            img: ""
        }, {
            title: "Test Copac 8",
            price: "304",
            img: ""
        }, {
            title: "Test Copac 9",
            price: "304",
            img: ""
        }, {
            title: "Test Copac 10",
            price: "304",
            img: ""
        }
    ]

});

