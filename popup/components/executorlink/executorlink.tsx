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
    return <a href="">{this.props.config.displayText}</a>;
  }
}