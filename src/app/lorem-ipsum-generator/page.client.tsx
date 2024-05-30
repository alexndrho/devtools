"use client";

import { useEffect, useState } from "react";
import { loremIpsum } from "lorem-ipsum";
import CopyButton from "@/components/CopyButton";
import { TbClipboard, TbClipboardCheck } from "react-icons/tb";

export default function ClientLoremIpsumGenerator() {
  const [units, setUnits] = useState("Paragraphs");
  const [count, setCount] = useState<number | undefined>(1);
  const [asHtml, setAsHtml] = useState(false);

  const [generatedText, setGeneratedText] = useState("");

  useEffect(() => {
    setGeneratedText(
      loremIpsum({
        count: count || 0,
        units: units.toLowerCase() as any,
        format: asHtml ? "html" : "plain",
      })
    );
  }, [units, count, asHtml]);

  return (
    <>
      <div className="flex gap-8 flex-col md:gap-5 md:flex-row">
        <div className="flex-1 md:flex-none md:w-72">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Units</span>
            </div>
            <select
              className="select select-bordered"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
            >
              <option>Words</option>
              <option>Sentences</option>
              <option>Paragraphs</option>
            </select>
          </label>

          <label className="mt-2 form-control w-full">
            <div className="label">
              <span className="label-text">Count</span>
            </div>
            <input
              type="number"
              value={count}
              placeholder="Type here"
              min="1"
              max="999"
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 3) {
                  setCount(parseInt(value));
                }
              }}
              className={`input input-bordered w-full`}
            />
          </label>

          <div className="form-control w-full">
            <label className="label cursor-pointer">
              <span className="label-text">as HTML</span>
              <input
                type="checkbox"
                className="toggle"
                checked={asHtml}
                onChange={(e) => setAsHtml(e.target.checked)}
              />
            </label>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex-1 mockup-window border bg-base-300">
            <div className="relative px-6 py-9 bg-base-200">
              <CopyButton value={generatedText}>
                {({ copied, copy }) => (
                  <div
                    className=" absolute top-2 right-2 tooltip tooltip-left"
                    data-tip={copied ? "Copied!" : "Copy"}
                  >
                    <button
                      aria-label="copy button"
                      onClick={copy}
                      className="copy-button btn btn-sm btn-square"
                    >
                      {copied ? (
                        <TbClipboardCheck className="w-5 h-5" />
                      ) : (
                        <TbClipboard className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                )}
              </CopyButton>

              <div className="flex flex-col gap-4">
                {generatedText.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
