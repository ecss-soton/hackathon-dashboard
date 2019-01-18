let backend = process.env.BACKEND;
if (backend == null || backend === "") {
    backend = '//localhost:3001';
  }

export const Config = {
    backend: backend,
    event: 'CampusHack19',
    pages: ['/shedule', '/map', '/sponsors']
};
