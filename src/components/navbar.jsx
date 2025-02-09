import { useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore"

export default function Navbar(){
    const navigate = useNavigate();
    const { user, isAuthenticated, login, logout } = useAuthStore();
    return(
        <nav className='z-10 h-16 w-[100vw] flex items-center justify-between top-0 px-7 sticky bg-gradient-to-b from-[var(--primary)] to-transparent'>
         <div>
            <span className='text-3xl font-bold text-primary cursor-pointer select-none' onClick={() => navigate('/')}>Fakestore</span>
         </div>
         <div className='flex gap-3 items-center'>
          {isAuthenticated ? (
            <>
            <span>{user.username}</span>
            <button onClick={() => logout('/logout')} className='cursor-pointer outline p-1 rounded hover:bg-white hover:text-black'>Logout</button>
            </>
          ) : (
            <button onClick={() => login('/login')}>Login</button>
          )}
         </div>
      </nav>
    )
}