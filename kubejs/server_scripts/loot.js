LootJS.modifiers((event) => {
    event
        .addEntityLootModifier('minecraft:zombie')
        .randomChance(0.2).addLoot('farmersdelight:canvas');
});