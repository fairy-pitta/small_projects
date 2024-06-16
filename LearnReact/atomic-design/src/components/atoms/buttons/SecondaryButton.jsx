import styled from "styled-components";
import { BaseButton } from "./BaseButton";

// styled-components を使ってスタイル付きのボタンコンポーネントを定義
const SButton = styled(BaseButton)`
    background-color: #444;  // ボタンの背景色
`;

// SecondaryButton コンポーネントの定義
export const SecondaryButton = (props) => {
    const { children } = props;
    return (
        <SButton>{children}</SButton>  // スタイル付きのボタンをレンダリング
    );
};