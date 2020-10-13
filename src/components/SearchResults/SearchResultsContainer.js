import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults, getListForCards } from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
  const text = props.match.params.text;
  const cards = getCardsForSearchResults(state, text);
  const cards2 = getListForCards(state, cards);
  return {
    cards: cards2,
  };
};

export default connect(mapStateToProps)(SearchResults);