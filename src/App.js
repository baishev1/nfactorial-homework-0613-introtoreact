import './App.css';
import {format} from "date-fns";
function App() {
  const date = new Date();  
  const date2 = format(date, "MM.dd.yyyy");
  const time = format(date, "kk:mm");
  return (
    <div>
      <div className="toolbar">
        <div className="logo-input">
          <img src="https://brandlogos.net/wp-content/uploads/2021/10/meta-logo.png" alt="" className="logo"></img>
          <input type="text"  className="toolbar-input"></input>
        </div>
          <div className="date">{date2} {time}</div>
      </div>
      
      <div className="all">
        <div className="block"> 
          <img src="https://images.unsplash.com/photo-1443891238287-325a8fddd0f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDM4Njg2Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500" alt="" className="block-hey"></img>
          <div className="text">HEY</div>
        </div>
        <div className="block">
        <img src="https://images.unsplash.com/24/flashlight.jpg?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMzAzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500" alt="" className="block-let"></img>
          <div className="text">LET'S</div>          
        </div>
        <div className="block">
        <img src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d" alt="" className="block-give"></img>
          <div className="text">GIVE</div>
        </div>
        <div className="block">
          <img src="https://images.unsplash.com/photo-1442522772768-9032b6d10e3e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIyMTQ5OTE4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500" alt="" className="block-all"></img>                  
          <div className="text">ALL</div>
        </div>
        <div className="block">
          <img src="https://images.unsplash.com/photo-1465156799763-2c087c332922?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjcwMzMwMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500" alt="" className="block-you"></img>
          <div className="text">YOU CAN</div>
        </div>
  
        

      </div>

    </div>
  );
}

export default App;
