import React from 'react';

function App() {
  const config = [
    {
      label: 'Parent1',
      id: 1,
      children: [
        {
          label: 'Child p1.c1',
          id: 2,
        },
        {
          label: 'Child p1.c2',
          id: 3,
          children: [
            {
              label: 'Child p1.c2.d1',
              children: [
                {
                  label: 'Child p1.c2.d1.e1',
                  id: 9,
                },
                {
                  label: 'Child p1.c2.d2.e2',
                  id: 88,
                },
                {
                  label: 'Childp1.c2.d3.e1',
                  id: 989,
                },
              ],
              id: 9,
            },
            {
              label: 'Child p1.c2.d2',
              id: 88,
            },
            {
              label: 'Childp1.c2.d3',
              id: 989,
            },
          ],
        },
        {
          label: 'Childp1.c3',
          id: 4,
        },
      ],
    },
    {
      label: 'Parent2',
      id: 5,
    },
  ];

  const ChildBox = ({ child }) => {
    return (
      <>
        <input type="checkbox" />
        <label>{child.label}</label>
        <br />
        <div style={{ marginLeft: '25px' }}>
          {child.children &&
            child.children.map((subItem) => (
              <ChildBox key={subItem.id} child={subItem} /> // Recursive call
            ))}
        </div>
      </>
    );
  };

  return (
    <div className="App">
      {config.map((item) => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <input type="checkbox" />
          <label>{item.label}</label>

          <div style={{ marginLeft: '20px' }}>
            {item.children &&
              item.children.map((subItem) => (
                <ChildBox key={subItem.id} child={subItem} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
