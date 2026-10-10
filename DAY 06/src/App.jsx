import "./App.css";
import Form from "./component/Form";
import UseCallBackComponent from "./component/UseCallBackComponent";
import UseMemoComponent from "./component/UseMemoComponent";

function App() {

    return (
            <>
                   {/* <UseMemoComponent/> */}
                    {/* useMemo is used to memoize a calculated value.
                    It can avoid repeating an expensive calculation when its dependencies have not changed. */}

                    {/* <UseCallBackComponent/> */}
                    <Form/>
            </>
    );
}
export default App;
