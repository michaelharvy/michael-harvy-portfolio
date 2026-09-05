const stroked = (children, size = 18) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
)

export function GitHubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export function MailIcon({ size = 18 }) {
  return stroked(
    <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
    size,
  )
}

export function FileIcon({ size = 18 }) {
  return stroked(
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </>,
    size,
  )
}

export function PinIcon({ size = 18 }) {
  return stroked(
    <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    size,
  )
}

export function SchoolIcon({ size = 18 }) {
  return stroked(
    <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 6 3 12 0v-5" /></>,
    size,
  )
}

const PLATFORMS = {
  github: { href: 'https://github.com/michaelharvy', title: 'GitHub', Icon: GitHubIcon },
  linkedin: { href: 'https://www.linkedin.com/in/michael-harvy-m-nepomuceno-454678434/', title: 'LinkedIn', Icon: LinkedInIcon },
  facebook: { href: 'https://www.facebook.com/michael.harvy.minebe.nepomuceeno.30', title: 'Facebook', Icon: FacebookIcon },
  email: { href: 'mailto:michaelharvy66@gmail.com', title: 'Email', Icon: MailIcon },
}

const DEFAULT_PLATFORMS = ['github', 'linkedin', 'facebook']

export default function SocialLinks({ className = 'social-row', size = 18, platforms = DEFAULT_PLATFORMS }) {
  return (
    <div className={className}>
      {platforms.map((key) => {
        const { href, title, Icon } = PLATFORMS[key]
        const external = href.startsWith('http')
        return (
          <a
            key={key}
            href={href}
            title={title}
            aria-label={title}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon size={size} />
          </a>
        )
      })}
    </div>
  )
}