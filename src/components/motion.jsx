import { useRef, useEffect, useState } from 'react'
import {
  motion, useReducedMotion, useInView, useMotionValue, useSpring, animate,
} from 'framer-motion'

export const easeOut = [0.16, 1, 0.3, 1]

/* Fade/slide in. `mount` plays immediately (above-the-fold); otherwise on scroll-in. */
export function Reveal({ children, delay = 0, y = 26, className, as = 'div', once = true, style, mount = false }) {
  const reduce = useReducedMotion()
  const Comp = motion[as] || motion.div
  if (reduce) return <Comp className={className} style={style}>{children}</Comp>
  const trigger = mount
    ? { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y }, whileInView: { opacity: 1, y: 0 }, viewport: { once, margin: '-12% 0px' } }
  return (
    <Comp className={className} style={style} {...trigger} transition={{ duration: 0.75, ease: easeOut, delay }}>
      {children}
    </Comp>
  )
}

/* Stagger container + item */
export function Stagger({ children, className, gap = 0.09, as = 'div', style }) {
  const reduce = useReducedMotion()
  const Comp = motion[as] || motion.div
  if (reduce) return <Comp className={className} style={style}>{children}</Comp>
  return (
    <Comp
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={{ show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({ children, className, y = 24, as = 'div', style }) {
  const reduce = useReducedMotion()
  const Comp = motion[as] || motion.div
  if (reduce) return <Comp className={className} style={style}>{children}</Comp>
  return (
    <Comp
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
      }}
    >
      {children}
    </Comp>
  )
}

/* Masked, line-by-line heading reveal. `lines` = array of nodes. */
export function RevealHeading({ lines, className, delay = 0, as = 'h1', mount = false }) {
  const reduce = useReducedMotion()
  const Tag = as
  if (reduce) {
    return <Tag className={className}>{lines.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}</Tag>
  }
  // Start fully below the (padded) clip box so the pre-reveal text never peeks,
  // and pad the bottom of the clip generously so glyph descenders (y, p, g, q)
  // are never sliced off once the line settles.
  const lineTrigger = mount
    ? { initial: { y: '130%' }, animate: { y: '0%' } }
    : { initial: { y: '130%' }, whileInView: { y: '0%' }, viewport: { once: true } }
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.22em' }}>
          <motion.span
            style={{ display: 'block', willChange: 'transform' }}
            {...lineTrigger}
            transition={{ duration: 0.95, ease: easeOut, delay: delay + i * 0.08 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

/* Number that counts up when scrolled into view */
export function CountUp({ to, suffix = '', prefix = '', decimals = 0, duration = 1.7, className }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    if (reduce) { setVal(to); return }
    const controls = animate(0, to, { duration, ease: easeOut, onUpdate: (v) => setVal(v) })
    return () => controls.stop()
  }, [inView, to, reduce, duration])
  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val)
  return <span ref={ref} className={className}>{prefix}{display}{suffix}</span>
}

/* Seamless infinite marquee. Duplicates children for a clean loop. */
export function Marquee({ children, speed = 38, className, reverse = false }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className} style={{ overflow: 'hidden' }}><div style={{ display: 'flex' }}>{children}</div></div>
  }
  return (
    <div className={className} style={{ overflow: 'hidden', display: 'flex' }}>
      <motion.div
        style={{ display: 'flex', flexShrink: 0, willChange: 'transform' }}
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

/* Magnetic hover wrapper for CTAs */
export function Magnetic({ children, strength = 0.35, className }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 })
  if (reduce) return <span className={className}>{children}</span>
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => { x.set(0); y.set(0) }
  return (
    <motion.span
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: 'inline-flex' }}
    >
      {children}
    </motion.span>
  )
}
