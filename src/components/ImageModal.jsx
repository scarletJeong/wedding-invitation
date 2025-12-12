import { useEffect } from 'react'

function ImageModal({ imageSrc, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (imageSrc) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [imageSrc, onClose])

  if (!imageSrc) return null

  return (
    <div className="modal show" onClick={onClose}>
      <span className="close" onClick={onClose}>&times;</span>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="확대 이미지" />
      </div>
    </div>
  )
}

export default ImageModal

