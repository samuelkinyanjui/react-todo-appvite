import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import Navbar from './Navbar';
const TodoApp = () => {
    return (
      <>
      <Header />
      <TodosLogic />
      <Navbar />
    </>
    );
  };
  export default TodoApp;