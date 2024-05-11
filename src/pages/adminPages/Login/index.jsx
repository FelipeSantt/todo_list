import styled from "styled-components";

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";
        
        

const LoginContainer = styled.main`
    & input {
        width: 100%;
    }
`;


const Login = () => {

    const {register, handleSubmit, reset, formState: { errors }} = useForm();

    const login = (dados) => {
        console.log(dados);
    }

    return ( 
        <LoginContainer className="h-screen surface-100 flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit(login)} className="w-3 surface-0 p-3 border-round-sm">
                <label htmlFor="Email" className="block text-sm font-bold uppercase mb-1">Email</label>
                <InputText
                    id="email"
                    type="email"
                    placeholder="email@gmail.com"
                    className="w-full" 
                    {...register("email", {required: true})}
                    aria-invalid={errors.email ? true : false}
                />

                {
                    errors.email && (
                        <span className="text-red-500 text-sm">Campo Obrigatório</span>
                )}
                <label htmlFor="password" className="block text-sm font-bold uppercase mb-1">Password</label>
                <Password
                    id="password"
                    placeholder="*********"
                    feedback={false}
                    className="w-full"
                    panelStyle={{width:'100%'}}
                    {...register("password", { required: true })}
                    aria-invalid={errors.password  ? true : false}
                />
                {
                    errors.password && (
                        <span className="text-red-500 text-sm">Campo Obrigatório</span>
                )}
                <Button 
                    label="Entrar"
                    type="submit"
                    className="w-full"
                />
            </form>
        </LoginContainer>
     );
}
 
export default Login;