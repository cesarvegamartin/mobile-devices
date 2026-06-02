import { AppShell, Group, Text, ThemeIcon } from '@mantine/core';
import { IconCode } from '@tabler/icons-react';
import { Outlet } from 'react-router';

const AppLayout = (props: AppLayoutProps) => {
	const { children = <Outlet /> } = props;

	return (
		<AppShell
			maw={1400}
			mx="auto"
			header={{ height: 80, collapsed: false }}
			padding="md"
		>
			<AppShell.Header>
				<Group p="md" maw={1400} mx="auto">
					<ThemeIcon size="xl" radius="xl" color="blue" mr="md">
						<IconCode />
					</ThemeIcon>
					<Text size="xl">Mobile Devices</Text>
				</Group>
			</AppShell.Header>

			<AppShell.Main pt="var(--app-shell-header-height)">
				{children}
			</AppShell.Main>
		</AppShell>
	);
};

type AppLayoutProps = {
	children?: React.ReactNode;
};

export default AppLayout;
