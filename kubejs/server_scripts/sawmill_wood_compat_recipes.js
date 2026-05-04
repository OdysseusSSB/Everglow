const woods = ['quark:blossom', 'quark:ancient']

const getBoardItem = (wood) => {
  const [modId, woodType] = wood.split(':')
  return `everycomp:abnww/${modId}/${woodType}_boards`
}

ServerEvents.recipes(event => {
  woods.forEach(wood => {
    const boardItem = getBoardItem(wood)

    const sawmillRecipe = (ingredient, result, count) => {
      if (count < 1) return
      event.custom({
        type: 'woodworks:sawmill',
        ingredient: ingredient,
        result: result,
        count: count
      })
    }

    const fromLogs   = (result, count) => sawmillRecipe({ tag: `${wood}_logs` }, result, count)
    const fromPlanks = (result, count) => sawmillRecipe({ item: `${wood}_planks` }, result, Math.floor(count / 4))
    const both       = (result, count) => { fromLogs(result, count); fromPlanks(result, count) }

    fromLogs(`${wood}_planks`, 4)

    both(boardItem, 4)
    both(`${wood}_planks_slab`, 8)
    both(`${wood}_planks_stairs`, 4)
    both(`${wood}_ladder`, 4)
    both(`${wood}_pressure_plate`, 2)
    both(`${wood}_fence`, 4)
    both(`${wood}_button`, 4)
    both(`${wood}_fence_gate`, 1)
    both(`${wood}_door`, 2)
    both(`${wood}_sign`, 2)
    both(`${wood}_trapdoor`, 2)
  })
})