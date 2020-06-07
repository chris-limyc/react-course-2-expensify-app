import expensesReducers from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'

test('should set default state', () => {
    const state = expensesReducers(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }     
    const state = expensesReducers(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }     
    const state = expensesReducers(expenses, action)
    expect(state).toEqual(expenses)
})

test('shold add an expense', () => {
    const expense = {
        id: '109',
        description: 'laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    }      
  const action  = {
    type: 'ADD_EXPENSE',
    expense
}     
    const state = expensesReducers(expenses, action)
    expect(state).toEqual([...expenses, expense])
    
})

test('shold edit an expense', () => {
    const amount = 12200 
    const action  = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates:  {
    amount
}   
}     
    const state = expensesReducers(expenses, action)
    expect(state[1].amount).toEqual(amount)
    
})

test('shold not edit an expense', () => {
    const amount = 12200 
    const action  = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates:  {
    amount
}   
}     
    const state = expensesReducers(expenses, action)
    expect(state).toEqual(expenses)
    
})

test('shold set expense', () => {
    const action  = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }   
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})  