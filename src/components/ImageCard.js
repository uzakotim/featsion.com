import React from "react";
import styled from "styled-components";

const Card = styled.div`
    background-color: ${({ theme }) => theme.cardBackground};
    box-shadow: ${({ theme }) => theme.cardBackground};
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

const ImageCard = ({ imageSrc, title, text }) => {
    return (
        <Card>
            <div className="flex flex-row">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-[60vw] h-[40vw] rounded-lg mr-4"
                />
            </div>
        </Card>
    );
};

export default ImageCard;
