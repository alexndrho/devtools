import { Metadata } from 'next';
import ClientQrGenerator from './page.client';

export const metadata: Metadata = {
  title: 'QR code generator - Dev tools',
  description: 'Generate QR codes',
};

export default function QrGenerator() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-extrabold">QR code generator</h1>

      <ClientQrGenerator />
    </>
  );
}
