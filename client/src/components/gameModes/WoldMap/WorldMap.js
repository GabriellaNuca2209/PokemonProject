import UseFetch from "../../../utils/useFetch";
import Location from "./Location";
import "./worldMap.css";

const WorldMap = () => {

    const locations = UseFetch('https://pokeapi.co/api/v2/location');

    // console.log(locations);

    return (  
        <div className="world-map">
            {locations && locations.results.map((location, index) => (
                <div key={index} className={`${location.name}`}>
                    <Location location={location} locationId={index + 1}/>
                </div>
            ))}
        </div>
    );
}
 
export default WorldMap;