import { IConfigPxpApp } from '@pxp-nd/core';

const config: IConfigPxpApp = {
  defaultDbSettings: 'Orm', // Orm, Procedure, Query
  apiPrefix: '/api',
  logDuration: true,
  showRoutes: false,
};

export default config;