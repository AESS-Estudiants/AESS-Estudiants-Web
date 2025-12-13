import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    document.body.style.overflow = 'unset'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = () => {
    closeMenu()
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  // Menu variants
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/images/logos/aess/Logo_aess_blanc.png"
            alt="AESS Logo"
            className="logo-img"
          />
        </Link>

        <button
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{ zIndex: 1002 }}
        >
          <span className="hamburger"></span>
        </button>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Inici
            </Link>
          </li>
          <li className={`nav-item dropdown ${isDropdownOpen ? 'active' : ''}`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`nav-link ${isActive('/aessbot') || isActive('/aessbot-inscripcio') ? 'active' : ''}`}
            >
              AESSBot <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'}`}></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  to="/aessbot"
                  className={isActive('/aessbot') ? 'active' : ''}
                  onClick={handleNavClick}
                >
                  AESSBot
                </Link>
              </li>
              <li>
                <Link
                  to="/aessbot-inscripcio"
                  className={isActive('/aessbot-inscripcio') ? 'active' : ''}
                  onClick={handleNavClick}
                >
                  Inscripció AESSBot
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              to="/cursos"
              className={`nav-link ${isActive('/cursos') ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Cursos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projectes"
              className={`nav-link ${isActive('/projectes') ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Projectes
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Contacte
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                className="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />
              <motion.div
                className="mobile-nav-menu"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <ul className="mobile-nav-list">
                  <motion.li variants={itemVariants} className="mobile-nav-item">
                    <Link
                      to="/"
                      className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
                      onClick={handleNavClick}
                    >
                      Inici
                    </Link>
                  </motion.li>

                  <motion.li variants={itemVariants} className="mobile-nav-item">
                    <div className="mobile-dropdown-header" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                      <span className={`mobile-nav-link ${isActive('/aessbot') || isActive('/aessbot-inscripcio') ? 'active' : ''}`}>
                        AESSBot
                      </span>
                      <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'}`}></i>
                    </div>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.ul
                          className="mobile-dropdown-menu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <li>
                            <Link
                              to="/aessbot"
                              className={isActive('/aessbot') ? 'active' : ''}
                              onClick={handleNavClick}
                            >
                              AESSBot
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/aessbot-inscripcio"
                              className={isActive('/aessbot-inscripcio') ? 'active' : ''}
                              onClick={handleNavClick}
                            >
                              Inscripció AESSBot
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  <motion.li variants={itemVariants} className="mobile-nav-item">
                    <Link
                      to="/cursos"
                      className={`mobile-nav-link ${isActive('/cursos') ? 'active' : ''}`}
                      onClick={handleNavClick}
                    >
                      Cursos
                    </Link>
                  </motion.li>

                  <motion.li variants={itemVariants} className="mobile-nav-item">
                    <Link
                      to="/projectes"
                      className={`mobile-nav-link ${isActive('/projectes') ? 'active' : ''}`}
                      onClick={handleNavClick}
                    >
                      Projectes
                    </Link>
                  </motion.li>

                  <motion.li variants={itemVariants} className="mobile-nav-item">
                    <Link
                      to="/contact"
                      className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
                      onClick={handleNavClick}
                    >
                      Contacte
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar

