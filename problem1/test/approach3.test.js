var expect = require('chai').expect
const Store = require('../approach3/store');
const ErrorTypes = require('../approach3/utils').ErrorTypes
const getCustomError = require('../approach3/utils').getCustomError

describe('Approach 3 Store', () => {
    let store = null
    before(() => {
        store = new Store()
    })
    after(() => {
        store = null
    })
    it("store.data is empty Object", () => {
        expect(store.data).to.eql({})
    })
    it("store - add Group", () => {
        let newGroupName = "group1"
        store.addGroup(newGroupName)
        expect(store.hasGroup(newGroupName)).to.equal(true)
    })
    it("store - add Group - failure due to group already existing", () => {
        let newGroupName = "group1"
        let badFn = () => {
            store.addGroup(newGroupName)
        }
        expect(badFn).to.throw(ErrorTypes.GROUP_ALREADY_EXISTS);
    })
    it("store - has Group - positive", () => {
        let newGroupName = "group2"
        store.addGroup(newGroupName)
        expect(store.hasGroup(newGroupName)).to.equal(true)
    })
    it("store - has Group - negative", () => {
        expect(store.hasGroup("falana")).to.equal(false)
    })
});
