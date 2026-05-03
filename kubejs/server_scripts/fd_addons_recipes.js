ServerEvents.recipes(event => {
  event.shaped(
    Item.of('hearthandharvest:cotton_candy'),
    [
      ' S ',
      'SCS',
      ' P '
    ],
    {
      C: 'rusticdelight:cotton_boll',
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
      C: 'rusticdelight:cotton_boll'
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
    { input: 'hearthandharvest:cotton' },
    'hearthandharvest:cotton',
    'rusticdelight:cotton_boll'
  );
  event.remove({id: 'hearthandharvest:string_from_cotton'});
  event.remove({id: 'hearthandharvest:cotton_candy'});
  event.remove({id: 'hearthandharvest:cotton_bale'});
  event.remove({output: 'rusticdelight:cotton_boll_crate'});
})  