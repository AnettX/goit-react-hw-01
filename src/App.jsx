import css from "./App.module.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";

import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json"

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json"

  function App() {
    return (
      <>
      <h2 className={css.taskApp}>Завдання 1 - Профіль соціальної мережі</h2>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
         <h2 className={css.taskApp}>Завдання 2 - Список друзів</h2>
         <FriendList friends={friends} />
         <h2 className={css.taskApp}>Завдання 3 - Історія транзакцій</h2>
         <TransactionHistory items={transactions} />
      </>
      
    );
  }
    
  export default App;