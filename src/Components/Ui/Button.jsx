export default function Button({ children, href, className = '', ...props }) {
  const styles = `inline-block bg-brand px-5 py-2.5 text-xs font-semibold text-white transition hover:opacity-90 ${className}`

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  )
}