import { Metadata } from 'next';
import ClientIPAddressesLookupPage from './page.client';

export const metadata: Metadata = {
  title: 'IP Address Lookup - Dev tools',
  description: 'Lookup information about an IP address.',
};

export default function IPAddressesLookupPage() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-extrabold">IP address lookup</h1>
      <ClientIPAddressesLookupPage />
    </>
  );
}
