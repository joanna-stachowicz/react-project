import {connect} from 'react-redux';
import Search from './Search';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),           // aktualna fraza wyszukania
  countVisible: countVisibleCards(state),         // liczba kart widocznych po przefiltrowaniu
  countAll: countAllCards(state),                 // liczba wszystkich kart
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),   // dispatcher wysyłający akcję -> zmiana searchString w stanie aplikacji
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
