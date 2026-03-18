export default function Footer() {
  return (
    <footer className="bg-cream-dark/50 border-t border-taupe/12 py-8 md:py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-semibold tracking-[0.04em] text-near-black">
              DEEP SKIN
            </p>
            <p className="mt-1 text-[0.72rem] text-near-black/35 font-light">
              Distributed by Deep Skin Lab Ltd., London
            </p>
          </div>

          <div className="flex items-center gap-5 text-[0.75rem] text-near-black/40">
            <a href="#" className="hover:text-near-black/65 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-near-black/65 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-near-black/65 transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-taupe/12">
          <p className="text-[0.65rem] leading-relaxed text-near-black/30 text-center max-w-3xl mx-auto font-light">
            Deep Skin Scar Tape is a Class I medical device. For external use
            only on closed, healed skin. Results may vary. This product is not
            intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  )
}
