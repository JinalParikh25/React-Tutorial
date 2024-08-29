import { Children, createContext, useReducer } from "react";

export const TodoItemContext = createContext({
    todoItems: [],
    addItem: () => {},
    deleteItem: () => {}
});

const todoItemsReducer = (currentValue, action) => {
    let newItem = currentValue;

    if (action.type === 'NEW_ITEM') {
        newItem = [...currentValue,
            {
                name: action.Payload.name,
                date: action.Payload.date
            }
        ];
    } else if (action.type === 'DELETE_ITEM') {
        console.log(currentValue);
        newItem = currentValue.filter(currentValue => currentValue !== action.Payload.item);
    }

    return newItem;
}

const TodoItemContextProvider = (prop) => {
    let [todoItems, dispatchMethod] = useReducer(todoItemsReducer, []);

    const addItem = (name, date) => {
        const newItem = {
            type: 'NEW_ITEM',
            Payload: {
                name: name,
                date: date
            }
        };
        dispatchMethod(newItem);
    }

    const deleteItem = (item) => {
        const newItem = {
            type: 'DELETE_ITEM',
            Payload: {
                item: item
            }
        };
        dispatchMethod(newItem);
    }

    return (
        <TodoItemContext.Provider value={{ todoItems, addItem, deleteItem }}>
            {prop.children}
        </TodoItemContext.Provider>
    );
}

export default TodoItemContextProvider;
