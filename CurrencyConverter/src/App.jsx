import {QueryClientProvider,QueryClient} from "@tanstack/react-query"
import { CurrencyConverter } from "./component/CurrencyConverter";

const App = () => {
  const queryClient = new QueryClient();
  return(
    <QueryClientProvider client = {queryClient}>
      <CurrencyConverter/>
    </QueryClientProvider>
  )
}

export default App;