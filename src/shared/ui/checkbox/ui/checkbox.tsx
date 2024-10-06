'use client';
import styles from './checkbox.module.scss';
import { Typography } from '../../typography';
import { ChangeEventHandler, FC } from 'react';


export interface Sector {
  id: number;
  name: string;
  color?: string;
}

interface AppCheckboxGroupProps {
  label: string;
  sector: Sector;
  onChange: (value?: string | number, checked?: boolean) => void
  checked?: boolean;
  color?: string;
}

const AppCheckboxGroup: FC<AppCheckboxGroupProps> = ({ sector, onChange, checked, color }) => {

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { checked } = event.target;
    onChange(sector.id, checked);
  };


  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={`sector-${sector.name + sector.id}`}
        value={sector.id}
        onChange={handleChange}
        checked={checked}
        className={styles.input}
      />
      <Typography variant='textSmall' weight='regular'>
        {
          color &&
            <span style={{ backgroundImage: color }} className={styles.color_indicator}/>
        }
        <label htmlFor={`sector-${sector.name + sector.id}`}>
          {sector.name.charAt(0).toUpperCase() + sector.name.slice(1)}
        </label>
      </Typography>
    </div>
  );
};

export default AppCheckboxGroup;
