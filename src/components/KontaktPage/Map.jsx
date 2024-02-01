'use client';
import L from 'leaflet';
import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

export default function Map({ coord = [56.5038244, 10.8169909], zoom = '16' }) {
  // reference/krog til map'et.
  const mapRef = useRef();

  // Reference til markøren - så den kan flyttes rundt.
  const markerRef = useRef();

  // Indlæs map/kort når component er klar.
  useEffect(() => {
    // Lav kortet - skal kun køre 1 gang (når komponent bliver loadet).
    if (!mapRef.current) {
      mapRef.current = L.map('map_container').setView(coord, zoom);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);

      // Laver markøren.
      markerRef.current = L.marker(coord).addTo(mapRef.current);
      markerRef.current.bindPopup('Gjerrild Vandrerhjem');
    }
  }, [coord]); // Lytter efter ændringer i koordinaterne.

  return (
    <div id='map_container' className='m-auto w-1/2 h-96 capitalize rounded-3xl shadow-2xl'>
      Kortet loader ...
    </div>
  );
}
