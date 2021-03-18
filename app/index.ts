import next from 'next';

const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: __dirname,
});

console.log(nextApp);

export default nextApp;
