import TodoList from "@/components/TodoList";

const TodoPage =()=>{
    return(
        <main className="p-4 bg-orange-50 min-h-screen">
            <h1 className="text-2xl font-bold text-orange-500 mb-4">My AI-Powered To-Do List</h1>
            <TodoList />

        </main>
    )
}
export default TodoPage;