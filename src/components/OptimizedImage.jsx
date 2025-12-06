import { useState, useEffect, useRef } from 'react'
import './OptimizedImage.css'

const OptimizedImage = ({
    src,
    alt,
    className = '',
    width,
    height,
    priority = false,
    objectFit = 'cover',
    sizes = '100vw'
}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(priority)
    const imgRef = useRef(null)

    useEffect(() => {
        if (priority) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsInView(true)
                        observer.disconnect()
                    }
                })
            },
            {
                rootMargin: '100px', // Start loading before image enters viewport
                threshold: 0.01
            }
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => observer.disconnect()
    }, [priority])

    const handleLoad = () => {
        setIsLoaded(true)
    }

    const handleError = () => {
        console.warn(`Failed to load image: ${src}`)
        setIsLoaded(true) // Still hide skeleton on error
    }

    return (
        <div
            ref={imgRef}
            className={`optimized-image-wrapper ${className}`}
            style={{
                aspectRatio: width && height ? `${width}/${height}` : 'auto'
            }}
        >
            {!isLoaded && (
                <div className="image-skeleton">
                    <div className="skeleton-shimmer" />
                </div>
            )}

            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    loading={priority ? 'eager' : 'lazy'}
                    onLoad={handleLoad}
                    onError={handleError}
                    style={{ objectFit }}
                    className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
                />
            )}
        </div>
    )
}

export default OptimizedImage
