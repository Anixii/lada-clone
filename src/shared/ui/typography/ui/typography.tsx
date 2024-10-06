import styles from './typography.module.scss';
import classNames from 'classnames';
import { ReactNode, forwardRef, createElement } from 'react';


type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'titleText'
  | 'button'
  | 'text'
  | 'textBody'
  | 'textSmall'
  | 'textExtraSmall'
  | 'subtitle'
  | 'subtitleSecond'
  | 'textHyperSmall';

type ColorVariants = 'gray' | 'black' | 'white' | 'footer' | 'orange' | 'red';

const tags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  button: 'p',
  text: 'p',
  textSmall: 'span',
  textBody: 'p',
  textExtraSmall: 'p',
  subtitle: 'p',
  subtitleSecond: 'p',
  textHyperSmall: 'p',
  titleText: 'h2',
};

interface TypographyProps {
  children: ReactNode;
  variant: TypographyVariants;
  className?: string;
  weight: 'semibold' | 'bold' | 'medium' | 'regular';
  color?: ColorVariants;
  htmlContent?: string;
}

const Typography = forwardRef<unknown, TypographyProps>((props, ref) => {
  const { variant, weight, children, className, color = '', htmlContent } = props;
  const classNamedGenerated = classNames(
    styles[ variant ],
    styles[ weight ],
    styles[ color ],
    className,
  );

  return createElement(
    tags[ variant ],
    {
      className: classNamedGenerated,
      ref,
      dangerouslySetInnerHTML: htmlContent ? { __html: htmlContent } : undefined,
    },
    !htmlContent ? children : null,
  );
});

Typography.displayName = 'Typography';

export default Typography;
