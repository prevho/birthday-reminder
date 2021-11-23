import React, {useState} from 'react';
import Data from './Data';

// class Birthday extends React.Component {
//   render() {
//     return (
//       <div>
//           <h1>Birthday Reminder</h1>
//       </div>
//     );
//   }
// }

// export default Birthday;

function Birthday() {
    const [people, setPeople] = useState(Data);

    //Use map to loop through
    const person = people.map((item, key) => {
        return  (
            <div className="contact">
                <div>
                <img src={item.image} alt={item.name}/>
                </div>
                <div>
                <p>Name : {item.name}</p>
                <p>Email : {item.email}</p>
                <p>Age : {item.age} Years</p>
                </div>
            </div>
        )
    })

    const clear = (() => {
        setPeople([])
    })

    return (
        <div>
            <h1>{people.length} Birthday Reminder</h1>
            {person}
            <button className="mybtn" type="submit" onClick={clear}>Clear All</button>
        </div>
    )
}

export default Birthday

