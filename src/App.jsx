 import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./features/todoSlice.js";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-lg">

        <h1 className="mb-2 text-center text-3xl font-bold text-blue-600">
          My Todo App
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Manage your daily tasks
        </p>

        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between rounded-xl bg-white p-5 shadow-md"
            >
              <span className="text-lg font-medium text-gray-700">
                {todo.text}
              </span>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <p className="mt-6 text-center text-gray-500">
            No todos available!
          </p>
        )}

      </div>
    </div>
  );
}

export default App;