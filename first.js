var myCars = [
    {
      "name": " Axio 2018 WXB ",
      "price": 22.5
    },
    {
        "name": "Premio 2015",
        "price": 26
    },
    {
        "name": "Rickshaw",
        "price": 0.5,
    },
    {
        "name": "CIvic 2019",
        "price": 34.5,
    },
  ];


 var totalPrice = myCars.reduce(function (a, b) {
    return a + b.price;
  }, 0);
  console.log(totalPrice);