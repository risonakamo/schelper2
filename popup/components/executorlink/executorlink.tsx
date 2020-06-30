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