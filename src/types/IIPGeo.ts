interface IIPGeo {
  status: 'success' | 'fail';
  // Included only if status is 'fail'
  message?: 'private range' | 'reserved range' | 'invalid query';
  country: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  mobile: boolean;
  proxy: boolean;
  hosting: boolean;
  query: string;
}

export default IIPGeo;
