import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  value: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ value }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="w-full cursor-pointer bg-[#1A1A1A] px-4 py-3 rounded-xl flex justify-between items-center text-gray-300 hover:bg-[#222] transition"
    >
      {value}

      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-yellow-400" />
      )}
    </button>
  );
};

export default CopyButton;
