import {Droppable} from "react-beautiful-dnd";
import React, {useRef} from "react";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { useForm } from "react-hook-form";
import {IToDo} from "../atoms";

const Wrapper = styled.div`
    padding: 10px 0px;
    padding-top: 10px;
    width: 300px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>`
    background-color: ${(props) =>
            props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThis ? "#b2bec3" : "transparent"
    };
    flex-grow: 1;
    transition: background-color 0.3s ease-in-out;
    padding: 20px;
`;

interface IBoardProps {
    toDos: IToDo[];
    boardId: string;
}

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface IForm {
    toDo: string;
}
function Board({toDos, boardId}: IBoardProps) {
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const onValid = ({toDo} : IForm) => {
        setValue("toDo", "");
    };
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input {...register("toDo", {required:true})} type="text" placeholder={`Add task on ${boardId}`}/>
            </Form>
            <Droppable droppableId={boardId}>
                {(provided, snapshot) => (
                    <Area isDraggingOver={snapshot.isDraggingOver}
                          isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                          ref={provided.innerRef} {...provided.droppableProps}
                    >
                        {toDos.map((toDo, index) => (
                            <DraggableCard key={toDo.id} index={index} toDoId={toDo.id} toDoText={toDo.text}/>
                        ))}
                        {provided.placeholder}
                    </Area>
                )}
            </Droppable>
        </Wrapper>
    );
}

export default Board;