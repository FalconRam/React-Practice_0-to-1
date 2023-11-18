const heading = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h2", {}, "Heading 2");
const heading3 = React.createElement("h3", {}, "Heading 3");
const conatiner = React.createElement("div", { id: "root" }, [
  heading,
  heading2,
  heading3,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(conatiner);
