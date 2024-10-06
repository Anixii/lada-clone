import styles from './button.module.scss';
import { Typography } from '@/shared/ui/typography';
import rightWhiteArrow from '@/shared/assets/icons/arrow-left-white.svg';
import rightBlackArrow from '@/shared/assets/icons/arrow-left-black.svg';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import classnames from 'classnames';
import Image from 'next/image';


type ButtonVariants = 'primary' | 'secondary';
type ButtonColors = 'default' | 'black' | 'white' | 'gray';
type ButtonTextColors = 'text_primary' | 'text_black' | 'text_white' | 'text_gray'
type ButtonSizes = 'small' | 'medium' | 'large' | 'normal';
type ArrowDirection = 'right' | 'left';

interface AppButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  className?: string;
  variant?: ButtonVariants;
  right_icon?: 'true' | 'false';
  size?: ButtonSizes;
  arrow_direction?: ArrowDirection;
  color?: ButtonColors;
  text?: ButtonTextColors;
  circled?: 'true' | 'false';
  textClass?: string;
}

const AppButton: FC<AppButtonProps> = (props) => {
  const {
    children,
    className,
    variant = 'default',
    right_icon = 'false',
    circled = 'false',
    arrow_direction = 'right',
    textClass,
    size = 'medium',
    color = 'default',
    text = 'text_gray',
  } = props;

  const icon = color === 'black' ? rightWhiteArrow : rightBlackArrow;

  return (
    <button
      {...props}
      className={classnames(
        styles.button,
        { [ styles[ variant ] ]: variant },
        { [ styles[ size ] ]: size },
        { [ styles[ text ] ]: text },
        { [ styles[ color ] ]: color },
        [ circled === 'true' && styles.circled ],
        className,
      )}
    >
      <Typography variant="button" weight="regular" className={textClass}>
        {children}
      </Typography>
      {right_icon === 'true' && (
        <div
          className={classnames(styles.right_icon, { [ styles[ arrow_direction ] ]: arrow_direction })}
        >
          <Image src={icon} alt="right icon" />
        </div>
      )}
    </button>
  );
};

export default AppButton;
