import AmazonLink from './AmazonLink'

export default function Footer() {
  return (
    <footer className="border-t border-cocoa/8 bg-cream-dark px-5 py-9 sm:px-7 md:py-11 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-xl font-semibold tracking-[0.07em] text-cocoa">DEEP SKIN</p>
            <p className="mt-1.5 text-xs leading-5 text-cocoa/47">
              Medical-grade silicone scar tape · Deep Skin Lab Ltd., London, UK
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="/privacypolicy" className="min-h-11 py-3 text-xs font-medium text-cocoa/55 transition-colors hover:text-cocoa">
              Privacy policy
            </a>
            <a href="/scar-care-daily/" className="min-h-11 py-3 text-xs font-medium text-cocoa/55 transition-colors hover:text-cocoa">
              Scar Care Daily
            </a>
            <AmazonLink placement="footer" className="min-h-11 py-3 text-xs font-medium text-cocoa/55 transition-colors hover:text-cocoa">
              Amazon listing
            </AmazonLink>
          </div>
        </div>
        <div className="mt-6 border-t border-cocoa/8 pt-5">
          <p className="max-w-4xl text-[0.68rem] leading-5 text-cocoa/38">
            For external use on clean, dry, closed and fully healed skin only. Do not apply to open wounds.
            Stop use if irritation occurs. Results and treatment time vary.
          </p>
        </div>
      </div>
    </footer>
  )
}
