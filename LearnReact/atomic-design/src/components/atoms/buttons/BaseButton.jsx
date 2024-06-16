
import styled from "styled-components";

export const BaseButton = styled.button`
    color: #fff;             // テキストの色
    padding: 8px 16px;       // パディング
    border: none;            // 枠線なし
    outline: none;           // アウトラインなし
    border-radius: 999px;    // 角を完全に丸くする
    font-size: 16px;         // フォントサイズ
    cursor: pointer;         // ホバー時のカーソルをポインターに
    transition: background-color 0.3s, opacity 0.3s; // 背景色と透明度の変化にトランジションを適用

    &:hover {
        background-color: #555;  // ホバー時の背景色
        opacity: 0.9;            // ホバー時の透明度
    }`