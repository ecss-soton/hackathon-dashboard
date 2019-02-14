import Schedule from "./Schedule";
import Map from "./Map";
import Sponsors from "./Sponsors";

import ScheduleIcon from '@material-ui/icons/Schedule';
import MapIcon from '@material-ui/icons/Map';
import SponsorIcon from '@material-ui/icons/LocalPizza';

let backend = process.env.REACT_APP_BACKEND;
if (backend == null || backend === "") {
  backend = '//localhost:3001';
}


export const Config = {
  backend: backend,
  event: 'CampusHack19',
  pages: [Schedule, Map, Sponsors],
  pagesWithIcons: [
    {
      content: Schedule,
      Icon: ScheduleIcon,
      name: 'Schedule'
    },
    {
      content: Map,
      Icon: MapIcon,
      name: 'Map'
    },
    {
      content: Sponsors,
      Icon: SponsorIcon,
      name: 'Sponsors'
    }
  ],
  schedule: [
    {
      'name': 'Saturday 23rd Feb',
      'timings': {
        11: 'Sign in and team setup',
        12: 'Welcome presentations',
        13: 'Hackathon starts!',
        15: 'Lunch + Challenge 1',
        19: 'Challenge 2',
        20: 'Pizza'
      }
    },
    {
      'name': 'Sunday 24th Feb',
      'timings': {
        0: 'Challenge 3',
        1: 'Midnight Maccies',
        4: 'Challenge 4',
        7: 'Challenge 5',
        11: 'Self serve breakfast/brunch',
        13: 'Hackathon finishes! + Group presentations',
        14: 'Awards ceremony'
      }
    }
  ]
};
