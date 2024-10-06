import styles from './another-services-block.module.scss';
import AnotherServicesCard, { IAnotherServicesCardProps } from '@/entities/another-services-card/another-services-card';
import { Typography } from '@/shared/ui/typography';


interface IAnotherServicesBlockProps {
  anotherServicesItems: Array<IAnotherServicesCardProps>;
}
const AnotherServicesBlock = ({ anotherServicesItems }: IAnotherServicesBlockProps) => {
  return (
    <section className={`container ${styles.main}`}>
      <div className={styles.main__title}>
        <Typography variant="subtitle" weight="regular">
          Вам могут быть интересны другие услуги:
        </Typography>
      </div>
      <div className={styles.main__cards}>
        {anotherServicesItems.map((item, index) => (
          <AnotherServicesCard
            key={index}
            subtitle={item.subtitle}
            title={item.title}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
};

export default AnotherServicesBlock;
