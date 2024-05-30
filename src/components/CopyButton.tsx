import { useClipboard } from '@/hooks/useClipboard';

interface CopyButtonProps {
  value: string;
  timeout?: number;
  children: (payload: { copied: boolean; copy: () => void }) => React.ReactNode;
}

function CopyButton({ value, timeout = 2000, children }: CopyButtonProps) {
  const clipboard = useClipboard({ timeout });
  const copy = () => clipboard.copy(value);

  return <>{children({ copy, copied: clipboard.copied })}</>;
}

export default CopyButton;
