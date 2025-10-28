import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
    const [checked, setChecked] = useState(false);
    const [framework, setFramework] = useState("react");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(checked, framework);
    };
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h4>Other Inputs</h4>
                {/* name */}
                <div className="form-row" style={{ textAlign: "left" }}>
                    <label htmlFor="shipping"> Free Shipping </label>
                    <input
                        type="checkbox"
                        id="shipping"
                        onChange={(e) => setChecked(e.target.checked)}
                    ></input>
                </div>
                <div className="form-row" style={{ textAlign: "left" }}>
                    <label htmlFor="framework" className="form-label">
                        Framework
                    </label>
                    <select
                        id="framework"
                        onChange={(e) => setFramework(e.target.value)}
                    >
                        {frameworks.map((f) => {
                            return (
                                <option key={f} value={f}>
                                    {f}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
        </div>
    );
};
export default OtherInputs;
