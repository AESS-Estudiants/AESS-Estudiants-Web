import { useEffect } from 'react'
import './CourseModal.css'

const CourseModal = ({ course, isOpen, onClose }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen || !course) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Tancar modal">
                    <i className="fas fa-times"></i>
                </button>

                <div className="modal-header">
                    <div className="modal-logo">
                        <img src={course.logo} alt={`${course.name} logo`} />
                    </div>
                    <h2>{course.name}</h2>
                    <span className="modal-level">{course.level}</span>
                </div>

                <div className="modal-body">
                    <section className="modal-section">
                        <h3><i className="fas fa-info-circle"></i> Descripció</h3>
                        <p>{course.description}</p>
                    </section>

                    <section className="modal-section">
                        <h3><i className="fas fa-list-ul"></i> Contingut del Curs</h3>
                        <p>{course.detailedContent || 'El contingut detallat serà publicat properament amb l\'obertura d\'inscripcions.'}</p>
                    </section>

                    <section className="modal-section">
                        <h3><i className="fas fa-check-circle"></i> Requisits</h3>
                        <p>{course.requisits}</p>
                        {course.requisitsDetails && (
                            <ul className="modal-list">
                                {course.requisitsDetails.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        )}
                    </section>

                    <section className="modal-section">
                        <h3><i className="fas fa-laptop"></i> Material Necessari</h3>
                        {course.additionalMaterial && course.additionalMaterial.length > 0 ? (
                            <ul className="modal-list">
                                {course.additionalMaterial.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No cal portar material; el facilitarem durant el curs.</p>
                        )}
                    </section>

                    <div className="modal-details-grid">
                        <div className="modal-detail">
                            <i className="fas fa-clock"></i>
                            <div>
                                <strong>Durada</strong>
                                <p>{course.duration}</p>
                            </div>
                        </div>
                        <div className="modal-detail">
                            <i className="fas fa-calendar-alt"></i>
                            <div>
                                <strong>Data</strong>
                                <p>{course.date}</p>
                            </div>
                        </div>
                        <div className="modal-detail">
                            <i className="fas fa-euro-sign"></i>
                            <div>
                                <strong>Preu</strong>
                                <p>{course.preuUPC}€ UPC / {course.preuNoUPC}€ No UPC</p>
                            </div>
                        </div>
                        <div className="modal-detail">
                            <i className="fas fa-certificate"></i>
                            <div>
                                <strong>Crèdits ECTS</strong>
                                <p>{course.credits}</p>
                            </div>
                        </div>
                    </div>

                    <section className="modal-section">
                        <h3><i className="fas fa-user-plus"></i> Inscripció</h3>
                        <p>Les inscripcions per a la propera edició s'obriran a <strong>Gener 2026</strong>. Estigues atent a les nostres xarxes socials i al grup de WhatsApp per no perdre't cap novetat!</p>
                    </section>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={onClose}>
                        Tancar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CourseModal
