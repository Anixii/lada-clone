import RootLayoutTemplate from '@/application/layouts/root-layout/root-layout';
import type { Metadata } from 'next';
import '@/application/styles/globals.scss';
import '@/application/styles/variables.scss';


export const metadata: Metadata = {
  title: 'LADA',
  description: 'Lada official site',
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayoutTemplate>
      {children}
    </RootLayoutTemplate>
  );
}
