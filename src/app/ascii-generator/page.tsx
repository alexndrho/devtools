import { Metadata } from 'next';
import ClientAsciiConverter from './page.client';

export const metadata: Metadata = {
  title: 'ASCII generator - Dev tools',
  description: 'Generate ASCII art from text.',
};

export default function AsciiConverter() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-extrabold">ASCII generator</h1>

      <ClientAsciiConverter />
    </>
  );
}
