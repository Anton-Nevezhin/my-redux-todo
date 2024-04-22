import { useDispatch } from 'react-redux'
import { toogleFilterAll, toogleFilterComplete, toogleFilterNonComplete } from '../store/filterSlice'

const TodoFilter = () => {

    const dispatch = useDispatch()

    return (
        <>
              <p>Показать элементы:</p>
  <div>
    <input type="radio" id="contactChoice1" name="contact" value="Все" 
    onChange={() => dispatch(toogleFilterAll())}
    />
    <label for="contactChoice1">Все</label>

    <input type="radio" id="contactChoice2" name="contact" value="Выполненные"
        onChange={() => dispatch(toogleFilterComplete())}
    />
    <label for="contactChoice2">Выполненные</label>

    <input type="radio" id="contactChoice3" name="contact" value="Невыполненные"
    onChange={() => dispatch(toogleFilterNonComplete())}
    />
    <label for="contactChoice3">Невыполненные</label>
  </div>
        </>
    )
}

export default TodoFilter
