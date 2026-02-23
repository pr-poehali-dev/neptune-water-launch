import { icons } from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({ name, size = 24, className, fallback }: IconProps) => {
  const LucideIcon = icons[name as keyof typeof icons] || (fallback ? icons[fallback as keyof typeof icons] : null);
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} />;
};

export default Icon;
