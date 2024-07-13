'use client';

import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

const MAX_QR_CODE_LENGTH = 1000;

export default function ClientQrGenerator() {
  const [qrCodeValue, setQrCodeValue] = useState('');
  const qrCodeCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!qrCodeCanvasRef.current) return;

    QRCode.toCanvas(
      qrCodeCanvasRef.current,
      qrCodeValue,
      {
        width: 256,
      },
      (error) => {
        if (error) {
          console.error(error);
        }
      },
    );
  }, [qrCodeValue]);

  const downloadQrCode = () => {
    if (!qrCodeCanvasRef.current) return;

    const canvas = qrCodeCanvasRef.current;
    const dataUrl = canvas.toDataURL('image/png');

    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'qr-code.png';
    a.click();

    // Free up memory
    URL.revokeObjectURL(dataUrl);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 p-6 items-center bg-base-200 rounded-xl">
          <label className="form-control">
            <div className="label">
              <span className="label-text">
                Enter your URL or text to generate QR code
              </span>
            </div>

            <input
              type="text"
              value={qrCodeValue}
              placeholder='e.g. "https://example.com" or "Hello, World!"'
              maxLength={MAX_QR_CODE_LENGTH}
              onChange={(e) => setQrCodeValue(e.target.value)}
              className="input input-bordered"
            />

            <div className="label">
              <span className="label-text-alt"></span>
              <span
                className={`label-text-alt ${
                  qrCodeValue.length >= MAX_QR_CODE_LENGTH ? 'text-error' : ''
                }`}
              >
                {qrCodeValue.length}/{MAX_QR_CODE_LENGTH}
              </span>
            </div>
          </label>
        </div>

        <div className="qr-container self-center p-6 bg-base-200 rounded-xl">
          <div className="bg-white rounded-md">
            {qrCodeValue ? (
              <canvas
                ref={qrCodeCanvasRef}
                id="qr-code"
                className="w-64 h-64"
              />
            ) : (
              <div className="w-64 h-64 flex items-center justify-center">
                <span className="text-lg text-gray-400">
                  No QR code to display
                </span>
              </div>
            )}
          </div>

          <button
            className="mt-5 w-full btn btn-primary"
            disabled={!qrCodeValue}
            onClick={downloadQrCode}
          >
            Download QR code
          </button>
        </div>
      </div>
    </>
  );
}
