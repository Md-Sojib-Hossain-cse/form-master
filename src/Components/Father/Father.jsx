import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import "./Father.css"

const Father = () => {
    return (
        <div>
            <h3>Father</h3>
            <div className="flex">
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;