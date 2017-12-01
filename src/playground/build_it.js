
console.log("build_it.js is running")
const appRoot = document.getElementById('app')
let detailVisibility = true;
let details;

const build = {
  title: "Visibility Toggle",
  details: "All you need is scones.  #scones #scones.party",
  show: "Show Details"
};


const Details = () => {
  if (details){
    details = undefined;
    build.show = "Show Details";
    renderBuildIt();
  } else {
    details = <p>{build.details}</p>;
    build.show = "Hide Details";
    renderBuildIt();
  }
}

const renderBuildIt = () => {
  const template = (
    <div>
      <h1>{build.title}</h1>
      <button onClick={Details} id="show">
        {build.show}
      </button>
      {details}
    </div>
  )
  ReactDOM.render(template, appRoot)
}

renderBuildIt();
