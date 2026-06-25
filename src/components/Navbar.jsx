import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Верхняя панель с гамбургером */}
      <div className="navbar">
        <span className="navbar-brand">👑 Dark Lord</span>
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Затемнение */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

      {/* Выдвижное меню */}
      <div ref={menuRef} className={`drawer ${isOpen ? 'open' : ''}`}>
        <h2 className="drawer-title">📋 Menu</h2>
        <Link to="/" className="drawer-link" onClick={handleLinkClick}>
          👾 About Me
        </Link>
        <Link to="/projects" className="drawer-link" onClick={handleLinkClick}>
          Projects 
        </Link>
        <Link to="/projects/fortune" className="drawer-link" onClick={handleLinkClick}>
         Fortune
        </Link>
        <Link to="/terms" className="drawer-link" onClick={handleLinkClick}>
          📄 Terms and Conditions
        </Link>
        <Link to="/privacy" className="drawer-link" onClick={handleLinkClick}>
          🔒 Privacy
        </Link>
        <Link to="/licenses" className="drawer-link" onClick={handleLinkClick}>
          📜 Licenses
        </Link>
      </div>
    </>
  )
}

export default Navbar
