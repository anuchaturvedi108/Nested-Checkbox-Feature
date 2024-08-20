import React, { useState } from 'react';

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
      children: [
        {
          label: 'Childp2.c1',
          id: 6,
        },
      ],
    },
  ];

  const [checkBoxItems, setCheckBoxItem] = useState({});

  const handleChildChange = (event, parentId, childId) => {
    const isChildChecked = checkBoxItems[childId] === true;
    setCheckBoxItem({
      ...checkBoxItems,
      [childId]: isChildChecked ? false : true,
      [parentId]: !isChildChecked,
    });
  };

  const ChildBox = ({ child, parentId, childId }) => {
    return (
      <>
        <input
          type="checkbox"
          checked={checkBoxItems[childId]}
          onChange={(event) => handleChildChange(event, parentId, childId)}
        />
        <label>{child.label}</label>
        <br />
        {child.children &&
          child.children.map((subItem) => (
            <ChildBox key={subItem.id} child={subItem} /> // Recursive call
          ))}
      </>
    );
  };

  const handleClick = (event, parentId) => {
    const isChecked = event.target.checked;
    const updatedItems = { ...checkBoxItems, [parentId]: isChecked };

    // Check/uncheck all child checkboxes related to this parent
    const parentItem = config.find((item) => item.id === parentId);
    if (parentItem.children) {
      parentItem.children.forEach((child) => {
        updatedItems[child.id] = isChecked;
      });
    }

    setCheckBoxItem(updatedItems);
  };

  return (
    <div
      className="App"
      style={{ padding: '20px', backgroundColor: '#f5f5f5' }}
    >
      {config.map((item) => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <input
            type="checkbox"
            checked={checkBoxItems[item.id]}
            onChange={(e) => handleClick(e, item.id)}
          />
          <label>{item.label}</label>

          <div style={{ marginLeft: '20px' }}>
            {item.children &&
              item.children.map((subItem) => (
                <ChildBox
                  key={subItem.id}
                  child={subItem}
                  parentId={item.id}
                  childId={subItem.id}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
