'use client';
import styles from './filters.module.scss';
import {
  FilterNames,
  IFilterColor,
  IFilterDefault,
  IFilterItem,
  IFilterModel,
  IFilterPower,
} from '../models/types/use-filters.type';
import { useFilters } from '../models/use-filters/use-filters';
import { useUsedCarsFilters } from '../models/use-filters/use-filters-used';
import { UsedFilterNames } from '../models/types/use-filter-used.types';
import { AppCheckbox } from '@/shared/ui/checkbox';
import { Typography } from '@/shared/ui/typography';
import { AccordionSecond } from '@/shared/ui/accordion-second';
import AppButton from '@/shared/ui/button/ui/button';
import {
  ICarsFilter,
  IUseCars,
} from '@/features/cars-block/models/types/use-cars.types';
import { useCars } from '@/features/cars-block/models/use-cars/use-cars';
import { useUsedCars } from '@/features/cars-block/models/use-used-cars.tsx/use-used-cars';
import { PATHS } from '@/shared/lib/variables/variables';
import RangeInput from '@/shared/ui/range-input/range-input';
import {
  IUsedCarsFilter,
  IUseUsedCars,
} from '@/features/cars-block/models/types/use-used-cars.types';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';


interface IFilter {
  subtitle?: string;
  filters: IFilterItem[];
}

export interface ISection {
  name: string;
  subtitle: string;
  filters: IFilter[] | IFilter[][];
}

export type TFields =
  | 'price_min'
  | 'price_max'
  | 'used_price_min'
  | 'used_price_max'
  | 'used_run_min'
  | 'used_run_max'
  | 'used_year_min'
  | 'used_year_max';
