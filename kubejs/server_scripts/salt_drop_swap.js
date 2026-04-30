ServerEvents.blockLootTables(event => {
    event.addBlock('vintagedelight:salt', table => {
        for (let layers = 1; layers <= 8; layers++) {
            table.addPool(pool => {
                pool.addItem('spelunkery:salt');
                pool.addFunction({
                    function: 'minecraft:set_count',
                    count: layers
                });
                pool.addCondition({
                    condition: 'minecraft:block_state_property',
                    block: 'vintagedelight:salt',
                    properties: {
                        layers: String(layers)
                    }
                });
                pool.rolls = 1;
            });
        }
    });
});