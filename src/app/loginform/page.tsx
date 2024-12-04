'use client';
import LoginForm from '@/components/LoginForm';

// const LoginPage = () => {
//     return(
//         <main className="p-4 bg-orange-50 min-h-screen">
//             <h1 className="text-2xl font-bold text-orange-500 mb-4">Login</h1>
//             <LoginForm onSubmit={function (data: { email: string; password: string; }): void {
//                 throw new Error('Function not implemented.');
//             } } />

//         </main>
//     )
// };

// export default LoginPage;
export default function LoginPage(){
    return <LoginForm />
}