import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useClickOutside } from './hooks/useClickOutside';
import { useHover } from './hooks/useHover';
import { useFetch } from './hooks/useFetch';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const reactRef = useRef(null);
  const [hoverRef, isHovered] = useHover();
  useClickOutside(reactRef, () => setIsOpen(false));
  const { data, loading, error } = useFetch("/api/users");

  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </button>
      </div>
      {isOpen && <h1 ref={reactRef}>React</h1>}
      <p ref={hoverRef}>{isHovered ? "Hovered" : "Not Hovered"}</p >
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>{data.length}</p>}
    </>
  )
}

export default App
