import DemoChilds from "./Child";

function DemoParent() {
    const handleClicks = () => {
        alert("Child");
    };

    return (
        <>
            <h1>Parent Component</h1>
            <DemoChilds handleClick={handleClicks} />
        </>
    );
}

export default DemoParent;
