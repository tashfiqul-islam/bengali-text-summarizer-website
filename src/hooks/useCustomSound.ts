'use client'

import { useEffect } from 'react'
import useSound from 'use-sound'

/**
 * Custom hook to play sound effects with proper handling of browser audio restrictions.
 *
 * @param {string} src - The path to the sound file.
 * @param {Object} options - Options for configuring the sound playback.
 * @param {boolean} [options.interrupt=true] - Whether to interrupt currently playing sounds.
 * @param {number} [options.volume=1.0] - Volume level of the sound (from 0.0 to 1.0).
 * @returns {[() => void, () => void]} - An array containing the `play` and `stop` functions.
 */
interface SoundOptions {
  interrupt?: boolean
  volume?: number
}

export function useCustomSound(
  src: string,
  options: SoundOptions = { interrupt: true, volume: 1.0 }
): [() => void, () => void] {
  // Initialize the sound with provided options
  const [play, { stop, sound }] = useSound(src, {
    ...options,
    onloaderror: (_: number, error: Error) => console.error(`Failed to load sound: ${src}`, error),
    onplayerror: (_: number, error: Error) => console.error(`Failed to play sound: ${src}`, error),
  })

  /**
   * Ensures the AudioContext is resumed after a user gesture (click/keydown).
   * This resolves browser restrictions on auto-playing audio.
   */
  useEffect(() => {
    const unlockAudioContext = (): void => {
      if (sound && sound.context) {
        const audioContext = sound.context as AudioContext
        if (audioContext?.state === 'suspended') {
          audioContext.resume().catch((error: Error) => {
            console.error('Failed to resume AudioContext:', error)
          })
        }
      }
    }

    // Add user gesture listeners
    document.addEventListener('click', unlockAudioContext)
    document.addEventListener('keydown', unlockAudioContext)

    return () => {
      // Clean up listeners
      document.removeEventListener('click', unlockAudioContext)
      document.removeEventListener('keydown', unlockAudioContext)
    }
  }, [sound])

  /**
   * Stops the audio if it's currently playing to prevent pool exhaustion.
   */
  const safePlay = (): void => {
    try {
      stop() // Stop any ongoing sound before playing
      play()
    } catch (error) {
      console.error('Error playing sound:', error)
    }
  }

  return [safePlay, stop]
}
