import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { updateFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Tarefa'
import * as S from './styles'

export type Props = {
  status: string
  criterion: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ status, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const filter = useSelector((state: RootReducer) => state.filter)
  const tasks = useSelector((state: RootReducer) => state.tasks)

  // esse no caso e so pra criar um booleano, pra jogar pro styles.ts e validar o estilo do item que ta ativo
  // ele pega os valores que o onclick filtrou e atualizou no estado, e ve se eles sao vdd && vdd ou falso && falso e gera um booleano
  const verifyIsActive = () => {
    const sameCriterion = filter.criterion === criterion
    const sameValue = filter.value === value
    return sameCriterion && sameValue
  }

  const countTasks = () => {
    if (criterion === 'all') return tasks.itens.length
    if (criterion === 'priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (criterion === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }

  const counter = countTasks()
  // so pra criar uma constante e usar ela na props, pq se usar a funcao fica meio feio
  const active = verifyIsActive()

  // esse filtra e altera o estado do criterio e value quando clicamos no card que queremos filtrar
  const filtering = () => {
    dispatch(updateFilter({
      criterion,
      value
    }))
  }

  return (
    <S.Card $active={active} onClick={filtering}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{status}</S.Label>
    </S.Card>
  )
}

export default CardFilter
