import Reveal from "@/components/Reveal";

type MembershipBridgeProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  featuresTitle: string;
  benefitsTitle: string;
  features: string[];
  benefits: string[];
  centerText: string;
};

export default function MembershipBridge({
  eyebrow,
  title,
  subtitle,
  featuresTitle,
  benefitsTitle,
  features,
  benefits,
  centerText,
}: MembershipBridgeProps) {
  const words = centerText.split(" ");
  const firstLine = words.slice(0, 2).join(" ");
  const secondLine = words.slice(2).join(" ");

  return (
    <section className="bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]">
      <Reveal>
        <div className="mx-auto max-w-[1600px]">
          <div className="overflow-hidden rounded-[32px] border border-[rgba(166,140,74,0.42)] bg-[linear-gradient(180deg,#f8f3ea_0%,#f2ebdf_100%)] px-5 py-12 sm:px-8 sm:py-16 xl:px-12 xl:py-20">
            <div className="mb-10 text-center sm:mb-12 xl:mb-14">
              <p className="text-[0.78rem] uppercase tracking-[0.36em] text-[var(--sable-sage)]">
                {eyebrow}
              </p>

              <h2 className="mt-4 font-heading text-[2.5rem] leading-[0.95] tracking-[-0.04em] text-[var(--sable-dark)] sm:text-[3.25rem] xl:text-[4.25rem]">
                {title}
              </h2>

              <p className="mx-auto mt-4 max-w-[42rem] text-[1.02rem] leading-[1.7] italic text-[var(--sable-sage)] sm:text-[1.14rem] xl:text-[1.22rem]">
                {subtitle}
              </p>
            </div>

            <div className="xl:hidden">
              <Reveal delay={60} y={14}>
                <div className="mb-8 flex justify-center">
                  <div className="rounded-full border border-[rgba(166,140,74,0.26)] bg-[rgba(255,255,255,0.58)] px-8 py-5 text-center font-heading text-[1.55rem] leading-[1.05] text-[var(--sable-dark)] shadow-[0_8px_28px_rgba(0,0,0,0.04)] transition duration-500 hover:-translate-y-0.5 sm:px-10 sm:py-6 sm:text-[1.85rem]">
                    {secondLine ? (
                      <>
                        {firstLine}
                        <br />
                        {secondLine}
                      </>
                    ) : (
                      centerText
                    )}
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-5 lg:grid-cols-2">
                <Reveal delay={120} y={20}>
                  <div className="rounded-[28px] border border-[rgba(166,140,74,0.28)] bg-[linear-gradient(180deg,#22311a_0%,#2a3b21_100%)] px-6 py-8 sm:px-10 sm:py-10">
                    <p className="text-[0.82rem] uppercase tracking-[0.34em] text-[rgba(235,230,215,0.72)] sm:text-[0.9rem]">
                      {featuresTitle}
                    </p>

                    <ul className="mt-8 space-y-5 text-white sm:mt-10 sm:space-y-6">
                      {features.map((item) => (
                        <li
                          key={item}
                          className="border-b border-[rgba(255,255,255,0.1)] pb-4 font-heading text-[1.4rem] font-normal leading-[1.2] tracking-[0.01em] text-white"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={200} y={20}>
                  <div className="rounded-[28px] border border-[rgba(166,140,74,0.28)] bg-[linear-gradient(180deg,#425334_0%,#506345_100%)] px-6 py-8 sm:px-10 sm:py-10">
                    <p className="text-[0.82rem] uppercase tracking-[0.34em] text-[rgba(235,230,215,0.72)] sm:text-[0.9rem]">
                      {benefitsTitle}
                    </p>

                    <ul className="mt-8 space-y-5 text-white sm:mt-10 sm:space-y-6">
                      {benefits.map((item) => (
                        <li
                          key={item}
                          className="border-b border-[rgba(255,255,255,0.1)] pb-4 font-heading text-[1.4rem] font-normal leading-[1.2] tracking-[0.01em] text-white"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="relative hidden xl:block">
              <div className="absolute inset-y-0 left-1/2 z-20 w-[220px] -translate-x-1/2 bg-transparent 2xl:w-[250px]" />

              <div className="relative z-10 grid min-h-[580px] grid-cols-2">
                <div className="rounded-l-[42px] border border-r-0 border-[rgba(166,140,74,0.22)] bg-[linear-gradient(180deg,#22311a_0%,#2d3e23_100%)] px-14 py-14 2xl:px-16 2xl:py-16">
                  <p className="text-[0.9rem] uppercase tracking-[0.34em] text-[rgba(235,230,215,0.68)] 2xl:text-[0.96rem]">
                    {featuresTitle}
                  </p>

                  <ul className="mt-16 space-y-8 text-white 2xl:mt-20 2xl:space-y-9">
                    {features.map((item) => (
                      <li
                        key={item}
                        className="max-w-[440px] border-b border-[rgba(255,255,255,0.1)] pb-5 font-heading text-[1.8rem] font-normal leading-[1.16] tracking-[0.01em] text-white 2xl:text-[2rem]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-r-[42px] border border-l-0 border-[rgba(166,140,74,0.22)] bg-[linear-gradient(180deg,#44563a_0%,#56694a_100%)] px-14 py-14 2xl:px-16 2xl:py-16">
                  <div className="ml-auto max-w-[390px] 2xl:max-w-[430px]">
                    <p className="text-[0.9rem] uppercase tracking-[0.34em] text-[rgba(235,230,215,0.68)] 2xl:text-[0.96rem]">
                      {benefitsTitle}
                    </p>

                    <ul className="mt-16 space-y-8 text-white 2xl:mt-20 2xl:space-y-9">
                      {benefits.map((item) => (
                        <li
                          key={item}
                          className="border-b border-[rgba(255,255,255,0.1)] pb-5 font-heading text-[1.8rem] font-normal leading-[1.16] tracking-[0.01em] text-white 2xl:text-[2rem]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 z-30 flex h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(166,140,74,0.36)] bg-[linear-gradient(180deg,#f8f3ea_0%,#f1ebdf_100%)] shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition duration-700 hover:-translate-y-[51%] 2xl:h-[330px] 2xl:w-[330px]">
                <div className="max-w-[190px] text-center font-heading text-[1.95rem] leading-[1.08] text-[var(--sable-dark)] transition-opacity duration-700 2xl:max-w-[220px] 2xl:text-[2.25rem]">
                  {secondLine ? (
                    <>
                      {firstLine}
                      <br />
                      {secondLine}
                    </>
                  ) : (
                    centerText
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}