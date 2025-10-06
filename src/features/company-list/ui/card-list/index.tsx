import React, { useState } from 'react';
import { CardListWrapper } from './style';
import type { CardListProps } from './interfaces';
import { Card } from '@shared/ui/card';
import { TextBlock } from '@shared/ui/text';
import { EmptyList } from '../empty-list';
import { Skeleton } from '@shared/ui/skeleton';
import { FlexLayout } from '@shared/ui/flex';
import { Drawer } from '@shared/ui/drawer';
import type { CompanyInfo } from '@shared/api/models/company';
import { Button } from '@shared/ui/button';
import { HeartFilledIcon } from '@shared/ui/icons/heart-filled-icon';
import { HeartStrokeIcon } from '@shared/ui/icons/heart-stroke-icon';
import { useTheme } from '@emotion/react';
import { StarIcon } from '@shared/ui/icons/star-icon';

export const CardList: React.FC<CardListProps> = ({
	list,
	isLoading,
	isFavorite,
	handleFavorite,
}) => {
	const [showInfo, setShowInfo] = useState(false);
	const [currentItem, setCurrentItem] = useState<CompanyInfo>();

	const theme = useTheme();

	if (isLoading) {
		return (
			<CardListWrapper>
				{new Array(10).fill(0, 0, 10).map(() => (
					<FlexLayout width="227px" height="328px" borderRadius="16px">
						<Skeleton br="16px" />
					</FlexLayout>
				))}
			</CardListWrapper>
		);
	}

	if (!list.length) {
		return <EmptyList />;
	}

	return (
		<CardListWrapper>
			{currentItem && (
				<Drawer
					isOpen={showInfo}
					title={currentItem.title}
					onClose={() => setShowInfo(false)}>
					<FlexLayout justify="space-between" direction="column" height="100%">
						<FlexLayout direction="column" gap="8px">
							<TextBlock variant="body1">{currentItem.title}</TextBlock>
							<FlexLayout align="center" gap="8px">
								<FlexLayout align="center" gap="4px">
									<StarIcon width={16} height={14} color="gold" />{' '}
									<TextBlock variant="body1" color="description">
										4.2
									</TextBlock>
								</FlexLayout>
								<TextBlock variant="body1" color="description">
									Техника - Москва
								</TextBlock>
							</FlexLayout>
							<TextBlock variant="body1">{currentItem.body}</TextBlock>
						</FlexLayout>
						<Button
							onClick={() =>
								handleFavorite(!isFavorite(currentItem), currentItem)
							}>
							<FlexLayout align="center" justify="center" gap="8px">
								{isFavorite(currentItem) ? (
									<HeartFilledIcon
										width={16}
										height={16}
										color={theme.colors.accent.base}
									/>
								) : (
									<HeartStrokeIcon
										width={16}
										height={16}
										color={theme.colors.accent.base}
									/>
								)}
								<TextBlock variant="body1">Добавить в избранное</TextBlock>
							</FlexLayout>
						</Button>
					</FlexLayout>
				</Drawer>
			)}
			{list.map((item) => (
				<Card
					title={<TextBlock variant="body1">{item.title}</TextBlock>}
					onFavorite={(value) => handleFavorite(value, item)}
					isCardFavorite={isFavorite(item)}
					footerButton={{
						text: (
							<TextBlock variant="body1" color="link">
								Подробнее
							</TextBlock>
						),
						onClick: () => {
							setCurrentItem(item);
							setShowInfo(true);
						},
					}}>
					<FlexLayout direction="column" gap="8px">
						<TextBlock variant="body1" clamp>
							{item.title}
						</TextBlock>
						<TextBlock variant="body1" color="description">
							Техника - Москва
						</TextBlock>
						<FlexLayout>
							<StarIcon width={16} height={14} color="gold" />{' '}
							<TextBlock variant="body2" color="description">
								4.2
							</TextBlock>
						</FlexLayout>
					</FlexLayout>
				</Card>
			))}
		</CardListWrapper>
	);
};
