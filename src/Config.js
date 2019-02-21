import Schedule from './Schedule';
import Sponsors from './Sponsors';

import ScheduleIcon from '@material-ui/icons/Schedule';
import SponsorIcon from '@material-ui/icons/LocalPizza';
import FloorPlanIcon from '@material-ui/icons/Map';

// eslint-disable-next-line no-undef
let backend = process.env.REACT_APP_BACKEND;
if (backend == null || backend === '') {
  backend = '//localhost:3001';
}


export const Config = {
  backend: backend,
  event: 'CampusHack19',
  pages: [Schedule, Sponsors],
  pagesWithIcons: [
    {
      content: '/floorplan',
      Icon: FloorPlanIcon,
      name: 'Floor Plan'
    },
    {
      content: '/schedule',
      Icon: ScheduleIcon,
      name: 'Schedule'
    },
    {
      content: '/sponsors',
      Icon: SponsorIcon,
      name: 'Sponsors'
    }
  ],
  schedule: [
    {
      'name': 'Saturday PM',
      'timings': {
        11: 'Sign in and team setup',
        12: 'Welcome presentations',
        1: 'Hackathon starts!',
        3: 'Lunch + Challenge 1',
        7: 'Challenge 2',
        8: 'Pizza'
      }
    },
    {
      'name': 'Sunday AM',
      'timings': {
        1: 'Midnight Maccies',
        4: 'Challenge 4',
        7: 'Challenge 5',
        11: 'Self serve breakfast/brunch',
        12: 'Challenge 3'
      }
    },
    {
      'name': 'Sunday PM',
      'timings': {
        1: 'Hackathon finishes!',
        2: 'Group presentations',
        3: 'Awards ceremony'
      }
    }
  ],
  sponsors: {
    premium: [
      {
        name: 'J.P. Morgan',
        description: 'JP Morgan is one of the world’s largest and oldest banking institutions. It was founded in 1871 and has its headquarters in New York City, US. It has a team of over 26,000 happy employees. It provides a wide range of services, which include banking, financial and software solutions. It has been one of ECSS’s oldest sponsors and currently holds a Gold sponsor status. It offers a wide range of opportunities to ECS students.',
        links: {
          logo: 'https://society.ecs.soton.ac.uk/static/website/content/sponsors-logos/jpmorgan.d929ef46b503.jpg',
          website: 'https://www.jpmorgan.com',
          opportunities: 'https://careers.jpmorgan.com/careers/global/en/home',
          ecss: 'https://society.ecs.soton.ac.uk/sponsors/?sponsor=jpmorgan'
        }
      },
      {
        name: 'Arm',
        description: 'Arm® technology is at the heart of a computing and connectivity revolution that is transforming the way people live and businesses operate. From the unmissable to the invisible; our advanced, energy-efficient processor designs are enabling the intelligence in 86 billion silicon chips and securely powering products from the sensor to the smartphone to the supercomputer. With more than 1,000 technology partners including the world’s most famous business and consumer brands, we are driving Arm innovation into all areas compute is happening inside the chip, the network and the cloud.',
        links: {
          logo: 'https://society.ecs.soton.ac.uk/static/website/content/sponsors-logos/arm.ad6141d1bd4d.png',
          website: 'https://www.arm.com/',
          opportunities: 'https://www.arm.com/company/careers',
          ecss: 'https://society.ecs.soton.ac.uk/sponsors/?sponsor=arm'
        }
      }
    ],
    standard: [
      {
        name: 'TPP',
        description: 'TPP is a UK based IT company, dedicated to delivering world class healthcare software through our innovative products. Our philosophy is to join up healthcare based on a shared electronic medical record, improving access to clinical data and empowering patients to take part in their care. We are known for our outstanding achievements in the UK, providing electronic patient records on a single instance database for over 40 million patients.',
        links: {
          logo: 'https://society.ecs.soton.ac.uk/static/website/content/sponsors-logos/tpp.9c95fc7f9b19.png',
          website: 'https://www.tpp-uk.com/',
          opportunities: 'https://tpp-careers.com/',
          ecss: 'https://society.ecs.soton.ac.uk/sponsors/?sponsor=tpp'
        }
      },
      {
        name: 'L3 Commercial Aviation',
        description: 'L3 Commercial Aviation provides holistic solutions across a wide range of services to the commercial aviation industry. From check-in to touchdown our integrated solutions work to make air travel safer, more efficient and more effective. Our expertise extends across on-aircraft avionics, integrated airport security and automation and the complete pilot training offering.',
        links: {
          logo: 'https://mms.businesswire.com/media/20180713005307/en/323919/23/L3-logo.jpg',
          website: 'https://www.l3commercialaviation.com/',
          opportunities: 'https://www.l3commercialaviation.com/airline-solutions/training-systems-solutions/',
          ecss: 'https://society.ecs.soton.ac.uk/sponsors/?sponsor=l3'
        }
      },
      {
        name: 'FactSet',
        description: 'FactSet is a leading provider of financial data and analytic applications. Our products are used by analysts, portfolio managers, researchers and investment bankers at major financial institutions throughout the world. Our business is built on the creative use of technology and an unwavering dedication to client service. FactSet delivers superior analytics, service, content and technology to help more than 85,000 users see and seize opportunity sooner. We are committed to giving investment professionals the edge to outperform, with fresh perspectives, informed insights and the industry-leading support of our dedicated specialists.',
        links: {
          logo: 'https://society.ecs.soton.ac.uk/static/website/content/sponsors-logos/factset.0fd21c281a33.jpg',
          website: 'https://www.factset.com/',
          opportunities: 'https://www.factset.com/careers',
          ecss: 'https://society.ecs.soton.ac.uk/sponsors/?sponsor=factset'
        }
      },
    ]
  }
};
