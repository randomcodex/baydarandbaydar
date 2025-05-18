export default function BackgroundContainer({ 
  backgroundImage, 
  overlayColor, 
  children, 
  styles 
}) {
  return (
    <div
      className="min-h-screen w-full py-8 sm:py-12 px-2 sm:px-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: overlayColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        ...styles
      }}
    >
      {children}
    </div>
  );
}
