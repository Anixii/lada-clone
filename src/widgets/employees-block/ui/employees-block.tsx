import styles from './employees-block.module.scss';
import { employeesVariables } from '@/shared/lib/variables/employees-variables';
import { Typography } from '@/shared/ui/typography';
import { EmployeeCard } from '@/features/employee-card';


const EmployeesBlock = () => {
  return (
    <div className={`${styles.main} container`}>
      <Typography variant="titleText" weight="regular">
        Сотрудники
      </Typography>
      <div className={styles.main__content}>
        <div className={styles.main__subtitle}>
          <Typography variant="subtitle" color="orange" weight="regular">
            Отдел продаж
          </Typography>
        </div>
        <div className={styles.main__cards}>
          {employeesVariables.salesDepartment.map((item, index) => (
            <EmployeeCard
              key={index}
              fullname={item.fullname}
              image={item.image}
              jobTitle={item.jobTitle}
              mail={item.mail}
              phoneNumber={item.phoneNumber}
            />
          ))}
        </div>
      </div>
      <div className={styles.main__content}>
        <div className={styles.main__subtitle}>
          <Typography variant="subtitle" color="orange" weight="regular">
            Отдел сервиса
          </Typography>
        </div>
        <div className={styles.main__cards}>
          {employeesVariables.serviceDepartment.map((item, index) => (
            <EmployeeCard
              key={index}
              fullname={item.fullname}
              image={item.image}
              jobTitle={item.jobTitle}
              mail={item.mail}
              phoneNumber={item.phoneNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeesBlock;
