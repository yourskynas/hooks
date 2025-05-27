import React, { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useClickOutside } from './hooks/useClickOutside'
import { useHover } from './hooks/useHover'
import { useFetch } from './hooks/useFetch'

interface User {
  id: number;
  name: string;
}

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const reactRef = useRef<HTMLHeadingElement>(null);
  const [hoverRef, isHovered] = useHover<HTMLParagraphElement>();
  useClickOutside(reactRef, () => setIsOpen(false));
  const { data, loading, error } = useFetch<User[]>("/api/users");

  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </button>
      </div>
      {isOpen && <h1 ref={reactRef}>React</h1>}
      <p ref={hoverRef}>{isHovered ? "Hovered" : "Not Hovered"}</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>{data.length}</p>}
    </>
  )
}

export default App
