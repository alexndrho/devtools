import CopyButton, { CopyButtonProps } from './CopyButton';
import { TbClipboard, TbClipboardCheck } from 'react-icons/tb';

interface ClipboardCopyButtonProps {
  value: CopyButtonProps['value'];
  timeout?: CopyButtonProps['timeout'];
  position?:
    | 'none'
    | 'tooltip-top'
    | 'tooltip-bottom'
    | 'tooltip-left'
    | 'tooltip-right';
  className?: string;
}

export default function ClipboardCopyButton({
  value,
  timeout,
  position = 'tooltip-top',
  className = '',
}: ClipboardCopyButtonProps) {
  return (
    <CopyButton value={value} timeout={timeout}>
      {({ copied, copy }) => (
        <div
          className={`${position === 'none' ? '' : `tooltip ${position}`} ${className}`}
          data-tip={copied ? 'Copied!' : 'Copy'}
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
  );
}
