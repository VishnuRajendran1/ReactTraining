

//A common pattern in React is for a component to return multiple elements. 
//Fragments let you group a list of children without adding extra nodes to the DOM.
//

const Example1 = <section id="example1">
    <table>
        <tbody>
            <ColumnsWithoutFragment />
        </tbody>
    </table>
</section>;

function ColumnsWithoutFragment() {
    return (
        <div>
            <tr>
                <td>Hello</td>
                <td>World</td>
            </tr>
            <tr>
                <td>Hello</td>
                <td>Suyati</td>
            </tr>
        </div>
    );
};

function ColumnsWithFragment() {
    return (
        <React.Fragment>
            <tr>
                <td>Hello</td>
                <td>World</td>
            </tr>
            <tr>
                <td>Hello</td>
                <td>Suyati</td>
            </tr>
        </React.Fragment>
    );
};

const Example2 = <section id="example2">
    <table>
        <tbody>
            <ColumnsWithFragment />
        </tbody>
    </table>
</section>;

//This will produce a wrong html with div between <tbody> and <tr>
//ReactDOM.render(Example1, document.getElementById('react-container'));

//This will produce correct html 
ReactDOM.render(Example2, document.getElementById('react-container'));