export default function ComplianceTrust() {
  return (
    <section className="border-y border-cocoa/8 bg-[#f8f1ed]">
      <div className="mx-auto max-w-6xl px-5 py-7 sm:px-7 lg:px-10 lg:py-9">

        <div className="flex items-center justify-center gap-5 sm:gap-8">

          {/* UKCA MARK */}
          <div className="shrink-0">
            <img
              src="/ukca-mark.png"
              alt="UKCA mark"
              className="w-[90px] sm:w-[110px]"
            />
          </div>

          {/* DIVIDER */}
          <div className="h-16 w-px bg-cocoa/20 sm:h-20" />

          {/* COPY */}
          <div className="max-w-md">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cocoa/55">
              Quality you can trust
            </p>

            <h3 className="mt-1.5 font-serif text-[1.45rem] font-semibold leading-tight text-cocoa sm:text-[1.7rem]">
              UKCA marked medical device
            </h3>

            <p className="mt-1.5 text-[0.82rem] leading-5 text-cocoa/70 sm:text-[0.9rem]">
              Developed to meet applicable UK medical device requirements
              for quality and safety.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}