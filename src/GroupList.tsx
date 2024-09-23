import { MouseEvent } from "react";
function GroupList() {
    const cities = ['Melboune', 'Sydney', 'Kochi', 'Frankfut'];
    const handleClicks = (event: MouseEvent) => console.log(event);
  return (
    <>

        <h1 className="display-1">Cities List</h1>
        <ul className="list-group">
            {cities.map(item => <li className="list-group-item" key = {item} onClick={handleClicks}>{item}</li>)}
        </ul>
    </>
  );
}

export default GroupList;
