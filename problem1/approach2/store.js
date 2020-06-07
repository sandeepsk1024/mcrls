const getDefaultGroupDataStructure = function(group) {
    return {
        group,
        itemCount: 0,
        subgroups: []
    }
}

const getDefaultSubgroupDataStructure = function(subgroup) {
    return {
        subgroup, 
        itemCount: 0,
        items : []
    }
}
const Store = function() {
    this.data = []
}

Store.prototype.addGroup = function(group) {
    if(this.hasGroup(group)) {
        throw new Error("Can not add group that already exists")
    }
    this.data.push(getDefaultGroupDataStructure(group))
}

Store.prototype.hasGroup = function(group) {
    return this.data.findIndex(datum => datum.group === group) != -1
}

Store.prototype.addSubgroup = function(group, subgroup) {
    if(this.hasGroupSubgroup(group, subgroup)) {
        throw new Error("Can not add group-subgroup combination that already exists")
    }
    let currentGroup = this.getGroup(group)
    currentGroup.subgroups.push(getDefaultSubgroupDataStructure(subgroup))
}

Store.prototype.getGroup = function(group) {
    return this.data.find(datum => datum.group === group)
}

Store.prototype.getGroupSubgroup = function(group, subgroup) {
    let currentGroup = this.getGroup(group)
    return currentGroup.subgroups.find(gsg => gsg.subgroup == subgroup)
}

Store.prototype.hasGroupSubgroup = function(group, subgroup) {
    if(!this.hasGroup(group)){
        throw new Error("can not find this subgroup, since group does not exist yet")
    }
    let currentGroup = this.getGroup(group)
    return currentGroup.subgroups.findIndex(gsg => gsg.subgroup === subgroup) != -1
}

Store.prototype.addItem = function(group, subgroup, item, cost) {
    if(!this.hasGroup(group)) {
        this.addGroup(group)
    }
    if(!this.hasGroupSubgroup(group, subgroup)) {
        this.addSubgroup(group, subgroup)
    }
    let currentGroup = this.getGroup(group)
    let currentGroupSubgroup = this.getGroupSubgroup(group, subgroup)
    currentGroupSubgroup.items.push({item, cost})
    ++currentGroupSubgroup.itemCount
    ++currentGroup.itemCount
}

Store.prototype.toDefaultOutputFormat = function() {
    return this.data;
}

module.exports = Store;