import SocialIcon from './SocialIcon';

function SocialIconsGroup({ socialLinks }) {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((icon, idx) => (
        <SocialIcon key={idx} {...icon} />
      ))}
    </div>
  );
}

export default SocialIconsGroup;
