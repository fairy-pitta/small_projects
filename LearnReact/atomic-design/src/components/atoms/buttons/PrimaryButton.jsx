import styled from "styled-components";
import { BaseButton } from "./BaseButton";

// styled-components を使ってスタイル付きのボタンコンポーネントを定義
const SButton = styled(BaseButton)`
    background-color: blue;  // ボタンの背景色
`;


// PrimaryButton コンポーネントの定義
export const PrimaryButton = (props) => {
    const { children } = props;
    return (
        <SButton>{children}</SButton>  // スタイル付きのボタンをレンダリング
    );
};