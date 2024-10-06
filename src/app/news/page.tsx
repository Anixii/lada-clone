import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Header } from '@/widgets/header';
import { NewsBlock } from '@/widgets/news-block';
import React from 'react';


const NewsPage = () => {
  return (
    <>
      <Header variant='white__variant' />
      <Breadcrumbs top="100px" containerClasses="container" color="dark" />
      <NewsBlock/>
    </>
  );
};

export default NewsPage;
