ServerEvents.recipes(event => {
  event.shaped(
    Item.of('hearthandharvest:cotton_candy'),
    [
      ' S ',
      'SCS',
      ' P '
    ],
    {
      C: 'vintage_delight:cotton',
      P: 'minecraft:stick',
      S: 'minecraft:sugar'
    }
  );
  event.shaped(
    Item.of('hearthandharvest:cotton_bale'),
    [
      'CCC',
      'CCC',
      'CCC'
    ],
    {
      C: 'vintage_delight:cotton'
    }
  );
  event.replaceInput(
    { input: 'hearthandharvest:peanut' },
    'hearthandharvest:peanut',
    'vintagedelight:peanut'
  );
  event.replaceInput(
    { input: 'hearthandharvest:roasted_peanuts' },
    'hearthandharvest:roasted_peanuts',
    'vintagedelight:roasted_peanut'
  );
  event.replaceOutput(
    'hearthandharvest:cotton',
    'rustic_delight:cotton_boll'
  );
})