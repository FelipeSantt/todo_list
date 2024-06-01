import { Button } from "primereact/button";
import styled from "styled-components";
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useBuscarTarefas, useCriarTarefa } from "../../../hooks/tarefaHooks";
        
        

const HomeConatainer = styled.section`

`;

const Home = () => {

    const [visibleDialog, setVisibleDialog] = useState(false);
    const { register, handleSubmit } = useForm();
    const { data: tarefas, isFetched } = useBuscarTarefas();
    const { mutateAsync: handleCriar } = useCriarTarefa();

    const criarTarefa = (dados) => {
        console.log(dados);
    }



    return ( 
        <HomeConatainer className="px-8 py-6">
            <h1 className="flex justify-content-between align-items-center">
                Tarefas
                <Button
                    icon= "pi pi-plus"
                    label="Nova Tarefa"
                    onClick={() => setVisibleDialog(true)}
                />
            </h1>
            {
               isFetched && tarefas.map(tarefa => (
                    <div key={tarefa.id}>{tarefa.titulo}</div>
                ))
            }

            <Dialog 
                visible= {visibleDialog}
                header= "Nova tarefa"
                onHide={() => setVisibleDialog(false)}
            >
                <form 
                    className="flex flex-column gap-3"
                    onSubmit={handleSubmit(criarTarefa)}
                >
                    <InputText 
                        placeholder="Nome da tarefa"
                        {...register("nome", { required: true})}
                    />
                    <InputTextarea 
                        placeholder="Descrição da tarefa"
                        className="h-8rem"
                        autoResize
                        {...register("descrição")}

                    />
                    <Button
                        type="submit"
                        label="Salvar"
                    />
                </form>
                
            </Dialog>
        </HomeConatainer>
     );
}
 
export default Home;