'use client'

import { useEffect, useState } from 'react'

type ProgressBarProps = {
  duration: number
  imgIndex: number
}

export default function ProgressBar({ duration, imgIndex }: ProgressBarProps) {
  const [progressBar, setProgressBar] = useState(0)

  useEffect(() => {
    setProgressBar(0)
    const interval = setInterval(() => {
      setProgressBar((prev) => {
        if (prev >= duration) {
          return duration
        }
        return prev + 10
      })
    }, 10)
    return () => clearInterval(interval)
  }, [duration, imgIndex])

  const percent: number = (progressBar / duration) * 100

  return (
    <div className="absolute bottom-0 w-full bg-transparent h-1.5">
      <div
        className="bg-cosmicgreen h-1.5"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  )
}
