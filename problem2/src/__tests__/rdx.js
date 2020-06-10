const createStore = require('../rdx/store.js').default
const actions = require('../rdx/actions').default

describe("Redux Store", () => {
    let store = null;
    beforeAll(() => {
        store = createStore();
    })
    
    test("Redux Store is not null", () => {
        expect(store).not.toBe(null)
    })

    test("Redux Store initial state", () => {
        let state = store.getState()
        expect(state.ui).toEqual({activeTabIndex: 0})
        expect(state.tasks.list.length).toBe(5)
    })
})

describe("Dispatch to Redux Store", () => {
    let store = null;
    let unsubscribe = null;
    afterEach(() => {
        if(unsubscribe) {
            unsubscribe()
        }
    })
    beforeAll(() => {
        store = createStore();
    })
    test("Dispatch - UI - Tab Change", (done) => {
        unsubscribe = store.subscribe(() => {
            let state = store.getState()
            expect(state.ui.activeTabIndex).toBe(1)
            done()
        })
        store.dispatch(actions.creators.UI.createAction_activateTab(1))
    })

    test("Dispatch - Tasks - Create Task", (done) => {
        let state = store.getState()
        let tasksListBeforeAdding = state.tasks.list
        let newTaskName = "New Task 1"
        unsubscribe = store.subscribe(() => {
            state = store.getState()
            expect(state.tasks.list.length).toBe(tasksListBeforeAdding.length + 1)
            expect(state.tasks.list[tasksListBeforeAdding.length]).toMatchObject({
                task: newTaskName,
                isCompleted: false
            })
            done()
        })
        store.dispatch(actions.creators.TASKS.createAction_createTask(newTaskName))
    })

    test("Dispatch - Tasks - Mark Task as Complete", (done) => {
        let state = store.getState()
        let tasksList = state.tasks.list
        unsubscribe = store.subscribe(() => {
            state = store.getState()
            let taskMarkedAsCompleted = state.tasks.list[tasksList.length - 1]
            expect(taskMarkedAsCompleted).toMatchObject({
                isCompleted: true
            })
            done()
        })
        store.dispatch(actions.creators.TASKS.createAction_markTaskAsComplete(tasksList[tasksList.length - 1]))
    })
})
