export interface Todo {
    id: string,
    title: string,
    isCompleted: boolean
}

export type TodosList = Todo[]

export type TodoId = Pick<Todo, 'id'>

export type TodoTitle = Pick<Todo, 'title'>

export type TodoBoolean = Pick<Todo, 'isCompleted'>