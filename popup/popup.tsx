import executeConfig from "./executeconfig";

class PopupMain extends React.Component
{
  async componentDidMount()
  {
    console.log(await determineValidScripts(executeConfig));
  }

  render()
  {
    return <div>
      hey
    </div>;
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