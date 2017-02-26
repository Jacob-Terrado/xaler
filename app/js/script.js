$(document).ready(function() {
  Handlebars.registerPartial(
    'partialTemplate', $('#menuPartial').html()
  );

  var products=[
    {name: "KushCo OG", type: "indica", eighth: "1/8", fourth: "1/4", half: "1/2", oz: "1 oz", eighthprice: "$55.00", fourthprice: "$110.00", halfprice: "--", ozprice: "--"},
    {name: "Skywalker OG", type: "indica" , eighth: "1/8", fourth: "1/4", half: "1/2", oz: "1 oz", eighthprice: "$45.00", fourthprice: "$90.00", halfprice: "--", ozprice: "--"},
    {name: "Holy Grail OG", type: "indica", eighth: "1/8", fourth: "1/4", half: "1/2", oz: "1 oz",  eighthprice: "$40.00", fourthprice: "$80.00", halfprice: "--", ozprice: "--"},
    {name: "Pure OG", type: "indica", eighth: "1/8", fourth: "1/4", half: "1/2", oz: "1 oz",  eighthprice: "$35.00", fourthprice: "$65.00", halfprice: "$120.00", ozprice: "$200.00"},
    {name: "Pineapple Express", type: "sativa", eighth: "1/8", fourth: "1/4", half: "1/2", oz: "1 oz",  eighthprice: "$45.00", fourthprice: "$90.00", halfprice: "$160.00", ozprice: "--"},
    {name: "Baby Blue", type: "sativa", eighth: "1/8", fourth: "1/4", half: "1/2", oz: "1 oz",  eighthprice: "$45.00", fourthprice: "$90.00", halfprice: "$160.00", ozprice: "$260.00"},
    {name: "Banana Split", type: "sativa", eighth: "1/8", fourth: "1/4", half: "1/2", oz: "1 oz",  eighthprice: "$45.00", fourthprice: "$90.00", halfprice: "--", ozprice: "--"},
    {name: "Strawberry Banana", type: "sativa", eighth: "1/8", fourth: "1/4", half: "1/2", oz: "1 oz",  eighthprice: "$40.00", fourthprice: "$80.00", halfprice: "$150.00", ozprice: "--"},
    {name: "Supreme Blue Dream", type: "sativa", eighth: "1/8", fourth: "1/4", half: "1/2", oz: "1 oz",  eighthprice: "$40.00", fourthprice: "$80.00", halfprice: "$140.00", ozprice: "$260.00"},
    {name: "Thin Mint", type: "Hybrid", eighth: "1/8", fourth: "1/4", half: "1/2", oz: "1 oz",  eighthprice: "$40.00", fourthprice: "$80.00", halfprice: "$140.00", ozprice: "--"},
    {name: "Forum Cookies", type: "Hybrid", eighth: "1/8", fourth: "1/4", half: "1/2", oz: "1 oz",  eighthprice: "$40.00", fourthprice: "$80.00", halfprice: "$140.00", ozprice: "--"},
    {name: "Purple Kryptonite", type: "Hybrid", eighth: "1/8", fourth: "1/4", half: "1/2", oz: "1 oz",  eighthprice: "$40.00", fourthprice: "$80.00", halfprice: "$150.00", ozprice: "$260.00"},
    {name: "Nug Run - White Walker (Shatter)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$26.00", oneprice: "$48.00", twoprice: "$92.00"},
    {name: "Skywalker OG Shatter", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25.00", oneprice: "$45.00", twoprice: "$85.00"},
    {name: "Green Crack Shatter", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25.00", oneprice: "$45.00", twoprice: "$85.00"},
    {name: "Animal Spirits - Holy Grail OG Vape Cartridge", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25.00", oneprice: "$40.00", twoprice: "$92.00"},
    {name: "Animal Spirits - Girl Scout Cookies Vape Cartridge", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25.00", oneprice: "$40.00", twoprice: "--"},
    {name: "Animal Spirits - Blue Dream Vape Cartridge", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25.00", oneprice: "$40.00", twoprice: "$80.00"},
    {name: "Blue Dream Shatter", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25.00", oneprice: "$45.00", twoprice: "$85.00"},
    {name: "Brass Knuckles - Jack Herer (Sativa)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Brass Knuckles - Strawberry Cough (Sativa)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Brass Knuckles - Candy Apple (Hybrid)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Brass Knuckles - Blue Dream (Sativa)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Brass Knuckles - Gorilla Glue (Hybrid)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Brass Knuckles - Girl Scout Cookies (Hybrid)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Brass Knuckles - Raw (Hybrid)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Brass Knuckles - Abracadabra (Hybrid)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Brass Knuckles - Blueberry (Indica)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Brass Knuckles - Grape Ape (Indica)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Brass Knuckles - Purple Haze (Sativa)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Brass Knuckles - SFV OG (Indica)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Brass Knuckles - Skywalker OG (Indica)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "--", oneprice: "$60.00", twoprice: "--"},
    {name: "Kiva - Ginger Dark Chocolate", type:"edible", price: "$32.00"},
    {name: "Kiva Bar - 4 Flavors", type:"edible", price: "$20.00"},
    {name: "Kiva - Expresso Dark Chocolate", type:"edible", price: "$20.00"},
    {name: "Kiva - Terra Bites - Expresso Beans", type:"edible", price: "$18.00"},
    {name: "Kiva - Terra Bites - Blueberries", type:"edible", price: "$18.00"},
    {name: "Kiva Bar", type:"edible", price: "$18.00"},
    {name: "HealthCare Bar - Vegan", type:"edible", price: "$10.00"},
    {name: "Brass Knuckes - Adjustable Voltage Gold Battery", type:"gear", price: "$30.00"},
    {name: "Brass Knuckes - Gold Vape Battery", type:"gear", price: "$25.00"},
    {name: "Brass Knuckes - Woodgrain Battery", type:"gear", price: "$25.00"}
  ];

  var template = $('#menu').html();
  var templateScript = Handlebars.compile(template);
  var content = {menu: products};
  var html = templateScript(content);

  $(document.body).append(html);

  // Remove blank labeled buttons 
  var quantityButton = document.querySelectorAll(".quantity");
  console.log(quantityButton);
  for(i = 0; i < quantityButton.length; i++){
    if(quantityButton[i].textContent == ''){
      quantityButton[i].style.display = 'none';
    }
  }

});
