const { Fragment } = React;

const units = [];

const handleClick = (e) => {
  console.log(e);
  
  
	if(e.target.classList.contains("active")){
      e.target.classList.remove("active")
      var index = units.indexOf(e.target.innerHTML);
      units.splice(index, 1);
  }else{
    e.target.classList.add("active");
    units.push(e.target.innerHTML);
  }
  document.getElementById("units").innerHTML = " ";
  units.forEach((value, index) => {
    var li = document.createElement("li");
    var textNode = document.createTextNode(value);
    li.append(textNode);
    
    document.getElementById("units").append(li);
  })
}


// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

const List = ({ items }) => (
  <div>
    <Fragment>
      <ul id="units">
        
      </ul>
    </Fragment>

    <Fragment>
      <ul className="List">
        {items.map(item => (
          <li key={item.name} className={`List__item List__item--${item.color}`} onClick={handleClick}>
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  </div>
  
);

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

ReactDOM.render(
  <List items={items}/>,
  document.getElementById('root')
);