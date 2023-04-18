import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import NoMatch from './pages/NoMatch';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalTheme } from './theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="starred" element={<Starred />}></Route>
              <Route path="/show/:showId" element={<Show />}></Route>
            </Route>

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </HashRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
