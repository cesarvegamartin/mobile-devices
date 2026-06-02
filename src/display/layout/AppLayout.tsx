import { AppShell } from '@mantine/core';

const AppLayout = (props: AppLayoutProps) => {
	const { children } = props;

	return (
		<AppShell header={{ height: 60, offset: false, collapsed: false }} padding="md">
			<AppShell.Header p="md">
				Header is hidden when scrolled down, visible when scrolling up
			</AppShell.Header>

			<AppShell.Main pt="var(--app-shell-header-height)">
				{children}
			</AppShell.Main>
		</AppShell>
	);
};

type AppLayoutProps = {
	children: React.ReactNode;
};

export default AppLayout;