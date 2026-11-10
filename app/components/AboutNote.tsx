import localFont from "next/font/local";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const script = localFont({
  src: "../fonts/PinyonScript.ttf",
  weight: "400",
  display: "swap",
});

type Props = { title: string; body: string; brand: string };

// About Olivia as a signed note: a gold-framed cream card on a leaf-pattern
// field, with a drop cap and Olivia's signature.
export default function AboutNote({ title, body, brand }: Props) {
  const paragraphs = body.split("\n\n");
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]"
    >
      <div className="relative overflow-hidden rounded-[32px] border-3 border-[rgba(166,140,74,0.42)] bg-[linear-gradient(180deg,#f8f3ea_0%,#f4eee3_100%)] px-4 py-14 sm:px-10 md:py-24">
        <div className="deco-leaf leaf-cream-field" />
        <Reveal>
          <div className="relative mx-auto max-w-[46rem] rounded-[6px] bg-[#fbf8f2] p-2.5 shadow-[0_40px_90px_-50px_rgba(31,46,36,0.5)] sm:p-3">
            <div className="rounded-[4px] border border-[rgba(166,140,74,0.6)] px-5 py-12 sm:px-14 sm:py-14">
              <Image
                src="/sc-mark.png"
                alt=""
                width={740}
                height={560}
                className="mx-auto h-14 w-auto mix-blend-multiply [filter:brightness(1.02)]"
              />
              <p className="mt-8 text-center text-[0.875rem] uppercase tracking-[0.22em] text-[#8a6f2e]">
                A note from Olivia
              </p>
              <h2 className="mt-4 text-center font-heading text-[clamp(2.2rem,4vw,3.4rem)] font-normal leading-[1.08] text-[var(--sable-dark)]">
                {title}
              </h2>
              <div className="mt-10 space-y-5 text-[1.125rem] leading-[1.8] text-[var(--sable-body-soft)]">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-heading first-letter:text-[4.2rem] first-letter:leading-[0.8] first-letter:text-[#8a6f2e]"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-10 text-center sm:text-left">
                <p className={`${script.className} text-[3.6rem] leading-none text-[#8a6f2e]`}>
                  Olivia
                </p>
                <p className="mt-2 text-[0.875rem] uppercase tracking-[0.22em] text-[var(--sable-sage)]">
                  Founder · {brand}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
