import React from 'react';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

const YandexMapComponent = () => {
    const mapState = {
        center: [55.061941, 82.917582],
        zoom: 14,
    };

    return (
        <YMaps>
            <Map defaultState={mapState} width="100%" height="100%" >
                <Placemark geometry={[55.061941, 82.917582]}/>
            </Map>
        </YMaps>
    );
};

export default YandexMapComponent;