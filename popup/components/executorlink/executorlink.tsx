import "./executorlink.less";

interface ExecutorLinkProps
{
  config:ScriptExecutionConfiguration
  key?:string|number
}

/* ExecutorLink(ScriptExecutionConfiguration config) */
export default class ExecutorLink extends React.Component
{
  props:ExecutorLinkProps

  constructor(props:ExecutorLinkProps)
  {
    super(props);
    this.executeLink=this.executeLink.bind(this);
  }

  // perform link execution from set config
  executeLink(e:Event):void
  {
    e.preventDefault();

    chrome.tabs.query({
      active:!this.props.config.multiTarget,
      currentWindow:true,
      url:this.props.config.targetUrl
    },async (tabs:Tab[])=>{
      var results=await Promise.all(_.map(tabs,(x:Tab)=>{
        return executeTabScript(x,`/scripts/${this.props.config.script}.js`);
      }));

      console.log(results);
    });
  }

  render()
  {
    return <a href="" className="executor-link" onClick={this.executeLink}>
      {this.props.config.displayText}
    </a>;
  }
}

interface ExecutorLinkGroupProps
{
  configs:ScriptExecutionConfiguration[]
  category:string
}

/* ExecutorLinkGroup(ScriptExecutionConfiguration[] configs, string category) */
export class ExecutorLinkGroup extends React.Component
{
  props:ExecutorLinkGroupProps

  render()
  {
    return <div>
      <h2>{this.props.category}</h2>
      {_.map(this.props.configs,(x:ScriptExecutionConfiguration,i:number)=>{
        return <ExecutorLink config={x} key={i}/>;
      })}
    </div>;
  }
}

// execute script in tab, return result as promise, could be null if nothing
// returned from script or something wrong happened
function executeTabScript(tab:Tab,script:string):Promise<any|null>
{
  return new Promise((resolve)=>{
    chrome.tabs.executeScript(tab.id,{file:script},(res:any[])=>{
      if (res.length)
      {
        resolve(res[0]);
      }

      else
      {
        resolve(null);
      }
    });
  });
}