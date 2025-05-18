export default function SignatureBlock({ name, title }) {
  return (
    <div className="text-right mt-16 animate-on-scroll">
      <div className="inline-block relative">
        <p className="text-2xl font-semibold relative text-[#051905]">
          - {name} -
        </p>
        <p className="text-lg italic text-[rgba(5,25,5,0.75)]">
          {title}
        </p>
      </div>
    </div>
  );
}
