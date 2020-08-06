import React, {useState} from 'react'

const Rerendering = () => {
  const [alpha, setAlpha] = useState(1);
  const [beta, setBeta] = useState(1);
  const [gamma, setGamma] = useState(1);

  return (
    <div>
      <ul>
        <li>Alpha: {alpha}</li>
        <li>Beta: {beta}</li>
        <li>Gamma: {gamma}</li>
      </ul>
      <div>
        <button className="btn btn-primary" onClick={() => setAlpha(alpha + 1)}>Alpha</button>&nbsp; | &nbsp;
        <button className="btn btn-secondary" onClick={() => setBeta(beta + 1)}>Beta</button>&nbsp; | &nbsp;
        <button className="btn btn-info" onClick={() => setGamma(gamma + 1)}>Gamma</button>
      </div>
    </div>
  )
}

export default Rerendering
