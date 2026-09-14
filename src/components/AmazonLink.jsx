import { track } from '@vercel/analytics'
import { AMAZON_URL } from '../config'

export default function AmazonLink({ placement, children, onClick, ...props }) {
  const handleClick = (event) => {
    track('amazon_cta_click', { placement })
    onClick?.(event)
  }

  return (
    <a
      href={AMAZON_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  )
}
