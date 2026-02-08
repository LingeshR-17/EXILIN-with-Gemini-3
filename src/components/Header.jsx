import { Link } from "react-router-dom";
 
export default function Header() {
  return (
   <header className="navbar">
     <div className="logo-container">
       <img src="/src/assets/logo.png" alt="EXILIN logo" className="logo-img" />
       <div className="logo-text ">EXILIN</div>
     </div>

  <nav className="nav-actions">
    <Link to="/" className="nav-btn active">Analyze</Link>
    <Link to="/compare" className="nav-btn">Compare</Link>
  </nav>
</header>
  );
}

