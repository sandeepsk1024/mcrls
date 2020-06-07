let initGroupSummary = (group) => ({
    group,
    itemCount: 0,
    subgroups: []
})

let initSubgroupSummary = (subgroup) => ({
    subgroup,
    itemCount: 0,
    items: []
})

module.exports = products => {
    const output = []

    let productsWithNoGroup = initGroupSummary(null)
    delete productsWithNoGroup.subgroups
    productsWithNoGroup.items = []

    //lets find those with no group
    products.filter(p => !p.group).forEach(pWithoutG => {
        ++productsWithNoGroup.itemCount;
        productsWithNoGroup.items.push(pWithoutG)
    })

    output.push(productsWithNoGroup)

    //lets find those with group
    const uniqueGroups = new Set();
    products.forEach(p => p.group && uniqueGroups.add(p.group))

    for (let uniqueGroup of uniqueGroups) {
        let groupSummary = initGroupSummary(uniqueGroup)
        let productsOfCurrentGroup = products.filter(p => p.group == uniqueGroup)


        //lets find those without any subgroup
        let productsWithCurrentGroupAndNoSubgroup = initSubgroupSummary(null)
        productsOfCurrentGroup.filter(pcg => !pcg.subgroup).forEach(cgpws => {
            ++groupSummary.itemCount
            productsWithCurrentGroupAndNoSubgroup.items.push({ item: cgpws.item, cost: cgpws.cost })
        })
        productsWithCurrentGroupAndNoSubgroup.itemCount = productsWithCurrentGroupAndNoSubgroup.items.length;
        groupSummary.subgroups.push(productsWithCurrentGroupAndNoSubgroup)

        //lets find those with subgroup
        let uniqueSubGroupsUnderCurrentGroup = new Set()
        productsOfCurrentGroup.forEach(pocg => pocg.subgroup && uniqueSubGroupsUnderCurrentGroup.add(pocg.subgroup))

        for (let uniqueSubgroup of uniqueSubGroupsUnderCurrentGroup) {
            let subgroupSummary = initSubgroupSummary(uniqueSubgroup)
            let currentGroupSubgroupItems = productsOfCurrentGroup.filter(pcg => pcg.subgroup == uniqueSubgroup)
            currentGroupSubgroupItems.forEach(csgi => {
                ++subgroupSummary.itemCount
                ++groupSummary.itemCount
                subgroupSummary.items.push({
                    item: csgi.item,
                    cost: csgi.cost
                })
            })

            groupSummary.subgroups.push(subgroupSummary)
        }
        output.push(groupSummary)
    }
    return output
}