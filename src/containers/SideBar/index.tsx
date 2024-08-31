import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootReducer } from "../../store"
import { updateTerm } from "../../store/reducers/filter"
import CardFilter from "../../components/CardFilter"
import * as enums from '../../utils/enums/Tarefa'
import * as S from './styles'
import { Button, Input } from "../../styles"

type Props = {
  displayFilters: boolean
}

const SideBar = ({ displayFilters }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {displayFilters ? (
          <>
            <Input type="text" placeholder="Buscar" value={term} onChange={e => dispatch(updateTerm(e.target.value))}/>
            <S.Filters>
              <CardFilter value={enums.Status.PENDING} criterion='status' status='pending' />
              <CardFilter value={enums.Status.CONCLUDED} criterion='status' status='concluded' />
              <CardFilter value={enums.Priority.URGENT} criterion='priority' status='urgent' />
              <CardFilter value={enums.Priority.IMPORTANT} criterion='priority' status='important' />
              <CardFilter value={enums.Priority.NORMAL} criterion='priority' status='normal' />
              <CardFilter criterion='all' status='all' />
            </S.Filters>
          </>
        ) : <Button type="button" onClick={() => navigate('/')}>Return to tasks list</Button>}
      </div>
  </S.Aside>
  )
}

export default SideBar
