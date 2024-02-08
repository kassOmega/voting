import { Main } from "./main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </div>
  );
}

export default App;
