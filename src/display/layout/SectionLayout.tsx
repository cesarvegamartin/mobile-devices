import { Flex, SimpleGrid, Title } from '@mantine/core';

type SectionLayoutProps = {
	title: string;
	children: React.ReactNode;
	aside?: React.ReactNode;
};

const SectionLayout = (props: SectionLayoutProps) => {
	const { title, children, aside } = props;

	return (
		<>
			<SimpleGrid cols={{ base: 1, sm: 2 }} mb={20}>
				<Title flex={1}>{title}</Title>
				{aside}
			</SimpleGrid>
			{children}
		</>
	);
};

export default SectionLayout;
