import data from '../../data/portfolio.json';
import Panel from './Panel.jsx';

export default function List() {

  return (    
    <>
      {data.map( (each, index) => {
          return (
            <Panel 
              key={index}
              data={each} />
          )}
      )}
    </>        
  );
}