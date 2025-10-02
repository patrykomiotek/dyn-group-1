import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <div className="p-4">
      {/* <AuthContext> */}

      {/* <AuthProvider> */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
