$(document).ready(function() {
  Handlebars.registerPartial(
    'partialTemplate', $('#menuPartial').html()
  );

  var products=[
    {name: "KushCo OG", type: "indica", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz", eighthprice: "$55", fourthprice: "$110", halfprice: "- - -", ozprice: "- - -"},
    {name: "Skywalker OG", type: "indica" , eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz", eighthprice: "$45", fourthprice: "$90", halfprice: "- - -", ozprice: "- - -"},
    {name: "Holy Grail OG", type: "indica", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "- - -", ozprice: "- - -"},
    {name: "Pure OG", type: "indica", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$35", fourthprice: "$65", halfprice: "$120", ozprice: "$200"},
    {name: "Pineapple Express", type: "sativa", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$45", fourthprice: "$90", halfprice: "$160", ozprice: "- - -"},
    {name: "Baby Blue", type: "sativa", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$45", fourthprice: "$90", halfprice: "$160", ozprice: "$260"},
    {name: "Banana Split", type: "sativa", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$45", fourthprice: "$90", halfprice: "- - -", ozprice: "- - -"},
    {name: "Strawberry Banana", type: "sativa", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "$150", ozprice: "- - -"},
    {name: "Supreme Blue Dream", type: "sativa", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "$140", ozprice: "$260"},
    {name: "Thin Mint", type: "Hybrid", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "$140", ozprice: "- - -"},
    {name: "Forum Cookies", type: "Hybrid", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "$140", ozprice: "- - -"},
    {name: "Purple Kryptonite", type: "Hybrid", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "$150", ozprice: "$260"},
    {name: "Nug Run - White Walker (Shatter)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$26", oneprice: "$48", twoprice: "$92"},
    {name: "Skywalker OG Shatter", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25", oneprice: "$45", twoprice: "$85"},
    {name: "Green Crack Shatter", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25", oneprice: "$45", twoprice: "$85"},
    {name: "Animal Spirits - Holy Grail OG Vape Cartridge", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25", oneprice: "$40", twoprice: "$92"},
    {name: "Animal Spirits - Girl Scout Cookies Vape Cartridge", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25", oneprice: "$40", twoprice: "- - -"},
    {name: "Animal Spirits - Blue Dream Vape Cartridge", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25", oneprice: "$40", twoprice: "$80"},
    {name: "Blue Dream Shatter", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25", oneprice: "$45", twoprice: "$85"},
    {name: "Brass Knuckles - Jack Herer", type:"sativa concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Brass Knuckles - Strawberry Cough", type:"sativa concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Brass Knuckles - Candy Apple", type:"hybrid concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Brass Knuckles - Blue Dream", type:"sativa concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Brass Knuckles - Gorilla Glue", type:"hybrid concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Brass Knuckles - Girl Scout Cookies", type:"hybrid concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Brass Knuckles - Raw", type:"hybrid concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Brass Knuckles - Abracadabra", type:"hybrid concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Brass Knuckles - Blueberry", type:"indica concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Brass Knuckles - Grape Ape", type:"indica concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Brass Knuckles - Purple Haze", type:"sativa concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Brass Knuckles - SFV OG", type:"indica concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Brass Knuckles - Skywalker OG", type:"indica concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
    {name: "Kiva - Ginger Dark Chocolate", type:"edible", per: "each", price: "$32"},
    {name: "Kiva Bar - 4 Flavors", type:"edible", per: "each", price: "$20"},
    {name: "Kiva - Expresso Dark Chocolate", type:"edible", per: "each", price: "$20"},
    {name: "Kiva - Terra Bites - Expresso Beans", type:"edible", per: "each", price: "$18"},
    {name: "Kiva - Terra Bites - Blueberries", type:"edible", per: "each", price: "$18"},
    {name: "Kiva Bar", type:"edible", per: "each", price: "$18"},
    {name: "HealthCare Bar - Vegan", type:"edible", per: "each", price: "$10"},
    {name: "Brass Knuckes - Adjustable Voltage Gold Battery", type:"gear", per: "each", price: "$30"},
    {name: "Brass Knuckes - Gold Vape Battery", type:"gear", per: "each", price: "$25"},
    {name: "Brass Knuckes - Woodgrain Battery", type:"gear", per: "each", price: "$25"}
  ];

  var template = $('#menu').html();
  var templateScript = Handlebars.compile(template);
  var content = {menu: products};
  var html = templateScript(content);

  $(document.body).append(html);

  // Remove blank labeled buttons
  var quantityButton = document.querySelectorAll('.quantity');
  for(i = 0; i < quantityButton.length; i++){
    quantityButton[i].addEventListener('click', selectQuantity);
    if(quantityButton[i].textContent == ''){
      quantityButton[i].style.display = 'none';
    }
  }

  // show selection of quantity
  function selectQuantity(){
    $(this).css({'background-color': 'blue', 'color': 'white'});
    $(this).siblings().css({'background-color': 'white', 'color': 'black'});
  }
});
