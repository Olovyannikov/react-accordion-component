import Accordion from "./components/Accordion/Accordion";

const App = () => {
    return (
        <>
            <Accordion title={'What is your return policy?'}>
                <Accordion title={'What is your return policy?'}>
                    <div>123</div>
                    <div>123</div>
                    <div>123</div>
                    <div>123</div>
                    <div>123</div>
                    <div>123</div>
                </Accordion>
            </Accordion>
            <Accordion title={'What is your return policy?'}>
                <span>123</span>
            </Accordion>
            <Accordion title={'What is your return policy?'}>
                <span>123</span>
            </Accordion>
        </>
    );
}

export default App;
