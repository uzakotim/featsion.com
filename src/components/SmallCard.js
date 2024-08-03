import React from "react";
import styled from "styled-components";

const Card = styled.div`
    background-color: ${({ theme }) => theme.cardBackground};
    box-shadow: ${({ theme }) => theme.cardShadow};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding: 1rem;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.titleColor};
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const Text = styled.p`
    color: ${({ theme }) => theme.textColor};
    font-size: 1.25rem;
`;

const SmallCard = ({ imageSrc, title, text }) => {
    return (
        <Card>
            <div className="flex flex-col center">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-[80vw] h-[80vw] rounded-lg mr-4"
                />
                <div className="flex flex-col items-center w-[80vw]">
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                </div>
            </div>
        </Card>
    );
};

export default SmallCard;
