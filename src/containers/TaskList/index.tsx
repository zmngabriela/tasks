import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import Task from "../../components/Task"
import { MainContainer, Title } from "../../styles"

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, criterion, value } = useSelector((state: RootReducer) => state.filter)

  const filterTask = () => {
    let filteredTasks = itens

    if (term !== undefined) {
      filteredTasks = filteredTasks.filter((item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0)
    if (criterion === 'priority') {
      filteredTasks = filteredTasks.filter(item => item.priority === value)
    } else if (criterion === 'status') {
      filteredTasks = filteredTasks.filter(item => item.status === value)
    }
    return filteredTasks
    } else {
        return itens
    }
  }

  const displayResultFiltering = (quantity: number) => {
    let mensage = ''
    const complement = term !== undefined && term.length > 0 ? ` e "${term}"` : ''

    if (criterion === 'all') {
      mensage = `found ${quantity} task(s) as "all" ${complement}`
    } else {
      mensage = `found ${quantity} task(s) as "${criterion}=${value}" ${complement}`
    }
    return mensage
  }

  const tasks = filterTask()
  const mensage = displayResultFiltering(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{mensage}</Title>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task description={t.description} title={t.title} status={t.status} priority={t.priority} id={t.id}/>
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

  export default TaskList
