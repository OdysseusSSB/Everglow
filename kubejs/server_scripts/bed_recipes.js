ServerEvents.recipes(event => {
  const colours = [
    'white', 'orange', 'magenta', 'light_blue',
    'yellow', 'lime', 'pink', 'gray',
    'light_gray', 'cyan', 'purple', 'blue',
    'brown', 'green', 'red', 'black'
  ]
 
  const canvas = 
 
  colours.forEach(colour => {
    const bed = `minecraft:${colour}_bed`
    const wool = `minecraft:${colour}_wool`
 
    // Remove the original recipe
    event.remove({ output: bed, type: 'minecraft:crafting_shaped' })

    event.shaped(
      Item.of(bed),
      [
        'C',
        'W',
        'F'
      ],
      {
        C: 'farmersdelight:canvas',
        W: wool,
        F: 'kubejs:bedframe'
      }
    )
  })
})