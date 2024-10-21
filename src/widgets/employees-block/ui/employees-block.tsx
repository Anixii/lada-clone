import styles from './employees-block.module.scss';
import { Typography } from '@/shared/ui/typography';
import { EmployeeCard } from '@/features/employee-card';
import { OfficersApiData } from '@/shared/api/officers/officers-type';


interface IEmployeesBlock {
  employees: Array<OfficersApiData>
}
const EmployeesBlock = ({ employees }:IEmployeesBlock) => {
  return (
    <div className={`${styles.main} container`}>
      <Typography variant="titleText" weight="regular">
        Сотрудники
      </Typography>
      {employees.map((item, index) => <>
        <div key={index} className={styles.main__content}>
          <div className={styles.main__subtitle}>
            <Typography variant="subtitle" color="orange" weight="regular">
              {item.name}
            </Typography>
          </div>
          <div className={styles.main__cards}>
            {item.officers.map((item, i) => (
              <EmployeeCard
                key={i}
                fullname={`${item.first_name} ${item.middle_name} ${item.last_name}`}
                image={item.image}
                jobTitle={item.position}
                mail={item.link}
                phoneNumber={item.phone_number}
              />
            ))}
          </div>
        </div>
      </>) }
    </div>
  );
};

export default EmployeesBlock;
