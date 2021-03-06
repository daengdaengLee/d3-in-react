import React from 'react';
import MainTemplate from 'components/4-templates/main-template';
import MainHeader from 'components/3-organisms/main-header';
import MainNavigation from 'components/3-organisms/main-navigation';
import MainChartCanvas from 'components/3-organisms/main-chart-canvas';

const MainPage = ({
  match: {
    params: { page, chapter },
  },
}) => (
  <MainTemplate
    top={() => <MainHeader />}
    left={() => <MainNavigation page={page} chapter={chapter} />}
    center={() => <MainChartCanvas />}
  />
);

export default MainPage;
