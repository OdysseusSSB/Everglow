ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:saddle'),
    [
      'LLL',
      'S S',
      'N N'
    ],
    {
      L: 'minecraft:leather',
      S: 'minecraft:string',
      N: 'minecraft:iron_nugget'
    }
  )
})