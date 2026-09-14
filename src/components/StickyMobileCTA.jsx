import { AMAZON_URL } from '../config'

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-cocoa/10 bg-cream/92 px-5 py-3 backdrop-blur-xl md:hidden safe-bottom">
      <a
        href={AMAZON_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-cocoa py-3.5 text-[0.9rem] font-semibold tracking-wide text-white transition-colors duration-200 active:bg-cocoa-light"
      >
        Shop on Amazon
      </a>
    </div>
  )
}
