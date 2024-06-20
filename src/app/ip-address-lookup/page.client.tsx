'use client';

import { useEffect, useState } from 'react';
import { TbSearch } from 'react-icons/tb';
import IIPGeo from '@/types/IIPGeo';

export default function ClientIPAddressesLookupPage() {
  const [ipGeo, setIpGeo] = useState<IIPGeo | null>(null);
  const [ipInput, setIpInput] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchIpGeo = async (ip: string) => {
    setLoading(true);

    const response = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city,zip,lat,lon,timezone,isp,org,mobile,proxy,hosting,query`,
    );

    const data = await response.json();

    setIpGeo(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchIpGeo('');
  }, []);

  const handleSearch = () => {
    fetchIpGeo(ipInput);
  };

  return (
    <>
      <div className="mb-2 w-full join justify-end">
        <input
          value={ipInput}
          placeholder="IPv4, IPv6 or domain name"
          onChange={(e) => setIpInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          className="input input-bordered join-item"
        />

        <button className="join-item btn" onClick={handleSearch}>
          <TbSearch className="w-5 h-5" />
        </button>
      </div>

      {loading && (
        <span className="block mx-auto my-8 loading loading-spinner loading-lg" />
      )}

      {!loading && ipGeo?.status === 'fail' && (
        <p className="text-red-500">
          {ipGeo?.message === 'private range' && 'Private IP address range.'}
          {ipGeo?.message === 'reserved range' && 'Reserved IP address range.'}
          {ipGeo?.message === 'invalid query' &&
            'Invalid IP address or domain name.'}
        </p>
      )}

      {!loading && ipGeo?.status === 'success' && (
        <>
          <table className="table">
            <tbody>
              <tr>
                <th>IP Address</th>
                <td>{ipGeo?.query || 'N/A'}</td>
              </tr>

              <tr>
                <th>Country</th>
                <td>{ipGeo?.country || 'N/A'}</td>
              </tr>

              <tr>
                <th>Region</th>
                <td>{ipGeo?.regionName || 'N/A'}</td>
              </tr>

              <tr>
                <th>City</th>
                <td>{ipGeo?.city || 'N/A'}</td>
              </tr>

              <tr>
                <th>Zip</th>
                <td>{ipGeo?.zip || 'N/A'}</td>
              </tr>

              <tr>
                <th>Latitude</th>
                <td>{ipGeo?.lat || 'N/A'}</td>
              </tr>

              <tr>
                <th>Longitude</th>
                <td>{ipGeo?.lon || 'N/A'}</td>
              </tr>

              <tr>
                <th>Timezone</th>
                <td>{ipGeo?.timezone || 'N/A'}</td>
              </tr>

              <tr>
                <th>ISP</th>
                <td>{ipGeo?.isp || 'N/A'}</td>
              </tr>

              <tr>
                <th>Organization</th>
                <td>{ipGeo?.org || 'N/A'}</td>
              </tr>

              <tr>
                <th>Mobile</th>
                <td>{ipGeo?.mobile ? 'Yes' : 'No'}</td>
              </tr>

              <tr>
                <th>Proxy</th>
                <td>{ipGeo?.proxy ? 'Yes' : 'No'}</td>
              </tr>

              <tr>
                <th>Hosting</th>
                <td>{ipGeo?.hosting ? 'Yes' : 'No'}</td>
              </tr>
            </tbody>
          </table>
          <h1 className="mt-8 mb-2 text-4xl font-extrabold">Location on map</h1>
          <p className="mb-4 text-lg">
            The longitude and latitude coordinates are used to place a marker on
            the map. Geolocation is based on the IP address and is not precise
            enough to pinpoint the exact location.
          </p>
          <iframe
            src={`https://maps.google.com/maps?q=${ipGeo?.lat},${ipGeo?.lon}&z=15&output=embed`}
            className="mt-8 w-full h-96"
          />{' '}
        </>
      )}
    </>
  );
}
