import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import Navbar from './Navbar';
import UncontrolledForm from './UncontrolledForm';
import Form from './form';
const TodoApp = () => {
    return (
      <>
      <Header />
      <TodosLogic />
      <Navbar />
      <UncontrolledForm />
      < Form />
    </>
    );
  };
  export default TodoApp;