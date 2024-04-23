import './App.css';
import Parent from './Components/Parent/Parent';
import Child from './Components/Child/Child';

function App() {
  const data = {
    name: 'Super Parent',
    children: [
      {
        name: 'Parent 1',
        children: [
          { name: 'Child 1.1' },
          { name: 'Child 1.2' }
        ]
      },
      {
        name: 'Parent 2',
        children: [
          { name: 'Child 2.1' },
          { name: 'Child 2.2' }
        ]
      }
    ]
  };
  const handleMouseEnter = () => {
    // You can add any additional functionality here
  };

  const handleMouseLeave = () => {

    // You can add any additional functionality here
  };
  return (
    <div className="App">
       <Parent
        name={data.name}
        isSuperParentHighlighted={true} // Since it's the top-level parent, it's always highlighted
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      >
        {data.children.map((parent, index) => (
          <Parent
            key={index}
            name={parent.name}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          >
            {parent.children.map((child, index) => (
              <Child
                key={index}
                name={child.name}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            ))}
          </Parent>
        ))}
      </Parent>
    </div>
  );
}

export default App;
