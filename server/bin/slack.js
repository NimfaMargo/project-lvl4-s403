import getApp from '..';

const port = process.env.PORT || 4000;
/* eslint no-console: 0 */
getApp().listen(port, () => console.log(`port: ${port}`));
