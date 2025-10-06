import React, { useCallback, useMemo, useRef, useState } from 'react';

import {
	ChipDropdownContent,
	ChipWrapper,
	ChipButton,
	ChipDropdownOption,
} from './style';
import type { ChipProps, Option } from './interfaces';
import { CheckIcon } from '../icons/check-icon';
import { ArrowIcon } from '../icons/arrow-icon';
import { useTheme } from '@emotion/react';
import { TextBlock } from '../text';
import { Portal } from '../portal';

export const Chip: React.FC<ChipProps> = ({
	onSelect,
	options,
	children,
}): React.ReactElement => {
	const id = useMemo(() => crypto.randomUUID(), []);

	const [isOpened, setIsOpened] = useState(false);
	const [position, setPosition] = useState({
		top: 0,
		left: 0,
		width: 0,
	});

	const theme = useTheme();

	const selectedOption = useRef<Option>(null);

	const triggerRef = useRef<HTMLDivElement>(null);

	const calculatePosition = () => {
		if (triggerRef.current) {
			const rect = triggerRef.current.getBoundingClientRect();
			setPosition({
				top: rect.bottom + window.pageYOffset,
				left: rect.left + window.pageXOffset,
				width: rect.width,
			});
		}
	};

	const handleSelect = useCallback(
		(option: Option) => {
			if (
				selectedOption.current &&
				selectedOption.current.value === option.value
			) {
				selectedOption.current = null;
				setIsOpened(false);
				return;
			}

			selectedOption.current = option;
			onSelect(option);
			setIsOpened(false);
		},
		[onSelect]
	);

	return (
		<>
			<ChipWrapper id={`chip-${id}`} ref={triggerRef}>
				<ChipButton
					isOpened={isOpened}
					onClick={() => {
						calculatePosition();
						setIsOpened((prev) => !prev);
					}}>
					<div>
						{selectedOption.current ? (
							<TextBlock variant="h6">{selectedOption.current.title}</TextBlock>
						) : (
							children
						)}
					</div>

					<ArrowIcon
						width={12}
						height={12}
						color={theme.colors.accent.base}
						style={{
							transform: isOpened ? 'rotate(-180deg)' : 'rotate(0deg)',
							transition: '0.4s',
						}}
					/>
				</ChipButton>
			</ChipWrapper>

			{isOpened && (
				<Portal>
					<ChipDropdownContent
						isOpened={isOpened}
						style={{
							position: 'absolute',
							top: `${position.top}px`,
							left: `${position.left}px`,
							width: `200px`,
							zIndex: 9999,
						}}>
						{options.map((option) => (
							<ChipDropdownOption
								key={option.value}
								onClick={() => handleSelect(option)}>
								<div>
									{selectedOption.current &&
										selectedOption.current.value === option.value && (
											<CheckIcon width={18} height={18} color="black" />
										)}
								</div>
								{option.title}
							</ChipDropdownOption>
						))}
					</ChipDropdownContent>
				</Portal>
			)}
		</>
	);
};
