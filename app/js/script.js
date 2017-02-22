$(document).ready(function() {
  Handlebars.registerPartial(
    'partialTemplate', $('#menuPartial').html()
  );

  var products=[
    {name: "KushCo OG", type: "indica" },
    {name: "Skywalker OG", type: "indica"  },
    {name: "Hardcore OG", type: "indica" },
    {name: "Pure OG", type: "indica" },
    {name: "Pineapple Express", type: "sativa" },
    {name: "Baby Blue", type: "sativa"},
    {name: "Banana Split", type: "sativa"},
    {name: "Strawberry Banana", type: "sativa"},
    {name: "Supreme Blue Dream", type: "sativa"},
    {name: "Thin Mint", type: "Hybrid"},
    {name: "Forum Cookies", type: "Hybrid"},
    {name: "Purple Kryptonite", type: "Hybrid"},
    {name: "Shatter Dogo", type:"concentrate"},
    {name: "Skywalker OG Shatter", type:"concentrate"},
    {name: "Green Crack Shatter", type:"concentrate"},
    {name: "Animal Spirits - Holy Grail", type:"concentrate"},
    {name: "Animal Spirits - Girl Scout Cookies", type:"concentrate"},
    {name: "Blue Dream Shatter", type:"concentrate"},
    {name: "Brass Knuckles - Jack Herer", type:"concentrate"},
    {name: "Brass Knuckles - Gorilla Glue", type:"concentrate"},
    {name: "Brass Knuckles - Girl Scout Cookies", type:"concentrate"},
    {name: "Brass Knuckles - Raw", type:"concentrate"},
    {name: "Brass Knuckles - Blue Dream", type:"concentrate"},
    {name: "Brass Knuckles - Abracadabra", type:"concentrate"},
    {name: "Brass Knuckles - Blueberry", type:"concentrate"},
    {name: "Brass Knuckles - Grape Ape", type:"concentrate"},
    {name: "Brass Knuckles - Purple Haze", type:"concentrate"},
    {name: "Brass Knuckles - SFV OG", type:"concentrate"},
    {name: "Brass Knuckles - Skywalker OG", type:"concentrate"},
    {name: "Brass Knuckles - Strawberry Haze", type:"concentrate"},
    {name: "Brass Knuckles - Candy Apple", type:"concentrate"},
    {name: "Kiva - Ginger Dark Chocolate", type:"edible"},
    {name: "Kiva Bar - 4 Flavors", type:"edible"},
    {name: "Kiva - Expresso Dark Chocolate", type:"edible"},
    {name: "Kiva - Terra Bites - Expresso Beans", type:"edible"},
    {name: "Kiva - Terra Bites - Blueberries", type:"edible"},
    {name: "Kiva Bar", type:"edible"},
    {name: "HealthCare Bar - Vegan", type:"edible"},
    {name: "Brass Knuckes - Adjustable Voltage Gold Battery", type:"gear"},
    {name: "Brass Knuckes - Gold Vape Battery", type:"gear"},
    {name: "Brass Knuckes - Woodgrain Battery", type:"gear"}
  ];

  var template = $('#menu').html();
  var templateScript = Handlebars.compile(template);
  var content = {menu: products};
  var html = templateScript(content);

  $(document.body).append(html);

});
