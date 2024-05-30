import { Metadata } from 'next';
import ClientLoremIpsumGenerator from './page.client';

export const metadata: Metadata = {
  title: 'Lorem ipsum generator - Dev tools',
  description: 'Generate lorem ipsum text for your placeholder content.',
};

export default function LoremIpsumGenerator() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-extrabold">Lorem ipsum generator</h1>

      <ClientLoremIpsumGenerator />
    </>
  );
}
