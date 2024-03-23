import Cousin from "../Cousin/Cousin";

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className="flex">
                <Cousin name={'Ramsad'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </section>
        </div>
    );
};

export default Aunt;