import { createTheme, MantineProvider } from '@mantine/core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router';
import queryClient from '@/core/query/queryClient';
import router from './router';

const theme = createTheme({});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider theme={theme}>
				<ReactQueryDevtools initialIsOpen={false} />
				<RouterProvider router={router} />
			</MantineProvider>
		</QueryClientProvider>
	);
}

export default App;
