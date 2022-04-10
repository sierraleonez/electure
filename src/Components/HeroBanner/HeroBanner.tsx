interface HeroBannerProps {
  imageUrl: string;
  children: React.ReactElement;
}
export default function HeroBanner({
  children,
  imageUrl,
}: HeroBannerProps): React.ReactElement {
  return (
    <div className="heroBanner" style={{ backgroundImage: `url(${imageUrl})` }}>
      {children}
    </div>
  );
}
