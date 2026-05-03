ServerEvents.recipes(event => {
  event.shaped(
    Item.of('trailandtales_delight:cherry_cheese_cake'),
    [
      'WWW',
      'CPC',
      'SPS'
    ],
    {
      W: 'minecraft:wheat',
      C: '#forge:cheeses',
      P: 'trailandtales_delight:cherry_petal',
      S: 'minecraft:sugar'
    }
  );
  event.shaped(
    Item.of('trailandtales_delight:cherry_pie'),
    [
      'WPW',
      'CPC',
      'SRS'
    ],
    {
      W: 'minecraft:wheat',
      C: '#forge:cheeses',
      P: 'trailandtales_delight:cherry_petal',
      S: 'minecraft:sugar',
      P: 'trailandtales_delight:pie_crust'
    }
  );
})