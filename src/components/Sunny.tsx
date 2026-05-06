export default function Sunny() {
  return (
    <div className="sunny-stage" aria-hidden="true">
      <div className="sunny-clouds">
        <div className="sunny-cloud cloud-d">
          <div className="sunny-underside" />
          <div className="sunny-puff p1" />
          <div className="sunny-puff p2" />
          <div className="sunny-puff p3" />
        </div>
        <div className="sunny-cloud cloud-a">
          <div className="sunny-underside" />
          <div className="sunny-puff p1" />
          <div className="sunny-puff p2" />
          <div className="sunny-puff p3" />
          <div className="sunny-puff p4" />
        </div>
        <div className="sunny-cloud cloud-b">
          <div className="sunny-underside" />
          <div className="sunny-puff p1" />
          <div className="sunny-puff p2" />
          <div className="sunny-puff p3" />
        </div>
        <div className="sunny-cloud cloud-c">
          <div className="sunny-underside" />
          <div className="sunny-puff p1" />
          <div className="sunny-puff p2" />
          <div className="sunny-puff p3" />
          <div className="sunny-puff p4" />
        </div>
      </div>

      <div className="sunny-birds">
        <div className="sunny-bird b1">
          <svg viewBox="0 0 22 8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path className="sunny-wing" d="M1 6 L7 2 L11 5 L15 2 L21 6" />
          </svg>
        </div>
        <div className="sunny-bird b2">
          <svg viewBox="0 0 22 8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path className="sunny-wing" d="M1 6 L7 2 L11 5 L15 2 L21 6" />
          </svg>
        </div>
        <div className="sunny-bird b3">
          <svg viewBox="0 0 22 8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path className="sunny-wing" d="M1 6 L7 2 L11 5 L15 2 L21 6" />
          </svg>
        </div>
      </div>

      <div className="sunny-sun">
        <div className="sunny-corona" />
        <div className="sunny-rays">
          <span className="sunny-ray" /><span className="sunny-ray" /><span className="sunny-ray" />
          <span className="sunny-ray" /><span className="sunny-ray" /><span className="sunny-ray" />
          <span className="sunny-ray" /><span className="sunny-ray" /><span className="sunny-ray" />
          <span className="sunny-ray" /><span className="sunny-ray" /><span className="sunny-ray" />
        </div>
        <div className="sunny-glow" />
        <div className="sunny-disk" />
        <div className="sunny-core" />
        <div className="sunny-motes">
          <span className="sunny-mote" /><span className="sunny-mote" />
          <span className="sunny-mote" /><span className="sunny-mote" />
          <span className="sunny-mote" /><span className="sunny-mote" />
        </div>
      </div>
    </div>
  )
}
