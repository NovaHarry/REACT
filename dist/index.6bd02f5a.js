const container = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "firstChild"
    }, [
        React.createElement("h1", {}, "Iam first H1 tag"),
        React.createElement("h2", {}, "Iam first H2 tag")
    ]),
    React.createElement("div", {
        id: "secondChild"
    }, [
        React.createElement("h1", {}, "Iam second H1 tag"),
        React.createElement("h2", {}, "Iam second H2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
