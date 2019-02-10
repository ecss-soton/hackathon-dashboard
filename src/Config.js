let backend = process.env.REACT_APP_BACKEND;
if (backend == null || backend === "") {
  backend = '//localhost:3001';
}

export const Config = {
  backend: backend,
  event: 'CampusHack19',
  pages: ['/schedule', '/map', '/sponsors']
};
