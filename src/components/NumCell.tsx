interface props {
  number: number,
}

export const NumCell = ({number}: props) => {
  switch (number) {
    case 1: return <div className='text-cell' style={{color: "blue"}}>{number}</div>;
    case 2: return <div className='text-cell' style={{color: "green"}}>{number}</div>;
    case 3: return <div className='text-cell' style={{color: "red"}}>{number}</div>;
    case 4: return <div className='text-cell' style={{color: "rgb(0, 0, 105)"}}>{number}</div>;
    case 5: return <div className='text-cell' style={{color: "rgb(116, 0, 0)"}}>{number}</div>;
    case 6: return <div className='text-cell' style={{color: "rgb(0, 119, 119)"}}>{number}</div>;
    case 7: return <div className='text-cell' style={{color: "black"}}>{number}</div>;
    case 8: return <div className='text-cell' style={{color: "rgb(168, 168, 168)"}}>{number}</div>;
    default: return <div className="text-cell">Error</div>
  }
}