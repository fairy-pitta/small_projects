import { css } from "@emotion/react"

export const Emotion = () => {

    const containerStyle = css`
        border: solid 2px #333;
        border-radius: 16px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    return (
        <div css={containerStyle}>
            <p>--Emotion--</p>
            <button>Press!!</button>
        </div>
    );
};
