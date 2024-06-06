import { Metadata } from 'next';
import ClientBase64EncoderDecoder from './page.client';

export const metadata: Metadata = {
  title: 'Base64 Encoder/Decoder - Dev tools',
  description: 'Encode and decode text to and from Base64.',
};

export default function Base64EncoderDecoder() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-extrabold">Base64 encoder/decoder</h1>
      <ClientBase64EncoderDecoder />
    </>
  );
}
