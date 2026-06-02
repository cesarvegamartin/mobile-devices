import { createTheme, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import router from './router';

const queryClient = new QueryClient();
const theme = createTheme({});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider theme={theme}>
				<RouterProvider router={router} />
			</MantineProvider>
		</QueryClientProvider>
	);
}

export default App;
