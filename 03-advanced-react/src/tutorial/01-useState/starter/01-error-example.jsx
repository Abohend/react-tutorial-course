const ErrorExample = () => {
    let cnt = 0;
    const IncCnt = () => {
        cnt += 1;
        console.log(cnt);
    };
    return (
        <div>
            <h2>{cnt}</h2>
            <button onClick={IncCnt}>Increase</button>
        </div>
    );
};

export default ErrorExample;
