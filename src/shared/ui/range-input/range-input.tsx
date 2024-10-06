import styles from './range-input.module.scss';
import { Typography } from '@/shared/ui/typography';
import React from 'react';


interface RangeInputProps {
  title: string;
  minValue: string | null;
  maxValue: string | null;
  onMinChange: (value: string | null) => void;
  onMaxChange: (value: string | null) => void;
  minLabel?: string;
  maxLabel?: string;
  inputClass?: string;
}

const RangeInput: React.FC<RangeInputProps> = ({
  title,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  minLabel = 'от',
  maxLabel = 'до',
  inputClass,
}) => {
  return (
    <div className={styles.rangeInput}>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <label htmlFor={`${title.toLowerCase()}_min`}>
            <Typography variant='text' weight='regular'>
              {minLabel}
            </Typography>
          </label>
          <input
            type="text"
            id={`${title.toLowerCase()}_min`}
            value={minValue ?? ''}
            className={inputClass}
            onChange={(e) => onMinChange(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor={`${title.toLowerCase()}_max`}>
            <Typography variant='text' weight='regular'>
              {maxLabel}
            </Typography>
          </label>
          <input
            type="text"
            id={`${title.toLowerCase()}_max`}
            value={maxValue ?? ''}
            className={inputClass}
            onChange={(e) => onMaxChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeInput;
