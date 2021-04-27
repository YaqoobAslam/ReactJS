import React from 'react'
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet'
import './Map.css'
import { showDataOnMap } from './util';

function Map({countries, casesType, center, zoom }) {
    return (
        <div className='map'>
            <LeafletMap center={center} zoom={zoom}>
                {/* World Map display */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors' />
                {/* draw circles on the map */}
                {/* {drawCircles(mapCountries, casesType)} */}
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    )
}
export default Map;