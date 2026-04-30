ServerEvents.recipes(event => {
  event.shaped(
    Item.of('trailsandtales_delight:cherry_cheese_cake'),
    [
      'WWW',
      'CPC',
      'SPS'
    ],
    {
      W: 'minecraft:wheat',
      C: '#forge:cheeses',
      P: 'trailsandtales_delight:cherry_petal',
      S: 'minecraft:sugar'
    }
  );
  event.shaped(
    Item.of('trailsandtales_delight:cherry_pie'),
    [
      'WPW',
      'CPC',
      'SRS'
    ],
    {
      W: 'minecraft:wheat',
      C: '#forge:cheeses',
      P: 'trailsandtales_delight:cherry_petal',
      S: 'minecraft:sugar',
      P: 'trailsandtales_delight:pie_crust'
    }
  );
})