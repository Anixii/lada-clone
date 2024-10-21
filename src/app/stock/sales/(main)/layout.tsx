'use client';
import styles from './ui/sales.module.scss';
import { StockSalesLinks } from '@/entities/stock-sales-links';
import { useStockSales } from '@/entities/stock-sales-links/model/use-stock-sales/use-stock-sales';
import StockServiceBanner from '@/features/stock-service-banner/view/stock-service-banner';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Typography } from '@/shared/ui/typography';
import { Header } from '@/widgets/header';
import { NewCarsLada } from '@/widgets/new-cars-lada';
import React from 'react';


export default function SalesLayout({
  children,
  expiring,
  new: newSales,
}: {
  children: React.ReactNode;
  new: React.ReactNode;
  expiring: React.ReactNode;
}) {
  const currentLink = useStockSales((state) => state.currentLink);
  return (
    <>
      <Header />
      <Breadcrumbs top="100px" containerClasses="container" color="light" />
      <StockServiceBanner />
      <div className={styles.main}>
        <Typography
          className={`container ${styles.main__title}`}
          variant="h4"
          weight="regular"
        >
          Акции отдела продаж
        </Typography>
        <StockSalesLinks />
        {currentLink === 1 && children}
        {currentLink === 2 && newSales}
        {currentLink === 3 && expiring}
        <NewCarsLada isFull={true}/>
      </div>
    </>
  );
}
