import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import Chip from '@material-ui/core/Chip';

class Map extends Component {
  render() {
    return (
      <div style={{ width: '50vw', height: '50vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAV5i5w1dj6O9q7gc8m0db1HfJosIsjE28' }}
          defaultCenter={{
            lat: 50.937684,
            lng: -1.395643
          }}
          defaultZoom={15}
        >
        <Chip label="B16" lat={50.937684} lng={-1.395643}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
