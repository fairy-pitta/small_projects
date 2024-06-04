import "./style.css";

const onClickAdd = () => {
    // テキストボックスの値を取得
    const inputText = document.getElementById("add-text").value; 
    // 取得後、初期化
    document.getElementById("add-text").value = "";

    createIncompleteTodo(inputText);
};

const createIncompleteTodo = (todo) => {
    // li作成
    const li = document.createElement("li");

    // div生成
    const div = document.createElement("div");
    div.className = "list-row"

    const p = document.createElement("p");
    p.className = "todo-item"
    p.innerText = todo;

    // buttonを作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "Done";
    completeButton.addEventListener("click", () => {

        // 押された完了ボタンの完了ボタンと削除ボタンを削除
        const moveTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();

        // 戻すボタンを生成
        const returnButton = document.createElement("button");
        returnButton.innerText = "Back";
        returnButton.addEventListener("click", () => {
            const todoText = returnButton.previousElementSibling.innerText;
            createIncompleteTodo(todoText);
            // delete the back button
            returnButton.closest("li").remove();
        })
        moveTarget.firstElementChild.appendChild(returnButton);

        // 完了セクションに移動
        document.getElementById("complete-list").appendChild(moveTarget);
    })

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
        // liタグをliタグから削除
        const deleteTarget = deleteButton.closest("li");

        document.getElementById("incomplete-list").removeChild(deleteTarget);
    })

    // 階層構造を作成
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    // htmlに差し込む
    document.getElementById("incomplete-list").appendChild(li)
}

document.getElementById("add-button").addEventListener("click", onClickAdd);