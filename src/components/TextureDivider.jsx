export default function TextureDivider() {
  return (
    <div className="relative h-[200px] md:h-[280px] overflow-hidden">
      <img
        src="/silk-texture.png"
        alt=""
        className="w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-transparent to-cream/60" />
    </div>
  )
}
