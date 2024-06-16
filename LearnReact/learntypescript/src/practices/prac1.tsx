
export const Prac1 = () => {

    const calcTotalFee = (num: number) => {
        const total = num * 1.1;
        console.log(total);
    };

    const onClickPractice = () => {
        calcTotalFee(1000);
    };

    return (
        <div>
            <p>Practice: Type of the Argument</p>
            <button onClick={onClickPractice}>Practice 1</button>
        </div>
    )
}