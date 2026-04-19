//name, durration, isCompleted
export interface ITodoItem{
    name: string,
    durration: number,
    isCompleted: boolean
}

export const defaultTodoItem: ITodoItem = {
    name: "",
    durration: 0,
    isCompleted: false
}