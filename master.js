document.addEventListener("DOMContentLoaded", () => {
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

    const templateHandlebars = '{{#each product}} <div class="product-card"> <img class="product-image img-fluid" src="{{img}}" alt="product-image"> <div class="product-imfo"><h1>{{title}}</h1> <p>{{price}}EUR</p> <button class="button2">Buy now</button> </div></div> {{/each}}'
    const template = Handlebars.compile(templateHandlebars);
    var appEl = document.getElementById('app');
    // var featuredEl = document.querySelector('#featured-products .featured-products__container');
    appEl.innerHTML = template({
        product: [{
            title: "Test Copac 1",
            price: "300",
            img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
        },
            {
                title: "Test Copac 2",
                price: "302",
                img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
            }, {
                title: "Test Copac 3",
                price: "303",
                img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
            }, {
                title: "Test Copac 4",
                price: "304",
                img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
            }
        ]

    });
    var featuredEl = document.querySelector('#featured-products .featured-products__container');

    const featuredTemplate = '<div class="glide2">\n' +
        '  <div class="glide__track" data-glide-el="track">\n' +
        '    <ul class="glide__slides">' +
        '{{#each product}} <li class="glide__slide"> <div><div class="product-card"> <img class="product-image img-fluid" src="{{img}}" alt="product-image"> <div class="product-imfo"><h1>{{title}}</h1> <p>{{price}}EUR</p> <button class="button2">Buy now</button> </div></div></div> </li>{{/each}}'
        + ' </ul>\n' +
        '  </div>\n' +
        ' <div class="glide__arrows arrows2" data-glide-el="controls">\n' +
        '    <button class="glide__arrow glide__arrow--left custom__glide-arrow" data-glide-dir="<"><span class="iconify"\n' +
        '                                                                                     data-icon="ion-arrow-back-sharp"\n' +
        '                                                                                     data-inline="false"></span></button>\n' +
        '    <button class="glide__arrow glide__arrow--right custom__glide-arrow" data-glide-dir=">"><span class="iconify"\n' +
        '                                                                                      data-icon="ion-arrow-forward-sharp"\n' +
        '                                                                                      data-inline="false"></span></button>\n' +
        '  </div>' +
        '</div>';
    const templateFeaturedSlider = Handlebars.compile(featuredTemplate);
    featuredEl.innerHTML = templateFeaturedSlider({
        product: [{
            title: "Test Copac 1",
            price: "300",
            img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
        },
            {
                title: "Test Copac 2",
                price: "302",
                img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
            }, {
                title: "Test Copac 3",
                price: "303",
                img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
            }, {
                title: "Test Copac 4",
                price: "304",
                img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
            }, {
                title: "Test Copac 5",
                price: "304",
                img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
            }, {
                title: "Test Copac 6",
                price: "304",
                img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
            }, {
                title: "Test Copac 7",
                price: "304",
                img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
            }, {
                title: "Test Copac 8",
                price: "304",
                img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
            }, {
                title: "Test Copac 9",
                price: "304",
                img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
            }, {
                title: "Test Copac 10",
                price: "304",
                img: "assets/jonathan-adams-p9vy4WxK7k0-unsplash.png"
            }
        ]

    });


    const config2 = {
        type: "carousel",
        perView: 4,
        autoplay: 2000,
        gap: 30,
        breakpoints: {

            1224: {
                perView: 3
            },
            770: {
                perView: 2
            },
            570: {
                perView: 1
            }
        }
    };
    new Glide('.glide2', config2).mount()


})

