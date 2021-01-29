import { geolocated } from "react-geolocated";

const Demo = ({
    isGeolocationAvailable,
    isGeolocationEnabled,
    coords
 }) => {
    return !isGeolocationAvailable ? ( 
        <div>Your browser does not support geolocation</div>
     ) : !isGeolocationEnabled ? (
         <div>Geolocation is not enabled</div>
     ) : coords ? (
         <div>
             <p>
                 Latitude: {coords.latitude}
             </p>
             <p>
                 Longitude: {coords.longitude}
             </p>
             <p>
                 Altitude: {coords.altitude}
             </p>
         </div>
     ) : (<div>Getting the location data&hellip; </div>
        );
}
 
export default geolocated({
    positionOptions: {
    enableHighAccuracy: false,
},
userDecisionTimeout: 10000,
})(Demo);