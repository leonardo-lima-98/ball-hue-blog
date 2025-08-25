interface AdBannerProps {
  size: 'leaderboard' | 'rectangle' | 'sidebar' | 'mobile';
  className?: string;
}

const AdBanner = ({ size, className = '' }: AdBannerProps) => {
  const sizeClasses = {
    leaderboard: 'w-full h-24 max-w-3xl', // 728x90
    rectangle: 'w-80 h-64', // 320x250
    sidebar: 'w-full h-48', // 300x250 responsive
    mobile: 'w-full h-16' // 320x50
  };

  return (
    <div className={`bg-muted border border-border rounded-lg flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <div className="text-center text-muted-foreground">
        <p className="text-sm font-medium">Espaço Publicitário</p>
        <p className="text-xs mt-1">Google AdSense</p>
      </div>
    </div>
  );
};

export default AdBanner;