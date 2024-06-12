'use client';

import { useEffect, useState } from 'react';
import CopyButton from '@/components/CopyButton';
import { TbClipboard, TbClipboardCheck } from 'react-icons/tb';

function CopyToClipboard({
  value,
  className,
}: {
  value: string;
  className: string;
}) {
  return (
    <CopyButton value={value}>
      {({ copied, copy }) => (
        <button
          onClick={copy}
          className={`btn ${className}`}
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <TbClipboardCheck className="w-5 h-5" />
          ) : (
            <TbClipboard className="w-5 h-5" />
          )}
        </button>
      )}
    </CopyButton>
  );
}

export default function ClientURLParser() {
  const [url, setUrl] = useState(
    'https://usr:pwd@devtools.alexndrho.dev:3000/url-parser?key1=value1&key2=value2#hash',
  );

  const [protocol, setProtocol] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hostname, setHostname] = useState('');
  const [port, setPort] = useState('');
  const [path, setPath] = useState('');
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useState<URLSearchParams>();
  const [hash, setHash] = useState('');

  const [invalidUrl, setInvalidUrl] = useState(false);

  useEffect(() => {
    try {
      const urlObject = new URL(url);

      setInvalidUrl(false);
      setProtocol(urlObject.protocol);
      setUsername(urlObject.username);
      setPassword(urlObject.password);
      setHostname(urlObject.hostname);
      setPort(urlObject.port);
      setPath(urlObject.pathname);
      setSearch(urlObject.search);
      setSearchParams(urlObject.searchParams);
      setHash(urlObject.hash);
    } catch (error) {
      setInvalidUrl(true);
      setProtocol('');
      setUsername('');
      setPassword('');
      setHostname('');
      setPort('');
      setPath('');
      setSearch('');
      setSearchParams(undefined);
    }
  }, [url]);

  return (
    <>
      <label className="form-control">
        <div className="label">
          <span className={'label-text' + (invalidUrl ? ' text-error' : '')}>
            Url
          </span>
        </div>

        <input
          type="text"
          value={url}
          placeholder="https://example.com"
          onChange={(e) => setUrl(e.target.value)}
          className={
            'input input-bordered' + (invalidUrl ? ' input-error' : '')
          }
        />

        {invalidUrl && (
          <div className="label">
            <span className="label-text-alt text-error">Invalid URL</span>
          </div>
        )}
      </label>

      <div className="divider">URL Parts</div>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Protocol</span>
        </div>

        <div className="join w-full">
          <input
            type="text"
            value={protocol}
            readOnly
            className="join-item input input-bordered w-full"
          />

          <CopyToClipboard className="join-item" value={protocol} />
        </div>
      </label>

      <label className="mt-2 w-full form-control">
        <div className="label">
          <span className="label-text">Username</span>
        </div>

        <div className="join w-full">
          <input
            type="text"
            value={username}
            readOnly
            className="join-item input input-bordered w-full"
          />

          <CopyToClipboard className="join-item" value={username} />
        </div>
      </label>

      <label className="mt-2 w-full form-control">
        <div className="label">
          <span className="label-text">Password</span>
        </div>

        <div className="join w-full">
          <input
            type="text"
            value={password}
            readOnly
            className="join-item input input-bordered w-full"
          />

          <CopyToClipboard className="join-item" value={password} />
        </div>
      </label>

      <label className="mt-2 w-full form-control">
        <div className="label">
          <span className="label-text">Hostname</span>
        </div>

        <div className="join w-full">
          <input
            type="text"
            value={hostname}
            readOnly
            className="join-item input input-bordered w-full"
          />

          <CopyToClipboard className="join-item" value={hostname} />
        </div>
      </label>

      <label className="mt-2 w-full form-control">
        <div className="label">
          <span className="label-text">Port</span>
        </div>

        <div className="join w-full">
          <input
            type="text"
            value={port}
            readOnly
            className="join-item input input-bordered w-full"
          />

          <CopyToClipboard className="join-item" value={port} />
        </div>
      </label>

      <label className="mt-2 w-full form-control">
        <div className="label">
          <span className="label-text">Path</span>
        </div>

        <div className="join w-full">
          <input
            type="text"
            value={path}
            readOnly
            className="join-item input input-bordered w-full"
          />

          <CopyToClipboard className="join-item" value={path} />
        </div>
      </label>

      <label className="mt-2 w-full form-control">
        <div className="label">
          <span className="label-text">Search</span>
        </div>

        <div className="join w-full">
          <input
            type="text"
            value={search}
            readOnly
            className="join-item input input-bordered w-full"
          />

          <CopyToClipboard className="join-item" value={search} />
        </div>
      </label>

      <label className="mt-2 w-full form-control">
        <div className="label">
          <span className="label-text">Hash</span>
        </div>

        <div className="join w-full">
          <input
            type="text"
            value={hash}
            readOnly
            className="join-item input input-bordered w-full"
          />

          <CopyToClipboard className="join-item" value={hash} />
        </div>
      </label>

      {searchParams && searchParams.size > 0 && (
        <div className="mt-5">
          <div className="flex flex-col gap-2">
            {Array.from(searchParams).map(([name, value], index) => (
              <div key={index} className="flex gap-2">
                <div className="form-control flex-1">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>

                  <div className="join w-full">
                    <input
                      type="text"
                      value={name}
                      readOnly
                      className="join-item input input-bordered w-full"
                    />

                    <CopyToClipboard className="join-item" value={name} />
                  </div>
                </div>

                <div className="form-control flex-1">
                  <div className="label">
                    <span className="label-text">Value</span>
                  </div>

                  <div className="join w-full">
                    <input
                      type="text"
                      value={value}
                      readOnly
                      className="join-item input input-bordered w-full"
                    />

                    <CopyToClipboard className="join-item" value={value} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
