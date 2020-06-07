const { ErrorTypes, getCustomError } = require('./utils')

const getDefaultGroupDataStructure = function () {
    return {
        subgroups: {}
    }
}

const getDefaultSubgroupDataStructure = function () {
    return {
        items: []
    }
}

const Store = function () {
    this.data = {

    }
}

Store.prototype.addGroup = function (group) {
    if (this.hasGroup(group)) {
        throw getCustomError(ErrorTypes.GROUP_ALREADY_EXISTS)
    }
    this.data[group] = getDefaultGroupDataStructure()
}

Store.prototype.hasGroup = function (group) {
    return this.data[group] !== undefined
}

Store.prototype.addSubgroup = function (group, subgroup) {
    if (this.hasGroupSubgroup(group, subgroup)) {
        throw getCustomError(ErrorTypes.GROUP_SUBGROUP_COMBO_ALREADY_EXISTS)
    }
    let currentGroup = this.getGroup(group)
    currentGroup.subgroups[subgroup] = getDefaultSubgroupDataStructure()
}

Store.prototype.getGroup = function (group) {
    return this.data[group]
}

Store.prototype.hasGroupSubgroup = function (group, subgroup) {
    if (!this.hasGroup(group)) {
        throw getCustomError(ErrorTypes.GROUP_DOES_NOT_EXIST)
    }
    let currentGroup = this.getGroup(group)
    return currentGroup.subgroups[subgroup] !== undefined
}

Store.prototype.addItem = function (group, subgroup, item, cost) {
    if (!this.hasGroup(group)) {
        this.addGroup(group)
    }
    if (!this.hasGroupSubgroup(group, subgroup)) {
        this.addSubgroup(group, subgroup)
    }
    let currentGroup = this.getGroup(group)
    let currentGroupSubgroup = currentGroup.subgroups[subgroup]
    currentGroupSubgroup.items.push({ item, cost })
}

Store.prototype.toDefaultOutputFormat = function () {
    let output = []
    for (let group in this.data) {
        let subgroups = Object.keys(this.data[group].subgroups)
        output.push({
            group,
            itemCount: subgroups.reduce((acc, cur) => {
                return acc + this.data[group].subgroups[cur].items.length
            }, 0),
            subgroups: subgroups.map(sg => { 
                let items = this.data[group].subgroups[sg].items
                return {subgroup: sg, itemCount: items.length, items  }
            })
        })
    }
    return output
}

module.exports = Store;

