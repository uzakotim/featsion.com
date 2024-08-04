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
    font-size: 5.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const Text = styled.p`
    color: ${({ theme }) => theme.textColor};
    font-size: 1.25rem;
`;

const LeftLargeCard = ({ imageSrc, title, text }) => {
    return (
        <Card>
            <div className="flex flex-row">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-[600px] h-[400px] rounded-lg mr-4"
                />
                <div className="flex flex-col items-center text-justify">
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                </div>
            </div>
        </Card>
    );
};

export default LeftLargeCard;
