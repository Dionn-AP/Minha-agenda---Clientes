import { AuthProvider } from './src/context/Auth';
import { RootRoutes } from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <RootRoutes />
    </AuthProvider>
  );
}
