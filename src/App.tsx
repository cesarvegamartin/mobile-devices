import { createTheme, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppLayout from './display/layout/AppLayout';

const queryClient = new QueryClient();
const theme = createTheme({});

function App() {
	return (
		
		<QueryClientProvider client={queryClient}>
			<MantineProvider theme={theme}>
				<AppLayout>
					<div>
						<h1>Welcome to the App</h1>
						<p>This is a simple example of using the AppLayout component.</p>
					</div>
				</AppLayout>
			</MantineProvider>
		</QueryClientProvider>
	);
}

export default App;
