import {Draggable} from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div<{isDragging:boolean}>`
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px 10px;
    background-color: ${(props) => 
            props.isDragging ? "#e4f2ff" : props.theme.cardColor};
    box-shadow: ${(props) =>
            props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface IDraggableCardProps {
    toDo:string,
    index:number
}
function DraggableCard({toDo, index}:IDraggableCardProps) {
    return (
        <Draggable draggableId={toDo} index={index}>
            {(provided, snapshot) => (
                <Card
                    isDragging={snapshot.isDragging}
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