import Schedule from "./Schedule";
import Map from "./Map";
import Sponsors from "./Sponsors";

let backend = process.env.REACT_APP_BACKEND;
if (backend == null || backend === "") {
  backend = '//localhost:3001';
}


export const Config = {
  backend: backend,
  event: 'CampusHack19',
  pages: [Schedule, Map, Sponsors]
};
