'use client';

import { useEffect, useState } from 'react';
import CopyButton from '@/components/CopyButton';

export default function ClientBase64EncoderDecoder() {
  const [encoderInput, setEncoderInput] = useState('');
  const [isEncoderUrlSafe, setIsEncoderUrlSafe] = useState(false);
  const [encoderOutput, setEncoderOutput] = useState('');

  const [decoderInput, setDecoderInput] = useState('');
  const [isDecoderUrlSafe, setIsDecoderUrlSafe] = useState(false);
  const [decoderOutput, setDecoderOutput] = useState('');

  const encode = (input: string, urlSafe: boolean) => {
    const encoded = Buffer.from(input).toString('base64');

    return urlSafe
      ? encoded.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
      : encoded;
  };

  const decode = (input: string, urlSafe: boolean) => {
    const decoded = Buffer.from(
      urlSafe
        ? input
            .replace(/-/g, '+')
            .replace(/_/g, '/')
            .replace(/[^A-Za-z0-9+/]/g, '')
        : input,
      'base64'
    ).toString('utf-8');

    return decoded;
  };

  useEffect(() => {
    setEncoderOutput(encode(encoderInput, isEncoderUrlSafe));
  }, [encoderInput, isEncoderUrlSafe]);

  useEffect(() => {
    setDecoderOutput(decode(decoderInput, isDecoderUrlSafe));
  }, [decoderInput, isDecoderUrlSafe]);

  return (
    <div className="flex gap-8 flex-col lg:gap-5 lg:flex-row">
      <div className="flex-1 p-6 bg-base-200 rounded-xl">
        <h2 className="mb-2 text-2xl font-bold">Base64 encoder</h2>

        <label className="form-control">
          <span className="label">
            <span className="label-text">Input</span>
          </span>

          <textarea
            name="input"
            placeholder="Type here"
            className="textarea textarea-bordered h-32 resize-none"
            onChange={(e) => setEncoderInput(e.target.value)}
          />
        </label>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Encode URL safe</span>
            <input
              type="checkbox"
              className="toggle"
              checked={isEncoderUrlSafe}
              onChange={(e) => setIsEncoderUrlSafe(e.target.checked)}
            />
          </label>
        </div>

        <label className="form-control mt-2">
          <div className="label">
            <span className="label-text">Output</span>
          </div>

          <textarea
            name="output"
            placeholder="Result"
            className="textarea textarea-bordered h-32 resize-none"
            readOnly
            value={encoderOutput}
          />
        </label>

        <CopyButton value={encoderOutput}>
          {({ copied, copy }) => (
            <button className="mt-2 w-full btn btn-primary" onClick={copy}>
              {copied ? 'Copied!' : 'Copy encoded'}
            </button>
          )}
        </CopyButton>
      </div>

      <div className="flex-1 p-6 bg-base-200 rounded-xl">
        <h2 className="mb-2 text-2xl font-bold">Base64 decoder</h2>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Input</span>
          </div>

          <textarea
            name="input"
            placeholder="Type here"
            className="textarea textarea-bordered h-32 resize-none"
            onChange={(e) => setDecoderInput(e.target.value)}
          />
        </label>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Decode URL safe</span>
            <input
              type="checkbox"
              className="toggle"
              checked={isDecoderUrlSafe}
              onChange={(e) => setIsDecoderUrlSafe(e.target.checked)}
            />
          </label>
        </div>

        <label className="form-control mt-2">
          <div className="label">
            <span className="label-text">Output</span>
          </div>

          <textarea
            name="output"
            placeholder="Result"
            className="textarea textarea-bordered h-32 resize-none"
            readOnly
            value={decoderOutput}
          />
        </label>

        <CopyButton value={decoderOutput}>
          {({ copied, copy }) => (
            <button className="mt-2 w-full btn btn-primary" onClick={copy}>
              {copied ? 'Copied!' : 'Copy decoded'}
            </button>
          )}
        </CopyButton>
      </div>
    </div>
  );
}
