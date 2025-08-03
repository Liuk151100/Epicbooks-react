import { Alert } from "react-bootstrap";
import { useState, useEffect } from 'react';

function Welcome() {
  const [mostraAlert, setMostraAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostraAlert(false); // Nasconde l'alert dopo 5 secondi
    }, 5000);

    return () => clearTimeout(timer); // Pulisce il timer se il componente viene smontato prima
  }, []);

  return (
    <>
      {mostraAlert && (
        ["success"].map((variant) => (
          <Alert key={variant} variant={variant} className="mx-1 my-3">
            Welcome in your library
          </Alert>
        ))
      )}
    </>
  );
}

export default Welcome;


