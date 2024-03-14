import { useState, Fragment } from 'react';
import { APIProvider, AdvancedMarker, Pin, Map as GoogleMap, InfoWindow } from '@vis.gl/react-google-maps';
import { mockJobData } from './mockData.js';

const center = {
  lat: 37.0902,
  lng: -95.7129,
};

const Map = () => {
  const [infoWindowStates, setInfoWindowStates] = useState(new Array(mockJobData.length).fill(false));

  const toggleInfoWindow = (index) => {
    setInfoWindowStates(prevStates => {
      const newState = [...prevStates];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const closeInfoWindow = (index) => {
    setInfoWindowStates(prevStates => {
      const newState = [...prevStates];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <APIProvider apiKey={'AIzaSyBsodt9yMXvT8GSJfnWNqU7QKQf-mOJU0Y'}>
      <GoogleMap
        className="map-container"
        defaultZoom={3}
        defaultCenter={center}
        mapId="b474aaeccecd88ae"
        disableDefaultUI={true}
        zoomControl={true}
      >
        {mockJobData.map((job, index) => (
          <Fragment key={job.id}>
            <AdvancedMarker 
              position={{ lat: job.lat, lng: job.lng }}
              onClick={() => toggleInfoWindow(index)}
            >
              <Pin
                background={'var(--greenhouse-green)'}
                glyphColor={'var(--navbar-background-color)'}
                borderColor={'var(--navbar-background-color)'}
              />
            </AdvancedMarker>
            {infoWindowStates[index] && (
              <InfoWindow
                position={{ lat: job.lat, lng: job.lng }}
                onCloseClick={() => closeInfoWindow(index)}
              >
                <div className='job-title'>
                  {job.company+" - "+job.title}  
                </div>
                
              </InfoWindow>
            )}
          </Fragment>
        ))}
      </GoogleMap>
    </APIProvider>
  );
};

export default Map;
