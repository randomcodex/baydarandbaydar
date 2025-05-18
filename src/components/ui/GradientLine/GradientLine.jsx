export default function GradientLine({ 
  colors = ['#ffe19b', '#ffffff', '#ffe19b'],
  glowColor = 'rgba(255,225,155,0.4)'
}) {
  return (
    <div 
      className="w-full h-0.5 animate-pulse transition-all duration-300 group-hover:h-0.5"
      style={{
        backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
        boxShadow: `0 0 8px 1px ${glowColor}`
      }}
    />
  );
}
