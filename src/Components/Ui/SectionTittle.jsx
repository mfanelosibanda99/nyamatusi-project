export default function SectionTittle({ children, className = '' }) {
  return (
    <h2 className={`text-3xl font-light text-neutral-800 ${className}`}>
      {children}
    </h2>
  )
}