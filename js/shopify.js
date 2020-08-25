/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "darrenharroff-me.myshopify.com",
      storefrontAccessToken: "1c5f0eb1571770484f113e2757d314ad",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "5603709255838",
        node: document.getElementById("product-component-1598116171519"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Raleway, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#236868",
                },
                "background-color": "#277474",
                ":focus": {
                  "background-color": "#236868",
                },
                "border-radius": "40px",
              },
              quantityInput: {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
              },
            },
            text: {
              button: "Add to cart",
            },
            googleFonts: ["Raleway"],
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Raleway, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#236868",
                },
                "background-color": "#277474",
                ":focus": {
                  "background-color": "#236868",
                },
                "border-radius": "40px",
              },
              quantityInput: {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
              },
            },
            googleFonts: ["Raleway"],
            text: {
              button: "Add to cart",
            },
          },
          cart: {
            styles: {
              button: {
                "font-family": "Raleway, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#236868",
                },
                "background-color": "#277474",
                ":focus": {
                  "background-color": "#236868",
                },
                "border-radius": "40px",
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            googleFonts: ["Raleway"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Raleway, sans-serif",
                "background-color": "#277474",
                ":hover": {
                  "background-color": "#236868",
                },
                ":focus": {
                  "background-color": "#236868",
                },
              },
              count: {
                "font-size": "14px",
              },
            },
            googleFonts: ["Raleway"],
          },
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "darrenharroff-me.myshopify.com",
      storefrontAccessToken: "1c5f0eb1571770484f113e2757d314ad",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "5605344313502",
        node: document.getElementById("product-component-1598116781077"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Raleway, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#236868",
                },
                "background-color": "#277474",
                ":focus": {
                  "background-color": "#236868",
                },
                "border-radius": "40px",
              },
              quantityInput: {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
              },
            },
            text: {
              button: "Add to cart",
            },
            googleFonts: ["Raleway"],
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Raleway, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#236868",
                },
                "background-color": "#277474",
                ":focus": {
                  "background-color": "#236868",
                },
                "border-radius": "40px",
              },
              quantityInput: {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
              },
            },
            googleFonts: ["Raleway"],
            text: {
              button: "Add to cart",
            },
          },
          cart: {
            styles: {
              button: {
                "font-family": "Raleway, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#236868",
                },
                "background-color": "#277474",
                ":focus": {
                  "background-color": "#236868",
                },
                "border-radius": "40px",
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            googleFonts: ["Raleway"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Raleway, sans-serif",
                "background-color": "#277474",
                ":hover": {
                  "background-color": "#236868",
                },
                ":focus": {
                  "background-color": "#236868",
                },
              },
              count: {
                "font-size": "14px",
              },
            },
            googleFonts: ["Raleway"],
          },
        },
      });
    });
  }
})();
/*]]>*/
