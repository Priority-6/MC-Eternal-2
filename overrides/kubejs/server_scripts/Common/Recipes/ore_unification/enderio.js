let rebuildAlloySmelting;

createModule("enderio")

modules.enderio.init = (event) => {
    rebuildAlloySmelting = (material, product, inputType, outputType, idSuffix) => {

        let recipe = {
            type: "enderio:alloy_smelting",
            energy: 1500,
            isSmelting: true,
            inputs: [
                inputType
            ],
            result: product
        }

        event.custom(recipe).id(`mce2:unification/alloy_smelting/${material}_${idSuffix}`)
    }
}


modules.enderio.main = (event, material, product) => {

    //event.remove({id: /enderio:smelting\/.*${material}/, type: "enderio:alloy_smelting"})

    //rebuildAlloySmelting(material, product, `forge:dusts/${material}`, "ingot")
}