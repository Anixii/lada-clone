import style from './car-characteristics.module.scss';
import { Typography } from '@/shared/ui/typography';


interface ICarCharacteristicsItem {
  label: string;
  value: string;
  colorCircle?: string | null;
}
const CarCharacteristicsItem = ({
  label,
  value,
  colorCircle,
}: ICarCharacteristicsItem) => {
  return (
    <div className={style.characterostics__item}>
      <Typography variant="text" weight="bold">
        {label}
      </Typography>
      <Typography
        className={style.characterostics__item_value}
        variant="text"
        weight="regular"
      >
        {colorCircle && (
          <span
            className={style.characterostics__item_color}
            style={{ backgroundColor: colorCircle }}
          ></span>
        )}
        {value}
      </Typography>
    </div>
  );
};

export default CarCharacteristicsItem;
