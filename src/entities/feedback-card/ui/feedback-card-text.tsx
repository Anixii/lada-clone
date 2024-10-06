'use client';

import styles from './feedback-card-text.module.scss';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import { Typography } from '@/shared/ui/typography';
import { useState } from 'react';


interface IFeedbackCardProps {
  text: string;
}
const FeedbackCardText = ({ text }: IFeedbackCardProps) => {
  const isTablet = useMediaQuery('(max-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 640px)');
  const limit = isMobile ? 220 : isTablet ? 650 : 1250;
  const [ isExpanded, setIsExpanded ] = useState(false);

  // Функция для переключения состояния текста
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  const displayedText = isExpanded ? text : `${text.substring(0, limit)}`;
  return (
    <div className={styles.main}>
      <Typography variant="text" weight="regular">
        {displayedText}
        {text.length > limit && (
          <span className={styles.main__btn} onClick={toggleText}>
            {isExpanded ? ' cкрыть...' : ' еще...'}
          </span>
        )}
      </Typography>
    </div>
  );
};

export default FeedbackCardText;
