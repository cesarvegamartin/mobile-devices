import { AppShell, Breadcrumbs, Group, Text, ThemeIcon } from '@mantine/core';
import { IconCode } from '@tabler/icons-react';
import { NavLink, Outlet, useMatches } from 'react-router';
import type { RouteObject } from '@/app/router';

const AppHeader = () => {
	return (
		<NavLink
			style={{
				textDecoration: 'none',
				color: 'inherit',
			}}
			to="/"
		>
			<Group p="md" maw={1400} mx="auto">
				<ThemeIcon size="xl" radius="xl" color="blue" mr="md">
					<IconCode />
				</ThemeIcon>
				<Text size="xl">Mobile Devices</Text>
			</Group>
		</NavLink>
	);
};

const AppBreadcrumbs = () => {
	const matches = useMatches();

	const items = matches.reduce(
		(acc, match) => {
			const pathname = match.pathname.replace(/\/$/, '') || '/';
			if (acc[pathname]) {
				return acc;
			}
			const title = (match as RouteObject).handle?.title || match.pathname;
			acc[pathname] = title;
			return acc;
		},
		{} as Record<string, string>,
	);

	return (
		<Breadcrumbs my={20}>
			{Object.entries(items).map(([pathname, title], index) => (
				<NavLink key={index} to={pathname}>
					{title}
				</NavLink>
			))}
		</Breadcrumbs>
	);
};

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
				<AppHeader />
			</AppShell.Header>

			<AppShell.Main pt="var(--app-shell-header-height)">
				<AppBreadcrumbs />
				{children}
			</AppShell.Main>
		</AppShell>
	);
};

type AppLayoutProps = {
	children?: React.ReactNode;
};

export default AppLayout;
