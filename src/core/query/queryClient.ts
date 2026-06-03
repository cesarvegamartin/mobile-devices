import { QueryClient } from '@tanstack/react-query';

const ONE_HOUR_TTL = 60 * 60 * 1000;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: import.meta.env.VITE_CACHE_IN_HOURS * ONE_HOUR_TTL,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
		},
	},
});

export default queryClient;