interface IFiltersType {
  onClose?: () => void;
}
const Filters = ({ onClose }: IFiltersType) => {
  const pathname = usePathname();
  const isCarAvailablePage = pathname.includes(PATHS.CAR_AVAILABLE);

  const {
    family,
    model_by_family,
    drive,
    transmission,
    colors,
    body,
    volume,
    power_by_volume,
  } = useFilters();
  // Used
  const {
    used_body,
    used_color,
    used_drive,
    used_engine,
    // used_families,
    used_mark,
    used_transmission,
    used_volume,
    // used_year,
  } = useUsedCarsFilters();

  const usedFilters = useUsedCars().filters;

  const fetchUsedCars = useUsedCars().fetchUsedCars;

  const fetchUsedFilterBody = useUsedCarsFilters().fetchUsedFiltersBody;
  const fetchUsedFiltersColors = useUsedCarsFilters().fetchUsedFiltersColors;
  const fetchUsedFiltersDrive = useUsedCarsFilters().fetchUsedFiltersDrive;
  const fetchUsedFiltersEngine = useUsedCarsFilters().fetchUsedFiltersEngine;
  const fetchUsedFiltersFamilies =
    useUsedCarsFilters().fetchUsedFiltersFamilies;
  const fetchUsedCarVolume = useUsedCarsFilters().fetchUsedCarVolume;
  const fetchUsedFiltersMark = useUsedCarsFilters().fetchUsedFiltersMark;
  const fetchUsedFiltersTransmission =
    useUsedCarsFilters().fetchUsedFiltersTransmission;
  const fetchUsedFiltersYear = useUsedCarsFilters().fetchUsedFiltersYear;
  const fetchUsedCarsWithFilters = useUsedCars().fetchUsedCarsWithFilters;

  const setUsedFiltersClear = useUsedCars().setUsedFiltersClear;

  // Available
  const filters = useCars().filters;

  const fetchAvailableCars = useCars().fetchCars;

  const fetchCarModelByFamily = useFilters().fetchCarModelByFamily;
  const fetchCarFamily = useFilters().fetchCarFamily;
  const fetchFiltersBody = useFilters().fetchFiltersBody;
  const fetchFiltersColors = useFilters().fetchFiltersColors;
  const fetchFiltersDrive = useFilters().fetchFiltersDrive;
  const fetchFiltersModel = useFilters().fetchFiltersModel;
  const fetchFiltersTransmission = useFilters().fetchFiltersTransmission;
  const fetchCarVolume = useFilters().fetchCarVolume;
  const fetchPowerByVolume = useFilters().fetchPowerByVolume;
  const fetchCarsWithFilters = useCars().fetchCarsWithFilters;

  const setFiltersClear = useCars().setFiltersClear;

  useEffect(() => {
    if (isCarAvailablePage) {
      if (filters.body === null) {
        fetchCarFamily();
        fetchFiltersBody();
        fetchFiltersColors();
        fetchFiltersDrive();
        fetchFiltersModel();
        fetchFiltersTransmission();
        fetchCarVolume();
      }
    } else {
      if (usedFilters.used_body === null) {
        fetchUsedFilterBody();
        fetchUsedFiltersColors();
        fetchUsedFiltersDrive();
        fetchUsedFiltersEngine();
        fetchUsedFiltersFamilies();
        fetchUsedFiltersMark();
        fetchUsedFiltersTransmission();
        fetchUsedFiltersYear();
        fetchUsedCarVolume();
      }
    }
  }, []);

  useEffect(() => {
    if (family.length) {
      if (!model_by_family.length) {
        fetchCarModelByFamily(family);
      }
    }
  }, [ family ]);

  useEffect(() => {
    if (volume.length) {
      if (!power_by_volume.length) {
        fetchPowerByVolume(volume);
      }
    }
  }, [ volume ]);

  const combineFamilies = (
    models: IFilterModel[],
    families?: IFilterDefault[],
  ) => {
    return families?.map((family) => {
      return {
        subtitle: family.name,
        filters: models.filter((model) => model.car_families === family.id),
      };
    });
  };

  const combinePowers = (
    powers: IFilterPower[],
    volumes?: IFilterDefault[],
  ) => {
    return volumes?.map((family) => {
      return {
        subtitle: family.name,
        filters: powers.filter(
          (model) => model.car_volume_available === family.id,
        ),
      };
    });
  };

  const filterSections: ISection[] = [
    {
      name: FilterNames.HAS_STOCK,
      subtitle: 'Спецпредложения',
      filters: [
        {
          subtitle: '',
          filters: [ { id: 1, name: 'Акция от дилера' } ],
        },
      ],
    },
    {
      name: FilterNames.MODEL,
      subtitle: 'Модель',
      filters: combineFamilies(model_by_family, family) || [],
    },
    {
      name: FilterNames.TRANSMISSION,
      subtitle: 'Трансмиссия',
      filters: [
        {
          subtitle: '',
          filters: transmission,
        },
      ],
    },
    {
      name: FilterNames.BODY,
      subtitle: 'Кузов',
      filters: [
        {
          subtitle: '',
          filters: body,
        },
      ],
    },
    {
      name: FilterNames.DRIVE,
      subtitle: 'Привод',
      filters: [
        {
          subtitle: '',
          filters: drive,
        },
      ],
    },
    {
      name: FilterNames.VOLUME,
      subtitle: 'Обьём',
      filters: combinePowers(power_by_volume, volume) || [],
    },
    {
      name: FilterNames.COLORS,
      subtitle: 'Цвет',
      filters: [
        {
          subtitle: '',
          filters: colors,
        },
      ],
    },
  ];

  const usedFilterSections: ISection[] = [
    {
      name: UsedFilterNames.USED_MARK,
      subtitle: 'Марка',
      filters: [
        {
          subtitle: '',
          filters: used_mark,
        },
      ],
    },
    {
      name: UsedFilterNames.USED_TRANSMISSION,
      subtitle: 'Трансмиссия',
      filters: [
        {
          subtitle: '',
          filters: used_transmission,
        },
      ],
    },
    {
      name: UsedFilterNames.USED_ENGINE,
      subtitle: 'Двигатель',
      filters: [
        {
          subtitle: '',
          filters: used_engine,
        },
      ],
    },
    {
      name: UsedFilterNames.USED_BODY,
      subtitle: 'Кузов',
      filters: [
        {
          subtitle: '',
          filters: used_body,
        },
      ],
    },
    {
      name: UsedFilterNames.USED_DRIVE,
      subtitle: 'Привод',
      filters: [
        {
          subtitle: '',
          filters: used_drive,
        },
      ],
    },
    {
      name: UsedFilterNames.USED_VOLUME,
      subtitle: 'Объём',
      filters: [
        {
          subtitle: '',
          filters: used_volume,
        },
      ],
    },
    {
      name: UsedFilterNames.USED_COLOR,
      subtitle: 'Цвет',
      filters: [
        {
          subtitle: '',
          filters: used_color,
        },
      ],
    },
  ];

  const handleCheck = (id: number, filterType: keyof IUseCars['filters']) => {
    const filterActionsNumberArray: {
      [key: string]: (val: number[] | null) => void;
    } = {
      model: useCars.getState().setModel,
      transmission: useCars.getState().setTransmission,
      body: useCars.getState().setBody,
      drive: useCars.getState().setDrive,
      volume: useCars.getState().setVolume,
      color: useCars.getState().setColor,
      has_stock: useCars.getState().setHasStock,
    };

    const currentValues = useCars.getState().filters[ filterType ] as
      | number[]
      | null;

    if (filterType in filterActionsNumberArray) {
      const newValues = currentValues?.includes(id)
        ? currentValues.filter((v) => v !== id)
        : [ ...(currentValues || []), id ];
      filterActionsNumberArray[ filterType ](newValues);
    }
  };

  const handleUsedCheck = (
    id: number,
    filterType: keyof IUseUsedCars['filters'],
  ) => {
    const filterActionsNumberArray: {
      [key: string]: (val: number[] | null) => void;
    } = {
      used_mark: useUsedCars.getState().setUsedMark,
      used_transmission: useUsedCars.getState().setUsedTransmission,
      used_engine: useUsedCars.getState().setUsedEngine,
      used_body: useUsedCars.getState().setUsedBody,
      used_drive: useUsedCars.getState().setUsedDrive,
      used_volume: useUsedCars.getState().setUsedVolume,
      used_color: useUsedCars.getState().setUsedColor,
    };

    const currentValues = useUsedCars.getState().filters[ filterType ] as
      | number[]
      | null;

    if (filterType in filterActionsNumberArray) {
      const newValues = currentValues?.includes(id)
        ? currentValues.filter((v) => v !== id)
        : [ ...(currentValues || []), id ];
      filterActionsNumberArray[ filterType ](newValues);
    }
  };

  const handlePriceChange = (field: TFields, value: string | null) => {
    const priceActions: { [key: string]: (val: string | null) => void } = {
      price_min: useCars.getState().setPriceMin,
      price_max: useCars.getState().setPriceMax,
      used_price_min: useUsedCars.getState().setUsedPriceMin,
      used_price_max: useUsedCars.getState().setUsedPriceMax,
      used_run_min: useUsedCars.getState().setUsedRunMin,
      used_run_max: useUsedCars.getState().setUsedRunMax,
      used_year_min: useUsedCars.getState().setUsedYearMin,
      used_year_max: useUsedCars.getState().setUsedYearMax,
    };
    priceActions[ field ](value);
  };

  const fetchCars = () => {
    if (isCarAvailablePage) {
      fetchCarsWithFilters(filters);
    } else {
      fetchUsedCarsWithFilters(usedFilters);
    }
    if (onClose) onClose();
  };

  const handleClear = () => {
    if (isCarAvailablePage) {
      setFiltersClear();
      fetchAvailableCars();
    } else {
      setUsedFiltersClear();
      fetchUsedCars();
    }
    if (onClose) onClose();
  };

  const renderCheckboxes = (
    filter: IFilter | undefined,
    filterType: keyof ICarsFilter | keyof IUsedCarsFilter,
  ) => {
    const currentValues = isCarAvailablePage
      ? (useCars.getState().filters[ filterType as keyof ICarsFilter ] as
          | number[]
          | null)
      : (useUsedCars.getState().filters[ filterType as keyof IUsedCarsFilter ] as
          | number[]
          | null);

    return (
      <div key={filter?.subtitle} className={styles.checkboxes}>
        {filter?.subtitle && (
          <Typography variant="text" weight="bold">
            {filter.subtitle}
          </Typography>
        )}
        {filter?.filters.map((checkbox) => (
          <AppCheckbox
            key={checkbox.name}
            sector={checkbox}
            label={checkbox.name}
            checked={currentValues?.includes(checkbox.id) || false}
            onChange={() =>
              isCarAvailablePage
                ? handleCheck(checkbox.id, filterType as keyof ICarsFilter)
                : handleUsedCheck(
                  checkbox.id,
                    filterType as keyof IUsedCarsFilter,
                )
            }
            color={(checkbox as IFilterColor).color || ''}
          />
        ))}
      </div>
    );
  };

  const renderInputs = () => {
    if (isCarAvailablePage) {
      return (
        <>
          <AccordionSecond title={'Цена'} classname={styles.accordion}>
            <RangeInput
              inputClass={styles.range__input}
              title="price"
              minValue={filters.price_min}
              maxValue={filters.price_max}
              onMinChange={(value) => {
                handlePriceChange('price_min', value);
              }}
              onMaxChange={(value) => {
                handlePriceChange('price_max', value);
              }}
            />
          </AccordionSecond>
        </>
      );
    } else {
      return (
        <>
          <AccordionSecond title={'Цена'} classname={styles.accordion}>
            <RangeInput
              inputClass={styles.range__input}
              title="price"
              minValue={usedFilters.used_price_min}
              maxValue={usedFilters.used_price_max}
              onMinChange={(value) => {
                handlePriceChange('used_price_min', value);
              }}
              onMaxChange={(value) => {
                handlePriceChange('used_price_max', value);
              }}
            />
          </AccordionSecond>
          <AccordionSecond title={'Пробег'} classname={styles.accordion}>
            <RangeInput
              inputClass={styles.range__input}
              title="run"
              minValue={usedFilters.used_run_min}
              maxValue={usedFilters.used_run_max}
              onMinChange={(value) => {
                handlePriceChange('used_run_min', value);
              }}
              onMaxChange={(value) => {
                handlePriceChange('used_run_max', value);
              }}
            />
          </AccordionSecond>
          <AccordionSecond title={'Год выпуска'} classname={styles.accordion}>
            <RangeInput
              inputClass={styles.range__input}
              title="year"
              minValue={usedFilters.used_year_min}
              maxValue={usedFilters.used_year_max}
              onMinChange={(value) => {
                handlePriceChange('used_year_min', value);
              }}
              onMaxChange={(value) => {
                handlePriceChange('used_year_max', value);
              }}
            />
          </AccordionSecond>
        </>
      );
    }
  };

  return (
    <div className={styles.filters}>
      {renderInputs()}
      {(isCarAvailablePage ? filterSections : usedFilterSections).map(
        (section, i) => (
          <AccordionSecond
            title={section.subtitle}
            key={section.subtitle + i}
            classname={styles.accordion}
          >
            {Array.isArray(section.filters[ 0 ])
              ? (section.filters as IFilter[][]).map((filterGroup, index) => (
                <div key={index}>
                  {filterGroup.map((filter) =>
                    renderCheckboxes(
                      filter,
                        section.name as keyof ICarsFilter,
                    ),
                  )}
                </div>
              ))
              : (section.filters as IFilter[]).map((filter) =>
                renderCheckboxes(filter, section.name as keyof ICarsFilter),
              )}
          </AccordionSecond>
        ),
      )}
      <div className={styles.submitButtons}>
        <AppButton onClick={fetchCars} text="text_white">
          Применить
        </AppButton>
        <AppButton
          variant="secondary"
          onClick={handleClear}
          text="text_primary"
        >
          Сбросить
        </AppButton>
      </div>
    </div>
  );
};

export default Filters;
