import { Header } from '@/widgets/header';
import React from 'react';


export default function FinancialServicesLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
