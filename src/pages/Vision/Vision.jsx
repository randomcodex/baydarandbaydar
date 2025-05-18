import { visionData } from "./index";
import { visionStyles } from "./styles";
import { ContentCard } from "../../components";
import { SectionGrid, SignatureBlock } from "../../components";
import InViewWrapper from "../../components/ui/InViewWrapper";
import GradientUnderline from "../../components/ui/GradientUnderline";

export default function Vision() {
  const { colors } = visionStyles;

  return (
    <div
      className="min-h-screen w-full relative bg-cover bg-center"
      style={{
        backgroundColor: visionData.background.baseColor,
        backgroundImage: `url(${visionData.background.image})`,
        opacity: visionData.background.opacity,
      }}
    >
      <div className="container relative z-10 mx-auto py-20 px-4 sm:px-6 max-w-4xl overflow-hidden">
        <ContentCard>
          <section className="max-w-4xl mx-auto px-6 sm:px-10 py-8 font-serif text-[#0a2e0a]">
            <InViewWrapper>
              <h2 className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight text-[#051905]">
                <span className="relative inline-block">
                  {visionData.mission.title}
                  <GradientUnderline />
                </span>
              </h2>
              <p 
                className="mb-8 text-lg leading-relaxed text-[rgba(5,25,5,0.85)]"
                dangerouslySetInnerHTML={{ __html: visionData.mission.statement }}
              />
            </InViewWrapper>
            <SectionGrid 
              sections={visionData.sections} 
              useGradientUnderlines={true}
            />
            <SignatureBlock 
              name={visionData.signature.name}
              title={visionData.signature.title}
            />
          </section>
        </ContentCard>
      </div>
    </div>
  );
}
