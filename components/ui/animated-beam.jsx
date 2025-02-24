"use client"
import { motion } from "framer-motion"
import { useEffect, useId, useState, useCallback } from "react"
import debounce from "lodash/debounce" // Add this import

import { cn } from "../../lib/util"

export const AnimatedBeam = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  infiniteAnimation = true, // New prop to control animation
  debounceDelay = 100, // New prop for debounce delay
}) => {
  const id = useId()
  const [pathD, setPathD] = useState("")
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })
  const [error, setError] = useState(null)

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"]
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"]
      }

  // Memoized update path function with validation
  const updatePath = useCallback(() => {
    try {
      if (!containerRef?.current || !fromRef?.current || !toRef?.current) {
        throw new Error("Required refs are not available")
      }

      const containerRect = containerRef.current.getBoundingClientRect()
      const rectA = fromRef.current.getBoundingClientRect()
      const rectB = toRef.current.getBoundingClientRect()

      // Validate dimensions
      const svgWidth = Math.max(containerRect.width, 1) // Ensure minimum width of 1
      const svgHeight = Math.max(containerRect.height, 1) // Ensure minimum height of 1
      
      if (svgWidth === 0 || svgHeight === 0) {
        throw new Error("Invalid SVG dimensions")
      }

      setSvgDimensions({ width: svgWidth, height: svgHeight })

      const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset
      const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset
      const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset
      const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset

      const controlY = startY - curvature
      const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`
      
      setPathD(d)
      setError(null) // Clear any previous errors
    } catch (err) {
      setError(err.message)
      console.error("Error updating beam path:", err)
    }
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset
  ])

  // Debounced update function
  const debouncedUpdatePath = useCallback(
    debounce(updatePath, debounceDelay),
    [updatePath, debounceDelay]
  )

  useEffect(() => {
    const container = containerRef.current;

    // Initialize ResizeObserver with debounced update
    const resizeObserver = new ResizeObserver(() => {
      debouncedUpdatePath()
    })

    // Observe the container element
    if (container) {
      resizeObserver.observe(container)
    }

    // Initial update
    updatePath()

    return () => {
      debouncedUpdatePath.cancel() // Cancel any pending debounced updates
      if (container) {
        resizeObserver.disconnect()
      }
    }
  }, [containerRef, debouncedUpdatePath, updatePath])

  // If there's an error, render a fallback or nothing
  if (error) {
    return process.env.NODE_ENV === 'development' ? (
      <div className="text-red-500 text-sm">Beam Error: {error}</div>
    ) : null
  }

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%"
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: infiniteAnimation ? Infinity : 0,
            repeatDelay: 0
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  )
}