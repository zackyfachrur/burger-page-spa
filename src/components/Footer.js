import './Footer.css'

export default function Footers() {
  return(
    <div className="Footers">
      <div className="Footers-container">
        <div className="Footers-item">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
          <h2>Masakan Maman</h2>
        </div>
      </div>
    </div>
  );
}