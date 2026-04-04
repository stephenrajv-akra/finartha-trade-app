import Navbar from '../components/common/Navbar';
import Header from '../components/common/Header';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <Header /> 
      <div className="flex pt-[52px]">
        <Navbar /> 
        <main className="flex-1 ml-20"> 
          <div className='w-full'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
