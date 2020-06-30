import "./executorlink.less";

interface ExecutorLinkProps
{
  config:ScriptExecutionConfiguration
}

/* ExecutorLink(ScriptExecutionConfiguration config) */
export default class ExecutorLink extends React.Component
{
  props:ExecutorLinkProps

  render()
  {
    return <a href="" className="executor-link">
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