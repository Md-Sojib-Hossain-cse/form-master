import Aunt from "../Aunt/Aunt";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GradFather.css";

const GrandFather = () => {
    return (
        <div className="granfather">
            <h2>GrandFather</h2>
            <section className="flex">
                <Father></Father>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default GrandFather;