import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove, edit, changeStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import * as enums from '../../utils/enums/Tarefa'
import * as S from './styles'
import { Button, SaveButton } from '../../styles'

type Props = TaskClass

const Task = ({ title, priority, status, description: descriptionOriginal, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
      setDescription(descriptionOriginal)
  }, [descriptionOriginal])

  function cancelEditing () {
    setIsEditing(false)
    setDescription(descriptionOriginal)
  }

  function updateStatus (e: ChangeEvent<HTMLInputElement>) {
    dispatch(changeStatus({id, finished: e.target.checked}))
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input type="checkbox" id={title} onChange={updateStatus} checked={status === enums.Status.CONCLUDED}/>
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag $parameter='priority' $priority={priority}>{priority}</S.Tag>
      <S.Tag $parameter='status' $status={status}>{status}</S.Tag>
      <S.Description disabled={!isEditing} value={description} onChange={e => setDescription(e.target.value)} />
      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton onClick={() => {
              dispatch(edit({
                description,
                id,
                priority,
                status,
                title
              }))
              setIsEditing(false)
            }}>Save</SaveButton>
            <S.CancelRemoveButton onClick={cancelEditing}>Cancel</S.CancelRemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <S.CancelRemoveButton onClick={() => dispatch(remove(id))}>Remove</S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
