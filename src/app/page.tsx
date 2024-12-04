// /src/app/page.tsx

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import TodoList from "../components/TodoList";
import Header from "../components/Header";
import "@copilotkit/react-ui/styles.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="bg-primary text-white min-h-screen flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold mb-6">My Todo List</h1>
        <CopilotKit runtimeUrl="/api/copilotkit">
          <TodoList />
          <CopilotPopup
            instructions="Help the user manage their todo list."
            defaultOpen={false}
            labels={{
              title: "Todo List Assistant",
              initial: "Hi! I'm here to help you manage your tasks.",
            }}
          />
        </CopilotKit>
      </div>
    </>
  );
};

export default HomePage;