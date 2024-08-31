import AddButton from "../../components/AddButton"
import SideBar from "../../containers/SideBar"
import TaskList from "../../containers/TaskList"

const Home = () => {
  return (
    <>
      <SideBar displayFilters />
      <TaskList />
      <AddButton />
  </>
  )
}

export default Home
