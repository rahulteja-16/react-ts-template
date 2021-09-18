import './styles.css';
import IMAGE from './name.png';
import LOGO from './test.svg';

const App = () => {
    return (
        <>
            <div>Hello</div>
            <img src={IMAGE} />
            <img src={LOGO} />
        </>
    )
}

export default App;