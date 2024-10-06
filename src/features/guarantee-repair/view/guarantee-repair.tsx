import styles from './guarantee-repair.module.scss';
import { AccordionSecond } from '@/shared/ui/accordion-second';
import { Typography } from '@/shared/ui/typography';


const GuaranteeRepair = () => {
  return (
    <section className={`${styles.main} container`}>
      <div className={styles.main__text}>
        <Typography
          variant="h4"
          weight="regular"
          className={styles.main__title}
        >
          Гарантийные обязательства изготовителя
        </Typography>
        <Typography
          variant="text"
          weight="regular"
          className={styles.main__subtitle}
        >
          1. Гарантия качества.
        </Typography>
        <Typography
          variant="text"
          weight="regular"
          className={styles.main__subtitle}
        >
          1.1 Качество автомобиля, а также конструкция и материалы комплектующих
          изделий соответствуют выданному на автомобиль «Одобрению типа
          транспортного средства», номер которого указан в сводной табличке
          заводских данных автомобиля и в паспорте транспортного средства.
        </Typography>
        <Typography
          variant="text"
          weight="regular"
          className={styles.main__subtitle}
        >
          1.2 Предметом гарантии является соответствие автомобиля, в
          комплектации, поставленной изготовителем, и его пригодность для
          использования по назначению в соответствии с заявленными
          потребительскими свойствами.
        </Typography>
        <Typography
          variant="text"
          weight="regular"
          className={styles.main__subtitle}
        >
          2. Срок действия гарантии и срок службы автомобиля.
        </Typography>
      </div>
      <div className={styles.main__accordions}>
        <AccordionSecond
          classname={styles.accordion__item}
          title="На что распространяется гарантия"
        >
          <Typography
            variant="text"
            weight="regular"
            className={styles.main__subtitle}
          >
            Предметом гарантии является соответствие автомобиля, в
            комплектации, поставленной изготовителем, и его пригодность для
            использования по назначению в соответствии с заявленными
            потребительскими свойствами.
          </Typography>
        </AccordionSecond>
        <AccordionSecond
          classname={styles.accordion__item}
          title="На что распространяется гарантия"
        >
          <Typography
            variant="text"
            weight="regular"
            className={styles.main__subtitle}
          >
            Предметом гарантии является соответствие автомобиля, в
            комплектации, поставленной изготовителем, и его пригодность для
            использования по назначению в соответствии с заявленными
            потребительскими свойствами.
          </Typography>
        </AccordionSecond>
      </div>
    </section>
  );
};

export default GuaranteeRepair;
