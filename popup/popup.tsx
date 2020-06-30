import executeConfig from "./executeconfig";
import {ExecutorLinkGroup} from "./components/executorlink/executorlink";

import "./popup.less";

interface PopupMainState
{
  activeConfigs:ScriptExecutionConfiguration[]
}

class PopupMain extends React.Component
{
  state:PopupMainState

  constructor(props:any)
  {
    super(props);

    this.state={
      activeConfigs:[]
    };
  }

  async componentDidMount()
  {
    this.setState({
      activeConfigs:await determineValidScripts(executeConfig)
    });
  }

  // create executor links groups from current active configs
  createExecutors():ExecutorLinkGroup[]
  {
    if (!this.state.activeConfigs.length)
    {
      return <p>No actions available.</p>;
    }

    var groupedConfigs:GroupedExecuteConfigs=_.groupBy(this.state.activeConfigs,
      (x:ScriptExecutionConfiguration)=>{
      return x.category;
    });

    return _.map(groupedConfigs,(x:ScriptExecutionConfiguration[],i:string)=>{
      if (i=="undefined")
      {
        i="Uncategorised";
      }

      return <ExecutorLinkGroup configs={x} category={i} key={i}/>;
    });
  }

  render()
  {
    return <>
      <h1>SC Helper 2</h1>

      <div className="links">
        {this.createExecutors()}
      </div>
    </>;
  }
}

// given array of executor configs, reduce to array of applicable configs
async function determineValidScripts(configs:ScriptExecutionConfiguration[])
  :Promise<ScriptExecutionConfiguration[]>
{
  // array of bools matching whether or not the config in the same position is
  // valid or not.
  var validConfigs:boolean[]=await Promise.all(_.map(configs,(x:
    ScriptExecutionConfiguration)=>{
    return validateUrl(x);
  }));

  return _.filter(configs,(x:ScriptExecutionConfiguration,i:number)=>{
    return validConfigs[i];
  });
}

// return if an executor config is applicable to at least one tab
async function validateUrl(config:ScriptExecutionConfiguration)
  :Promise<boolean>
{
  return new Promise((resolve)=>{
    chrome.tabs.query({
      active:!config.multiTarget,
      currentWindow:true,
      url:config.targetUrl
    },(tabs:Tab[])=>{
      if (tabs.length)
      {
        resolve(true);
        return;
      }

      resolve(false);
    });
  });
}

function main()
{
  ReactDOM.render(<PopupMain/>,document.querySelector(".main"));
}

window.onload=main;