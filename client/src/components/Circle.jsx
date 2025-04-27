import {
    forwardRef,
    useContext,
    useEffect,
    useImperativeHandle,
    useRef
  } from 'react';
  
  import { GoogleMapsContext, latLngEquals } from '@vis.gl/react-google-maps';
  
  function useCircle(props) {
    const {
      radius,
      center,
      ...circleOptions
    } = props;
  
    const circle = useRef(new google.maps.Circle()).current;
    circle.setOptions(circleOptions);
  
    useEffect(() => {
      if (!center) return;
      if (!latLngEquals(center, circle.getCenter())) circle.setCenter(center);
    }, [center]);
  
    useEffect(() => {
      if (radius === undefined || radius === null) return;
      if (radius !== circle.getRadius()) circle.setRadius(radius);
    }, [radius]);
  
    const map = useContext(GoogleMapsContext)?.map;
  
    useEffect(() => {
      if (!map) {
        if (map === undefined)
          console.error('<Circle> has to be inside a Map component.');
        return;
      }
  
      circle.setMap(map);
  
      return () => {
        circle.setMap(null);
      };
    }, [map]);

    return circle;
  }
  
  export const Circle = forwardRef((props, ref) => {
    const circle = useCircle(props);
  
    useImperativeHandle(ref, () => circle);
  
    return null;
  });