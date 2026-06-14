import { Link } from 'react-router-dom'
import './TerminalButton.css'

const normalizeLabel = (value) => (value ?? '').toString().trim()

const renderLabelContent = (label, format, transform, symbol) => {
  const normalizedLabel = normalizeLabel(label)

  if (!normalizedLabel) {
    return null
  }

  if (format === 'command') {
    const commandParts = normalizedLabel.split(/\s+/)
    const command = commandParts[0] ?? ''
    const commandArgs = commandParts.slice(1).join(' ')
    const visibleLine = `${symbol}  ${normalizedLabel}`
    const border = '─'.repeat(visibleLine.length + 2)

    return (
      <pre aria-hidden="true">
        {`┌${border}┐\n│ `}
        <span className="terminal-symbol">{symbol}</span>
        {'  '}
        <span className="terminal-command">{command}</span>
        {commandArgs ? <span className="terminal-argument"> {commandArgs}</span> : null}
        {` │\n└${border}┘`}
      </pre>
    )
  }

  const renderedLabel = transform === 'none' ? normalizedLabel : normalizedLabel.toUpperCase()
  const visibleLine = `${symbol}  ${renderedLabel}`
  const border = '─'.repeat(visibleLine.length + 2)

  return (
    <pre aria-hidden="true">
      {`┌${border}┐\n│ `}
      <span className="terminal-symbol">{symbol}</span>
      {'  '}
      <span className="terminal-label">{renderedLabel}</span>
      {` │\n└${border}┘`}
    </pre>
  )
}

const TerminalButton = ({
  to,
  href,
  label,
  ariaLabel,
  tone = 'primary',
  size = 'md',
  format = 'label',
  transform = 'upper',
  symbol = '>',
  className = '',
  type = 'button',
  disabled = false,
  ...rest
}) => {
  const classes = [
    'terminal-button',
    `terminal-button--tone-${tone}`,
    `terminal-button--size-${size}`,
    format === 'command' ? 'terminal-button--command' : 'terminal-button--label',
    disabled ? 'is-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = renderLabelContent(label, format, transform, symbol)
  const sharedProps = {
    className: classes,
    'aria-label': ariaLabel ?? label,
    ...rest,
  }

  if (to) {
    return (
      <Link to={to} {...sharedProps}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} {...sharedProps}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} {...sharedProps}>
      {content}
    </button>
  )
}

export default TerminalButton
