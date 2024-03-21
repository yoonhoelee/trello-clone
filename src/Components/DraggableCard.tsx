import {Draggable} from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px 10px;
    background-color: ${(props) => props.theme.cardColor};
`;

interface IDraggableCardProps {
    toDo:string,
    index:number
}
function DraggableCard({toDo, index}:IDraggableCardProps) {
    return (
        <Draggable draggableId={toDo} index={index}>
            {(provided) => (
                <Card
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    {toDo}
                </Card>
            )}
        </Draggable>
    );
}

// React.memo: telling react to not rerender DraggableCard if the props didn't change
export default React.memo(DraggableCard);