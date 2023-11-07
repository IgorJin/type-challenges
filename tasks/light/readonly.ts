interface Todo {
  title: string
  description: string
}

type MyReadonly<T> = {
  readonly [Property in keyof T]: T[Property]
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyReadonly2<T, K> = {
  K extends T ? readonly [Property in keyof T]: T[Property] : [Property in keyof T]: T[Property]
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK