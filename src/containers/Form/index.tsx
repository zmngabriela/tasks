import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Input, MainContainer, SaveButton, Title } from "../../styles"
import { FormStyle, Radio, Radios } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { addTask } from "../../store/reducers/tasks"

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const AddTask = (e: FormEvent) => {
    e.preventDefault()

    dispatch(addTask({
      title,
      priority,
      description,
      status: enums.Status.PENDING
    }))

    navigate('/')
  }

  return (
    <MainContainer>
    <Title>Add New Task</Title>
    <FormStyle onSubmit={AddTask}>
      <Input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" />
      <Input value={description} onChange={e => setDescription(e.target.value)} as="textarea" placeholder="Task description" />
      <Radios>
        <p>Priorities</p>
        {/* isso faz com que transformamos a enums.priority em array, e entao damos um map pra retornar os valores, cada um com suas propriedades */}
        {Object.values(enums.Priority).map((priority) => (
          <Radio key={priority}>
            <input value={priority} name='priority' type="radio" id={priority} defaultChecked={priority === enums.Priority.NORMAL} onChange={e => setPriority(e.target.value as enums.Priority)}/>
            <label htmlFor={priority}>{priority}</label>
          </Radio>
        ))}
      </Radios>
      <SaveButton type="submit">Add</SaveButton>
    </FormStyle>
    </MainContainer>
  )
}

export default Form
