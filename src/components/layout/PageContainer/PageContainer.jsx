export default function PageContainer({ 
  children, 
  backgroundColor, 
  textColor, 
  className = "" 
}) {
  return (
    <div 
      className={`min-h-screen w-full py-8 sm:py-12 px-4 sm:px-6 ${className}`}
      style={{ backgroundColor, color: textColor }}
    >
      <div className="container mx-auto space-y-8 sm:space-y-12 group">
        {children}
      </div>
    </div>
  );
}
