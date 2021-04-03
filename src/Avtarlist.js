import react from 'react';

const Avtarlist=(props)=> {
  return (
    <div className="avtarclass ma4 dib pa5 bg-light-purple grow shadow-4 ">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avtaar" />
      <h1 className="tc" >{props.name}</h1>
      <p className="tc">{props.job}</p>
    </div>
  )
}
export default Avtarlist;