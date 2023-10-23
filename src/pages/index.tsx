import BaseLayout from 'layout';
import Home from 'modules/Home';
import GameBoard from './gameBoard/GameBoard';
import RoleDice from './diceRole/diceRole';

function HomePage() {
  return (
    <BaseLayout>
      <Home />
      <GameBoard />
      <RoleDice />
    </BaseLayout>
  );
}

export default HomePage;
